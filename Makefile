BASE = .

ISTANBUL = ./node_modules/.bin/istanbul
COVERAGE_OPTS = --lines 95 --statements 95 --branches 95 --functions 95

main: lint test

build:
	cd BUILD && node BUILD.js

cover:
	$(ISTANBUL) cover test/run.js --root ./lib -- -T unit,functional

check-coverage:
	$(ISTANBUL) check-coverage $(COVERAGE_OPTS)

test: cover check-coverage

test-cov: cover check-coverage
	open coverage/lcov-report/index.html

lint:
	./node_modules/jshint/bin/hint ./lib --config $(BASE)/.jshintrc


.PHONY: test, build

/*
* Random credit card generator for Visa, Mastercard, American Express and Discover cards
*
* Based on Gist provided by Brad Conte at https://gist.github.com/B-Con/4988902
*/

function generateVisa() {
    var size = 13 + Math.floor(Math.random() * 4) % 4;
    var str = new Array();
    while(size--) str[size] = 0;
  	str[0] = 4;
    
    return _generateCard(str, 1);
}

function generateMastercard() {
    var size = 16 + Math.floor(Math.random() * 4) % 4;
    var str = new Array();
    while(size--) str[size] = 0;
  	str[0] = 5;
		var t = Math.floor(Math.random() * 5) % 5;
		str[1] = 1 + t;	  // Between 1 and 5.
    
    return _generateCard(str, 2);
}

function generateAmericanExpress() {
    var size = 15;
    var str = new Array();
    while(size--) str[size] = 0;
  	str[0] = 3;
    if (Math.floor(Math.random() * 2) % 2) {
		  str[1] = 4;
    } else {
      str[1] = 7;
    }
    
    return _generateCard(str, 2);
}

function generateDiscover() {
    var size = 16;
    var str = new Array();
    while(size--) str[size] = 0;
    // For easy creation only 6011 as first part is created.
    // Other valid options are 622126 to 622925, 644, 645, 646, 647, 648, 649 and 65
    str[0] = 6;
		str[1] = 0;
		str[2] = 1;
		str[3] = 1;
    
    return _generateCard(str, 4);
}
	
function _generateCard(str, pos) {
    var len = str.length;
    pos = _generateRemainingNumbers(str, pos, len);
    var sum = _calculateLuhnChecksum(str, len);
    str[len - 1] = _determineLastDigit(sum);
    
    return str.join('');
}

function _generateRemainingNumbers(str, pos, len) {
  while (pos < len - 1) {
		str[pos++] = Math.floor(Math.random() * 10) % 10;
	}
  return pos;
}

function _calculateLuhnChecksum(str, len) {
  var t = 0;
  var sum = 0;
  var len_offset = (len + 1) % 2;
	for (var pos = 0; pos < len - 1; pos++) {
		if ((pos + len_offset) % 2) {
			t = str[pos] * 2;
			if (t > 9) {
				t -= 9;
			}
			sum += t;
		}
		else {
			sum += str[pos];
		}
	}
  
  return sum;
}

function _determineLastDigit(sum) {
  return (10 - (sum % 10)) % 10; 
}

var creditcard = [
    function visa () {
      return {
        issuer: "Visa",
        number: generateVisa()
      };
    },
    function mastercard () {
      return {
        issuer: "Mastercard",
        number: generateMastercard()
      };
    },
    function americanexpress () {
      return {
        issuer: "American Express",
        number: generateAmericanExpress()
      }
    },
    function discover () {
      return {
        issuer: "Discover",
        number: generateDiscover()
      }
    }
];

exports.generate = function generate(cardType) {
    if (cardType == "visa") {
        return creditcard[0]();
    } else if (cardType == "mastercard") {
        return creditcard[1]();
    } else if (cardType == "americanexpress") {
        return creditcard[2]();
    } else if (cardType == "discover") {
        return creditcard[3]();
    } else {
        var length = creditcard.length;
        var random = Math.floor(Math.random() * length) % length;
        return creditcard[random]();
    }
};
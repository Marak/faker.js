/*
* Random credit card generator for Visa, Mastercard, American Express and Discover cards
*
* Based on Gist provided by Brad Conte at https://gist.github.com/B-Con/4988902
*/
(function(exports) {
  var cards = {
    visa: {
      issuer: "Visa",
      length: 13 + Math.floor(Math.random() * 4) % 4,
      firstPart: ["4"]
    },
    mastercard: {
      issuer: "Mastercard",
      length: 16 + Math.floor(Math.random() * 4) % 4,
      firstPart: [
        "51", "52", "53", "54", "55"
      ]
    },
    americanexpress: {
      issuer: "American Express",
      length: 15,
      firstPart: [
        "34", "37"
      ]
    },
    discover: {
      issuer: "Discover",
      length: 16,
      firstPart: [
        "6011" // Other valid options are 622126 to 622925, 644, 645, 646, 647, 648, 649 and 65
      ]
    }
  };
  	
  function _generateCard(cardType) {
    var size = cards[cardType].length;
    // Initialize array
    var str = new Array();
    while(size--) str[size] = 0;
    
    // Set fixed first part
    var firstParts = cards[cardType].firstPart
    var firstPart = firstParts[Math.floor(Math.random() * firstParts.length)];
    
    firstPart.split('').forEach(function(char, i) {
      str[i] = char;
    });
    
    // Add random rest
    _generateRemainingNumbers(str, firstPart.length, str.length);
    var sum = _calculateLuhnChecksum(str, str.length);
    
    // Set last check digit
    str[str.length - 1] = _determineLastDigit(sum);
    
    return {
      issuer: cards[cardType].issuer,
      number: str.join('')
    };
  }
  
  function _generateRemainingNumbers(str, pos, len) {
    while (pos < len - 1) {
  		str[pos++] = Math.floor(Math.random() * 10) % 10;
  	}
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
  
  exports.generate = function generate(cardType) {
    if (cardType != undefined) {
      return _generateCard(cardType);
    } else {
      // Choose random card type
      var keys = Object.keys(cards);
      var card = keys[ keys.length * Math.random() << 0];
      return _generateCard(card);
    }
  };
})(exports);
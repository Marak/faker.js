/*
 * Generate a random token or string, use for 'forgot my password' authentication or for faking password data
 */

var token = {
    generateToken: function(size) {
      var string = '';
      for (var i = 0; i < size; i += 1) {
        var date = new Date();
        /*
         * Generate a Random Number between 0 and 2 and pick type of character accordingly
         *   if number is 0, pick an ascii value of a digit
         *   if number is 1, pick an ascii value of an uppercase character
         *   if number is 2, pick an ascii value of a lowercase character
         */
        var set = Math.round(Math.random()*2);
        var upperbound, lowerbound;

        if(set==0) { 
          upperbound = 57-48;
          lowerbound = 48;
        } else if (set==1) { 
          upperbound = 90-65;
          lowerbound = 65;
        } else if (set==2) { 
          upperbound = 122-97;
          lowerbound = 97;
        }
        /*
         * Pick random ascii value from the chosen set and convert value to character
         */
        var rand = Math.round(Math.random(date.getMilliseconds())*upperbound)+lowerbound;
        string += String.fromCharCode(rand);
      }
      return string;
    }
}
module.exports = token;

import React from 'react';

// When user selects multiple choice, we could determine the number of responses based
// on the number that they fill in...

export default React.createClass({
  checkMultChoice: function(selected) {
    if (selected === "Multiple Choice") {
      return (
        A: <input type="text" name="Aanswer"><br>
        B: <input type="text" name="Banswer"><br>
        C: <input type="text" name="Canswer"><br>
        D: <input type="text" name="Danswer"><br>
        E: <input type="text" name="Eanswer"><br>
      );
    }
  },
  render: function() {
    return (
      <form>
        Question: <input type="text" name="question"><br>
        Type : <select>
                <option value="Thumbcheck" selected>Thumbcheck</option>
                <option value="Multiple Choice">Multiple Choice</option>
                <option value="Open Response">Open Response</option>
                {checkMultChoice(value)}
               </select><br>
        
        <input type="submit" value="Save to Presentation">
      </form>
    );
  }
});
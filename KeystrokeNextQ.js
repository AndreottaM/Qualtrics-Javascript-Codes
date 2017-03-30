//Accept keystrokes, and proceed to next screen automatically
//Assumes 2 radio button multiple choice

var InputId = $("QR~"+this.questionId+"~1");
InputId.style.display="none";
InputId = $("QR~"+this.questionId+"~2");
InputId.style.display="none";
  
if ($('NextButton'))    //Hides next button
    $('NextButton').hide();
    if ($('PreviousButton'))  //Hides previous button
    $('PreviousButton').hide();
 
    var that = this;
    Event.observe(document,'keydown',function(e){
    var choiceID = null;
    if (e.keyCode == 80) //'p' pressed
    {
    choiceID = 2;
    }
    else if (e.keyCode == 81) //'q' pressed
    {
    choiceID = 1;
    }
    if (choiceID)
    {
    that.setChoiceValue(choiceID,true);
    that.clickNextButton();
    }
    });

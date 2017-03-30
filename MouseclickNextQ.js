//Progresses to next question after user selects response with a mouse click

this.hideNextButton();  //hides next button
this.hidePreviousButton();  //hides previous button
this.questionclick = function(event,element){
if (element.type == 'radio')
{
this.clickNextButton();
}
}

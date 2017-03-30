# Qualtrics Wiki

This is a wiki I will use to record important information (e.g. ideas, instructions) for use on Qualtrics. Mostly, this will be information which may assist with the implementation of the Q methodology in Qualtrics. You can access the wiki [here](https://github.com/AndreottaM/Qualtrics-Javascript-Codes/wiki).

# Code
In the repository, I have added snippets of code which may be useful in the future. The files are:
1. **HTML code**, with a *.html extension*
2. **JavaScript code**, with a *.js extension*
3. **A survey** which can be directly imported into Qualtrics, with a *.qsf extension*

## Automatic progression after keystroke

[KeystrokeNextQ.js](KeystrokeNextQ.js) is JavaScript code, which proceeds to the next question after receiving one of two keystrokes. The code assumes there is one of two valid keystrokes, though it should be easy to extend this. This code is from the [BGSU's Complex Cognition Lab website](https://sites.google.com/site/complexcognitionbgsu/data-collection-software/qualtricsadvanced).

## Automatic progression after mouse click

[MouseclickNextQ.js](MouseclickNextQ.js) is JavaScript code that proceeds to the next question, after the user clicks on a response to the question. This is suited for multiple choice questions. This code is from the [BGSU's Complex Cognition Lab website](https://sites.google.com/site/complexcognitionbgsu/data-collection-software/qualtricsadvanced).

## An Example: Implicit Association Test
These files can be used to implement the *Implicit Association Test* (IAT) over Qualtrics. The original repository for this code can be found [here](https://sites.google.com/site/amazonturkshop/documents).

*[IAT.qsf](IAT.qsf)* can be imported directly into Qualtrics. This survey is a full Implicit Association Test. The survey is constructed by coding in Javascript and HTML in Qualtrics' text editor. More information about this test can be found [in the wiki](https://github.com/AndreottaM/Qualtrics-Javascript-Codes/wiki/3.-An-Example:-IAT)

*[IAT.html](IAT.html)* is the HTML code taken from the first question of the IAT.qsf survey.

## An Example: Interference
*[Interference.qsf](Interference.qsf)* is a one question survey, where participants respond with one of two keystroke. This code is broken, as it currently shows the skip button. However, it is fairly functional. The original repository for this code can be found [here](https://sites.google.com/site/amazonturkshop/documents).

## References
Amazon Turkshop (2017). *Amazon Turkshop*. Retrieved from: https://sites.google.com/site/amazonturkshop/documents.

Bowling Green State University (2017). *Qualtrics Advanced*. Retrieved from: https://sites.google.com/site/complexcognitionbgsu/data-collection-software/qualtricsadvanced.

# Introduction

ch2radio is a [jQuery](jquery.com) plugin for turning checkboxes into radio buttons. The plugin was originally created to fix [SOBI2](http://www.sigsiu.net/sobi2.html)'s lack of radio buttons support but it can be used whenever you need to convert checkboxes to radio buttons and you can't do it directly from the HTML from some reason.

# Getting started

To use ch2radio plugin, included the jQuery library and the ch2radio plugin inside the <head> tag of your HTML document:

`<script type="text/javascript" src="/path/to/jquery-latest-version.js"></script>`

`<script type="text/javascript" src="/path/to/jquery.ch2radio.js"></script>`
 
Assuming your HTML looks like:

`<input type="checkbox" name="ch[]" class="myCheckbox" value="yes" /> Yes`

`<input type="checkbox" name="ch[]" class="myCheckbox" value="no" /> No`

Plugin Call: 

`$(document).ready(function() {
    $('.myCheckbox').ch2radio();
});`

The attributes from your checkboxes will be preserved.
Generated Code:

`<input type="radio" name="ch[]" class="myCheckbox" value="yes" /> Yes`

`<input type="radio" name="ch[]" class="myCheckbox" value="no" /> No`
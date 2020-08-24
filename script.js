/****************************************
 *  Copyright © 2018 Arnoldo Rodriguez  *
 ****************************************/


var current_sidebar_element = "android";
// This method do stuff when the body is loaded.
function onLoad(){
    document.getElementById("android").style.color = "white";

    // update footer with current year.
    var current_year = (new Date()).getFullYear().toString();
    document.getElementById("year").innerHTML="Copyright © " + current_year + ". All rights reserved";
}
// This method loads content when a top header item is clicked.
function load_content(id){

    disappearStuff();
    switch(id) {
        case "AR":
            document.getElementById("ar-tab").style.display = "block";
            document.getElementById(id).style.backgroundColor = "#000000";      // setting colour of circle
            break;
        case "projects":
            document.getElementById("sidebar").style.display = "block";
            document.getElementById("projects-tab").style.display = "block";
            sidemenu_click(current_sidebar_element);
            break;
        case "resume":
            document.getElementById("resume-tab").style.display = "block";
            break;
        case "work":
            document.getElementById("work-tab").style.display = "block"
            break;
        case "about":
            document.getElementById("about-tab").style.display = "block"
            break;
        default:
            break;
    }
    
    if(id != "AR"){
        document.getElementById("AR").style.backgroundColor = "#4AB199";    // setting colour of circle
        document.getElementById(id).style.color = "#000000";    // setting colour of id element
    }
    
    // Change back to green the header items colors
    var links = document.getElementsByClassName("hyperlink");

    for (var i = 0; i < links.length; i++) {
        if(links[i].id != id){
            links[i].style.color = "#4AB199";
        }
    }
}

// This method disappears all main content
function disappearStuff(){
    disappear_main_content();
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("ar-tab").style.display = "none";
    document.getElementById("projects-tab").style.display = "none";
    document.getElementById("resume-tab").style.display = "none";
    document.getElementById("work-tab").style.display = "none";
    document.getElementById("about-tab").style.display = "none";
}

// This method loads content when a side menu item is clicked.
function sidemenu_click(id){

    document.getElementById(id).style.color = "white";
    current_sidebar_element = id;
    disappear_main_content();

    // do action here
    switch(id){
        case "android":
            document.getElementById("android_projects").style.display = "inline-block";
            break;
        case "c++":
            document.getElementById("c++-projects").style.display = "inline-block";
            break;
        case "arduino":
            document.getElementById("arduino-projects").style.display = "inline-block";
            break;
        default:
            break;
    }

    // Change back to black the menu items colors
    var btns = document.getElementsByClassName("elipse");

    for (var i = 0; i < btns.length; i++) {
        if(btns[i].id != id){
            btns[i].style.color = "black";
        }
    }
}

function disappear_main_content(){
    document.getElementById("android_projects").style.display = "none";
    document.getElementById("c++-projects").style.display = "none";
    document.getElementById("arduino-projects").style.display = "none";
}

document.addEventListener('DOMContentLoaded',function(event){

    var dataText = [ "Hi, welcome to my website"];
    
    function typeWriter(text, i, fnCallback) {
        if (i < (text.length)) {
            if(i == 0){
                setTimeout(function() {
                    typeWriter(text, i + 1, fnCallback);
                }, 500);
            }
            else if(i == 3){
                // Giving it a longer pause after saying "Hi"
                setTimeout(function() {
                    document.querySelector("p").innerHTML = text.substring(0, i+1) +'<span id="blink" aria-hidden="true"></span>'
                    typeWriter(text, i + 1, fnCallback);
                }, 1200);
            }
            else{
                document.querySelector("p").innerHTML = text.substring(0, i+1) +'<span id="blink" aria-hidden="true"></span>';
                setTimeout(function() {
                    typeWriter(text, i + 1, fnCallback)
                }, 80);
            }
            
        }
        
        // text finished, show the rest of main page content
        else  {
            setTimeout(function() {
                document.getElementById("summary").style.display = "block";
            }, 1000);
        }
    }
    
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (i < dataText[i].length) {
            typeWriter(dataText[i], 0, function(){
            StartTextAnimation(i + 1);});
        }
    }
    // start the text animation
    StartTextAnimation(0);
});

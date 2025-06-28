function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const contentText = 
`I'm the programmer for VEX Robotics team 5069Y.
I code in my free time. I have a lot of free time.
I know Python, C/C++, Java, JavaScript, HTML, and some others.
I am interested in engineering, robotics, aerospace and aviation, transit systems, and urban infrastructure.`
const headerText = "I'm Daniel,";
const header2Text = "a programmer and robotics enthusiast.";

const content = document.querySelector('.content');
const header = document.querySelector('.header');
const header2 = document.querySelector('.header2');
const typingSpeedContent = 10; // milliseconds per character
const typingSpeedHeader = 100; // milliseconds per character
const typingSpeedHeader2 = 50; // milliseconds per character
const desiredText = "5069Y";
const desiredLink = "https://www.robotevents.com/teams/V5RC/5069Y";

let index = 0;
function typeNextCharContent() {
    if (index < 41) {
        content.innerHTML += contentText[index++];
        setTimeout(typeNextCharContent, typingSpeedContent);
    } else if (index == 41) {
        document.querySelector(".content").innerHTML += desiredText[0].link(desiredLink);
        index++
        setTimeout(typeNextCharContent, typingSpeedContent);
    } else if (index < 41 + desiredText.length) {
        document.querySelector(".content a").innerHTML += desiredText[index - 41];
        index++
        setTimeout(typeNextCharContent, typingSpeedContent);
    } else if (index < contentText.length) {
        content.innerHTML += contentText[index++];
        setTimeout(typeNextCharContent, typingSpeedContent);
    }
}

let index2 = 0;
function typeNextCharHeader() {
    if (index2 < headerText.length) {
        header.innerHTML += headerText[index2++];
        setTimeout(typeNextCharHeader, typingSpeedHeader);
    }
}

let index3 = 0;
function typeNextCharHeader2() {
    if (index3 < header2Text.length) {
        header2.innerHTML += header2Text[index3++];
        setTimeout(typeNextCharHeader2, typingSpeedHeader2);
    }
}


typeNextCharHeader();
setTimeout(typeNextCharHeader2, 1200);
setTimeout(typeNextCharContent, 3500);
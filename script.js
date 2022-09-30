var aText = projects["project1"].text; // I am going to use this text in typing function
    
var writingSpeed = 60; // time delay of print out
var arrIndex = 0; // start printing array at this posision
var textLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
    
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
var typingIsContinue = true;
var selectedProject = "";

// Just before clicking any button..
var blinkingCursor = true;

function typewriter(){
    // in "aText" we have paragraphs as rows and inside them we have text so basically we have 2D array of text.

    // Can type
    typingIsContinue = true;

    // reevaluate the sContent
    sContents =  ' ';
    // This make sure row index is not negative iScrollAt is not used, 
    // but here it will effect every time "iRow" will be 0 till 20 row then basically little misbehave here.
    iRow = Math.max(0, arrIndex-iScrollAt);
    // Just getting the destination where to write the content.
    var destination = document.getElementById("typedtext");
    
    // add content of all rows till the check point "iRow" except last to avoid <br/> at the end.
    while ( iRow < arrIndex ) {
        sContents += aText[iRow++] + '<br />';
    }

    // console.log("arrIndex : ", arrIndex, " ----- iTextPos : ", iTextPos);
    if (!!aText[arrIndex]){
            // adding the last row but till the "iTextPos" which is the possition that we already typed. "arrIndex" is the last indes of rows.
            destination.innerHTML = sContents + aText[arrIndex].substring(0, iTextPos) + "<span class='blinking'>_</span>";
    }else{
        typingIsContinue = false;
        console.log("Did not work.")
    }

    // check can we is it the end of the text in the particular row.
    if ( iTextPos++ == textLength ) {
        // if condition is true then we increasing the last row and pointing the "iTextPos" to 0
        iTextPos = 0;
        arrIndex++;
        // check "arrIndex" is not the row, greater than the numbers of rows, that is error condition or out of the list.
        if ( arrIndex != aText.length ) {
            // if condition is true we will continue the typing and call the fuction again after 500 ms because it is a paragraph break.
            // reseting the new text length.
            textLength = aText[arrIndex].length;

            // Checking the sudden break to discontinue function calling if other button is clicked before completing the typing.
            if (typingIsContinue)
                setTimeout("typewriter()", 500);
        }else{
            typingIsContinue = false;
            destination.innerHTML += `<br/>
                                        <div class="projectsIcons">
                                            ${!!projects[selectedProject].liveLink?`
                                                    <a href="${projects[selectedProject].liveLink}" target="_blank">
                                                        <img class='projectsIcon' title='Live on internet.' src='assets/icons/flash.svg' alt='flash' />
                                                    <a/>
                                                `:""
                                            }
                                            ${!!projects[selectedProject].githubLink?`
                                                    <a href="${projects[selectedProject].githubLink}" target="_blank">
                                                        <img class='projectsIcon anim-dalay-1s' title='Project source code.' src='assets/icons/Github.svg' alt='flash' />
                                                    <a/>
                                                `:""
                                            }
                                            ${!!projects[selectedProject].learnMoreLink?`
                                                    <a href="/${projects[selectedProject].learnMoreLink}" target="_blank">
                                                        <img class='projectsIcon anim-dalay-2s' title='Learn more about that.' src='assets/icons/more.svg' alt='flash' />
                                                    <a/>
                                                `:""
                                            }
                                        </div>
                                    `
            console.log("Fucntion is ended....");
        }
    } else {
        // Checking the sudden break to discontinue function calling if other button is clicked before completing the typing.
        if (typingIsContinue)
            setTimeout("typewriter()", writingSpeed);
    }
}

const resetFunc = (project = "project1") => {
    selectedProject = project;
    blinkingCursor = false;
    typingIsContinue = false;
    let newProject = projects[project];
    aText = newProject.text;
    iTextPos = 0;
    arrIndex = 0;
    textLength = aText[0].length; 
    writingSpeed = 60;
    setTimeout(typewriter, writingSpeed);
}


const getproject1 = () => {
    resetFunc("project1");
}

const getproject2 = () => {
    resetFunc("project2");
}

const getproject3 = () => {
    resetFunc("project3");
}
const getproject4 = () => {
    resetFunc("project4");
}

const getproject5 = () => {
    resetFunc("project5");
}

const getproject6 = () => {
    resetFunc("project6");
}
// set up text to print, each item in array is new line
var project1Text = new Array(
    "RentYug:", 
    "Platform on which people can give or get anything on rent.",
    "I launched this product in the market. updated that several times according to the needs of customers."
    );
var project2Text = new Array(
    "UnknownChats:", 
    "Platform, which helps people to take their decisions faster."
    );
var project3Text = new Array(
    "TicTac:", 
    "Platform, which helps people to take their decisions faster."
    );
var project4Text = new Array(
    "ShopMart:", 
    "Platform, which helps people to take their decisions faster."
    );
var project5Text = new Array(
    "UnknownChats:", 
    "Platform, which helps people to take their decisions faster."
    );
var project6Text = new Array(
    "TicTac Supplier:", 
    "Platform, which helps people to take their decisions faster."
    );

var aText = project1Text; // I am going to use this text in typing function
    
var writingSpeed = 100; // time delay of print out
var arrIndex = 0; // start printing array at this posision
var textLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
    
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter(){

    sContents =  ' ';
    iRow = Math.max(0, arrIndex-iScrollAt);
    var destination = document.getElementById("typedtext");
    
    while ( iRow < arrIndex ) {
        sContents += aText[iRow++] + '<br />';
    }

    destination.innerHTML = sContents + aText[arrIndex].substring(0, iTextPos) + "_";

    if ( iTextPos++ == textLength ) {
        iTextPos = 0;
        arrIndex++;
        if ( arrIndex != aText.length ) {
            textLength = aText[arrIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", writingSpeed);
    }
}


const getproject1 = () => {
    aText = project1Text;
    typewriter();
}

const getproject2 = () => {
    aText = project2Text;
    typewriter();
}

const getproject3 = () => {
    aText = project3Text;
    typewriter();
}
const getproject4 = () => {
    aText = project4Text;
    typewriter();
}

const getproject5 = () => {
    aText = project5Text;
    typewriter();
}

const getproject6 = () => {
    aText = project6Text;
    typewriter();
}
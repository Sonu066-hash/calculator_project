let display = document.getElementById("display");

function appendValue(value){
    display.value += value;

    display.scrollLeft = display.scrollWidth;
}

function clearDisplay(){
    display.value = " ";
}

function calculate(){
    display.value = eval(display.value);
}
//
// Lss13.uefi.js (c) 2022
// This NT version is the Lite NT Hybrid 7.0
//


function UEFIifThis(condition, code, codeIfNot) {
    if(condition == true) {
        code()
    } else {
        codeIfNot()
    }
}

function UEFIcalc(calc) {
    if (isNaN(calc)) {
        console.error("[UEFI Motor] error:\nInvalid Number at: UEFIcalc({CALC}). Please use a valid number.")
    } else if(isFinite(calc)) {
        console.error("[UEFI Motor] error:\nInvalid Number at: UEFIcalc({CALC}). Please use a not infinite number.")
    }
    return calc;
}

function UEFIlog(type, title, text) {
    var types = ["log", "info", "error", "alert"];
    for(let i = 0;i < types.length;i++) {
        if(type == types[i]) {
            if(type == "log") {
                console.log(title + "\n" + text)
            } else if(type == "info") {
                console.info(title + "\n" + text)
            } else if(type == "warn") {
                console.warn(title + "\n" + text)
            } else if(type == "error") {
                console.error(title + "\n" + text)
            }
    }
}
var UEFconsole = false;
function UEFIaddUefiConsole(progamName, extension) {
    UEFconsole = true;
    document.querySelector("body").innerHTML = null;
    var body = document.querySelector("body");
    body.style.margin = "0px";
    body.style.padding = "15px";
    body.style.fontFamily = "Consolas,monospace";
    body.style.color = "white";
    body.style.fontWeight = "900";
    body.style.backgroundColor = "#1a1a1a";
    body.innerHTML = "<p>[UEFI Motor] " + progamName + "." + extension + "</p>"
    body.innerHTML += "\n"
}
function UEFIconsoleLog(text) {
    if(UEFconsole) {
        var body = document.querySelector("body")
        body.innerHTML += "\n\n<br>" + text;
    } else {
        console.error("[UEFI Motor] error:\nConsole is not defined. Please use the function of UEFIaddUefiConsole().")
    }
}
/*
let i = 0;
var lastEntrie = null;
var entries = [];
function UEFIconsoleInput() {
    if(UEFconsole) {
        i++;
        var body = document.querySelector("body")
        body.innerHTML += "<br><< <input id='" + i + "'>"
        document.addEventListener("keypress", getKey)
        function getKey(event) {
            if(event.key == "Enter") {
                lastEntrie = document.getElementById(i).value;
                entries.push(document.getElementById(i).value)
              }
        }
    } else {
        console.error("[UEFI Motor] error:\nConsole is not defined. Please use the function of UEFIaddUefiConsole().")
    }
}
let a;
function UEFIgetInputText() {
    return lastEntrie;
}
*/

function UEFIgetFullDate() {
    let dateNow = new Date();
    return dateNow.getDate() + "/" + (dateNow.getMonth() + 1) + "/" + dateNow.getFullYear() + "   " + dateNow.getHours() + ":" + dateNow.getMinutes() + ":" + dateNow.getSeconds();
}
function UEFIgetDay() {
    let dateNow = new Date();
    return dateNow.getDate();
}
function UEFIgetMonth() {
    let dateNow = new Date();
    return (dateNow.getMonth() + 1);
}
function UEFIgetFullYear() {
    let dateNow = new Date();
    return dateNow.getFullYear();
}
function UEFIgetShortYear() {
    let FullYear = UEFIgetFullYear();
    return FullYear.slice(2);

}
function UEFIgetMinute() {
    let dateNow = new Date();
    return dateNow.getMinutes();
}
function UEFIgetHour() {
    let dateNow = new Date();
    return dateNow.getHours();
}
function UEFIgetSecond() {
    let dateNow = new Date();
    return dateNow.getSeconds();
}
function UEFIalways() {
    document.querySelectorAll("input").forEach(cell => {
        cell.style.fontFamily = "Consolas,monospace";
        cell.style.color = "white";
        cell.style.fontWeight = "900";
        cell.style.backgroundColor = "#1a1a1a";
        cell.style.border = "none";
        cell.style.outline = "none";
    })
    document.querySelectorAll("p").forEach(cell => {
        cell.style.margin = "0";
        cell.style.outline = "none";
    })
    setTimeout("UEFIalways()", 1)
}

UEFIalways()
function UEFIshowEntries() {
    UEFIconsoleLog(entries);
}
function UEFIconsolePause() {
    UEFIconsoleLog("Press ENTER to continue...")
    for(a = 0; i < 1;) {
        document.addEventListener("keypress", UEFIrepeat)
        if(i = 1) {
            document.removeEventListener("keypress", UEFIrepeat, false);
            break;
        }
    }
}
function UEFIrepeat(event) {
    UEFIifThis(event.key == "Enter", 
        () => { a=0; },
        null
    );
}
function UEFIconsoleDomAddEventListener(querySelectorEle, type, code) {
    document.querySelector(querySelectorEle).addEventListener(type, code)
}
let clockIds = [];
function UEFIconsoleCreateObject(type, settings) {
    var body = document.querySelector("body");
    if(type == "text") {
        body.innerHTML += "<p id='" + settings[2] + "'style='color:" + settings[1] + "'>" + settings[0] + "</p>";
    } else if(type == "spanInput") {
        body.innerHTML += "<p contenteditable id='" + settings[0] + "'></p>";
    }
}

function UEFIgetText(querySelectorElem, type) {
    if(type == "innerText") {
        return document.querySelector(querySelectorElem).innerText;
    } else if(type == "innerHTML") {
        return document.querySelector(querySelectorElem).innerHTML;
    }
}

function UEFIchangeText(querySelectorElem, type, text) {
    if(type == "innerText") {
        return document.querySelector(querySelectorElem).innerText = text;
    } else if(type == "innerHTML") {
        return document.querySelector(querySelectorElem).innerHTML = text;
    }
}
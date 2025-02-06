let imp = "", imp2="";
let num = 0.0;
let numarr = [], symarr = []; 
let decpressed = false, sp = true;

function buttonclicked(value) {
    document.getElementById("error").innerText = "";
    document.getElementById("error").style.backgroundColor = 'black';
    switch(value) {
        case '0': case '1': case '2': case '3': 
        case '4': case '5': case '6': case '7': 
        case '8': case '9':
            imp += value;
            sp = false;
            break;
        case '.':
            if (!decpressed) {
                decpressed = true;
                imp += '.';
            } else {
                document.getElementById("error").style.backgroundColor = 'red';
                document.getElementById("error").innerText = "ERROR: Cannot add a decimal twice!";
            }
            break;
        case '+': case '-': case 'x': case '/':
            if (!sp) {
                numarr.push(parseFloat(imp));
                symarr.push(value);
                imp2 += (imp+value);
                imp = "";
                sp = true;
                decpressed = false;
            } else {
                document.getElementById("error").innerText = "ERROR: Cannot add an operator!";
                document.getElementById("error").style.backgroundColor = 'red';
            }
            break;
        case '=':
            if (!sp && numarr.length > 0) {
                numarr.push(parseFloat(imp));
                num = numarr[0];

                for (let i = 0; i < symarr.length; i++) {
                    switch (symarr[i]) {
                        case '+': num += numarr[i + 1]; break;
                        case '-': num -= numarr[i + 1]; break;
                        case 'x': num *= numarr[i + 1]; break;
                        case '/': num /= numarr[i + 1]; break;
                    }
                }
                imp = num.toString();
                numarr.length = 0;
                symarr.length = 0;
                imp2 = "";
                sp = false;
            } else if(sp) {
                document.getElementById("error").style.backgroundColor = 'red';
                document.getElementById("error").innerText = "ERROR: Invalid equation! Enter a valid equation to continue.";
            }
            break;
        case 'C':
            imp = "";
            imp2 = "";
            num = 0.0;
            numarr.length = 0;
            symarr.length = 0;
            decpressed = false;
            sp = true;
            break;
        case 'D':
            if(imp.length > 0) {
                imp = imp.slice(0, -1);
            } else {
                document.getElementById("error").style.backgroundColor = 'red';
                document.getElementById("error").innerText = "ERROR: Cannot remove previous element!";
            }
            break;
    }
    document.getElementById("backt").innerText = imp2;
    document.getElementById("cons").innerText = imp;
}

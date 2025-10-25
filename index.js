function acceptOnlyNums(e) {

    e.target.value = e.target.value.replace(/[^0-9.,]/, "")
    
}

document.getElementById("w-foglio-macchina").addEventListener("input", acceptOnlyNums);
document.getElementById("h-foglio-macchina").addEventListener("input", acceptOnlyNums);
document.getElementById("w-formato-finito").addEventListener("input", acceptOnlyNums);
document.getElementById("h-formato-finito").addEventListener("input", acceptOnlyNums);




function imposition(){
    
    let fmw = parseFloat(document.getElementById("w-foglio-macchina").value);
    let fmh = parseFloat(document.getElementById("h-foglio-macchina").value);
    let ffw = parseFloat(document.getElementById("w-formato-finito").value);
    let ffh = parseFloat(document.getElementById("h-formato-finito").value);

    //Se lato x su lato x è meglio di lato x su lato y
    // (Larghezza formato macchina - 2) / (larghezza foglio macchina * 2 - 1) * ((altezza fromato macchina - 2.5) / (altezza formato finito - 1))
    if (Math.floor((fmw - 2) / (ffw * 2 - 1)) * Math.floor((fmh - 2.5) / (ffh - 1)) > Math.floor((fmw - 2) / (ffh - 1)) * Math.floor((fmh - 2.5) / (ffw * 2 - 1))) {
        console.log(Math.floor((fmw - 2) / (ffw * 2 - 1)), Math.floor((fmh - 2.5) / (ffh - 1)), Math.floor((fmw - 2) / (ffh - 1)), Math.floor((fmh - 2.5) / (ffw * 2 - 1)))
    }

    return 0;
}
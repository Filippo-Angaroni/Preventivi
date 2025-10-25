function acceptOnlyNums(e) {
    //e.target.value = e.target.value.replace("/[^0-9]", '');
    console.log(e);
    if (e.data.replace("/[^0-9]", '') == '') {
        e.target.value.slice(0, -1);
    }
}

document.getElementById("w-foglio-macchina").addEventListener("input", acceptOnlyNums);




function imposition(formato_f, formato_m){
    alert(formato_f);
    return 0;
}
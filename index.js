disposizioniPagineAffiancate = [1, 2, 4, 8, 16]

class Preventivo {

    constructor(name, paginaSingola, dimensioniMacchima, formatoMacchina, formatoFinito, numPagine) {
        this.name = name;
        this.paginaSingola = paginaSingola;
        this.dimensioniMacchima = dimensioniMacchima;
        this.formatoMacchina = formatoMacchina;
        this.formatoFinito = formatoFinito;
        this.numPagine = numPagine;

        this.disposizioneFogli = this.imposition();

        this.fogliMacchinaNecessari = this.numPagine / (this.disposizioneFogli[0] * this.disposizioneFogli[1] * 2);

        console.log(this.fogliMacchinaNecessari);

    }

    imposition() {
        if (this.paginaSingola) {

        } else {

            let pagineXX = Math.floor((this.formatoMacchina[0] - 2) / (this.formatoFinito[0] * 2 + 1));
            let pagineYY = Math.floor((this.formatoMacchina[1] - 2.5 - 1) / (this.formatoFinito[1] + 1));
            let pagineXY = Math.floor((this.formatoMacchina[0] - 2) / (this.formatoFinito[1] + 1));
            let pagineYX = Math.floor((this.formatoMacchina[1] - 2.5 - 1) / (this.formatoFinito[0] * 2 + 1));

             
            if (disposizioniPagineAffiancate.includes(pagineXX)) {
                if (pagineXX * pagineYY > pagineXY * pagineYX) {
                    console.log(pagineXX, pagineYY, pagineXY, pagineYX);
                    return [pagineXX * 2, pagineYY];
                }
            }

            if (disposizioniPagineAffiancate.includes(pagineYX)) {
                console.log(pagineXX, pagineYY, pagineXY, pagineYX);
                return [pagineYX * 2, pagineXY];
            } 

            alert("error");

            return 0;

        }
    }
}

function acceptOnlyNums(e) {

    e.target.value = e.target.value.replace(/[^0-9.,]/, "")
    
}

document.getElementById("w-foglio-macchina").addEventListener("input", acceptOnlyNums);
document.getElementById("h-foglio-macchina").addEventListener("input", acceptOnlyNums);
document.getElementById("w-formato-finito").addEventListener("input", acceptOnlyNums);
document.getElementById("h-formato-finito").addEventListener("input", acceptOnlyNums);

function solve(){
    
    let formatoMacchina = [parseFloat(document.getElementById("w-foglio-macchina").value), parseFloat(document.getElementById("h-foglio-macchina").value)];
    let formatoFinito = [parseFloat(document.getElementById("w-formato-finito").value), parseFloat(document.getElementById("h-formato-finito").value)];

    let numPagine = parseFloat(document.getElementById("numero-di-pagine").value);

    const preventivo = new Preventivo("test", false, (0, 0), formatoMacchina, formatoFinito, numPagine);

    //Se lato x su lato x è meglio di lato x su lato y
    // (Larghezza formato macchina - 2) / (larghezza foglio macchina * 2 - 1) * ((altezza fromato macchina - 2.5) / (altezza formato finito - 1))
    

    return 0;
}
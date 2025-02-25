function calcular() {
    const dataAtual = new Date();

    let day = Number(document.getElementById("day").value);
    let month = Number(document.getElementById("month").value);
    let year = Number(document.getElementById("year").value);

    let dias = dataAtual.getDate() - day;
    let meses = (dataAtual.getMonth() + 1) - month;
    let anos = dataAtual.getFullYear() - year;
    
    if (meses < 0) {
        anos --;
        meses += 12;
    } 
    
    if (dias < 0) {
        meses--;
        const ultimoMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth() - 1, 0);
        dias += ultimoMes.getDate();
    }

    document.getElementById("result_year").innerHTML = anos;
    document.getElementById("result_month").innerHTML = meses;
    document.getElementById("result_day").innerHTML = dias;
}

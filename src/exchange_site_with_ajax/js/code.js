
import * as utils from "./utils.js";


const getTodos = async () => {
    /* Fetches for EUROS */
    const resEuroTwoDays = await fetch(utils.twoDaysAgoUrlEUR());
    const dataEuroTwoDays = await resEuroTwoDays.json();

    const resEuroYesterday = await fetch(utils.yesterdayUrlEUR());
    const dataEuroYesterday = await resEuroYesterday.json();

    const resEuroToday = await fetch(utils.todayUrlEUR());
    const dataEuroToday = await resEuroToday.json();

    /* Fetches for DOLLARS */
    const resDollarTwoDays = await fetch(utils.twoDaysAgoUrlUSD());
    const dataDollarTwoDays = await resDollarTwoDays.json();

    const resDollarYesterday = await fetch(utils.yesterdayUrlUSD());
    const dataDollarYesterday = await resDollarYesterday.json();

    const resDollarToday = await fetch(utils.todayUrlUSD());
    const dataDollarToday = await resDollarToday.json();

    return [dataEuroTwoDays, dataEuroYesterday, dataEuroToday, dataDollarTwoDays, 
        dataDollarYesterday, dataDollarToday];
};


/* 17 adet var
CAD kanada doları
DKK danimarka kronu
HUF	macar forinti
AUD	avusturalya doları
SEK	isveç kronu
RUB	rus rublesi
JPY	japon yeni
CHF	isviçre frangı
PLN polonya zlotisi
CNY	çin yuanı
NOK	norveç kronu
TRY	türk lirası
MXN	meksika pesosu
ILS	yeni israil şekeli
GBP	pound

EUR	avro
USD	amerikan doları
*/


const fillInformation = arrData => {
    
    const arrEur2 = document.querySelectorAll(".euroTwoDays span");
    const arrEur1 = document.querySelectorAll(".euroYesterday span");
    const arrEur0 = document.querySelectorAll(".euroToday span");
    const arrUsd2 = document.querySelectorAll(".dollarTwoDays span");
    const arrUsd1 = document.querySelectorAll(".dollarYesterday span");
    const arrUsd0 = document.querySelectorAll(".dollarToday span");
    
    const jsonEuroTwoDays = JSON.parse(JSON.stringify(arrData[0]));
    const jsonEuroYesterday = JSON.parse(JSON.stringify(arrData[1]));
    const jsonEuroToday = JSON.parse(JSON.stringify(arrData[2]));
    const jsonDollarTwoDays = JSON.parse(JSON.stringify(arrData[3]));
    const jsonDollarYesterday = JSON.parse(JSON.stringify(arrData[4]));
    const jsonDollarToday = JSON.parse(JSON.stringify(arrData[5]));

    const currencies1 = ["AUD","CAD","CHF","CNY","DKK","GBP","HUF","ILS","JPY","MXN","NOK","PLN","RUB","SEK","TRY","USD"];
    const currencies2 = ["AUD","CAD","CHF","CNY","DKK","EUR","GBP","HUF","ILS","JPY","MXN","NOK","PLN","RUB","SEK","TRY"];
    var j = 0;
    for(let i = 0; i < currencies1.length; i++){
        arrEur2[j].innerHTML = "1 " + " EUR" + " is " + parseFloat(jsonEuroTwoDays["rates"][currencies1[i]]).toFixed(5)     + " " + currencies1[i];
        arrEur1[j].innerHTML = "1 " + " EUR" + " is " + parseFloat(jsonEuroYesterday["rates"][currencies1[i]]).toFixed(5)   + " " + currencies1[i];
        arrEur0[j].innerHTML = "1 " + " EUR" + " is " + parseFloat(jsonEuroToday["rates"][currencies1[i]]).toFixed(5)       + " " + currencies1[i];
        arrUsd2[j].innerHTML = "1 " + " USD" + " is " + parseFloat(jsonDollarTwoDays["rates"][currencies2[i]]).toFixed(5)   + " " + currencies2[i];
        arrUsd1[j].innerHTML = "1 " + " USD" + " is " + parseFloat(jsonDollarYesterday["rates"][currencies2[i]]).toFixed(5) + " " + currencies2[i];
        arrUsd0[j].innerHTML = "1 " + " USD" + " is " + parseFloat(jsonDollarToday["rates"][currencies2[i]]).toFixed(5)     + " " + currencies2[i];
        j++;
    }

    
};


const fetchErrFunc = err => console.log(err.stack + " :_: " + err.message);


document.addEventListener('DOMContentLoaded', ()=>{
    const divs = document.querySelectorAll(".col1, .col2, .col3");
    divs[0].firstElementChild.innerHTML = "<span>EURO IN " + utils.twoDaysAgoStr() + "</span>";
    divs[1].firstElementChild.innerHTML = "<span>EURO IN " + utils.yesterdayStr() + "</span>";
    divs[2].firstElementChild.innerHTML = "<span>EURO IN " + utils.todayStr() + "</span>";
    divs[3].firstElementChild.innerHTML = "<span>DOLLAR IN " + utils.twoDaysAgoStr() + "</span>";
    divs[4].firstElementChild.innerHTML = "<span>DOLLAR IN " + utils.yesterdayStr() + "</span>";
    divs[5].firstElementChild.innerHTML = "<span>DOLLAR IN " + utils.todayStr() + "</span>";
    
    // fetch
    getTodos().then( arrData => fillInformation(arrData) ).catch( err => fetchErrFunc(err) );
});


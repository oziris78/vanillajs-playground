
/*  exports  */

export {todayStr, todayUrlEUR, todayUrlUSD, yesterdayStr, yesterdayUrlEUR, 
    yesterdayUrlUSD, twoDaysAgoStr,  twoDaysAgoUrlEUR, twoDaysAgoUrlUSD};



/* these functions gives us the necessary links to the API according to the date */

const todayUrlEUR = () => "https://api.exchangeratesapi.io/latest";
const yesterdayUrlEUR = () => getLinkFor(1, true);
const twoDaysAgoUrlEUR = () => getLinkFor(2, true);

const todayUrlUSD = () => "https://api.exchangeratesapi.io/latest?base=USD";
const yesterdayUrlUSD = () => getLinkFor(1, false);
const twoDaysAgoUrlUSD = () => getLinkFor(2, false);

/* these functions gives us a date as a string in DD.MM.YYYY format */

const todayStr = () => getStringFor(0);
const yesterdayStr = () => getStringFor(1);
const twoDaysAgoStr = () => getStringFor(2);




////////////////////////////////////////////////////////////////////////////////
////////////////////////       PRIVATE FUNCTIONS       /////////////////////////
////////////////////////////////////////////////////////////////////////////////



const getLinkFor = (howManyDaysAgo, isEuro) => {
    const date = new Date();
    var milisecs = date.getTime();
    var newMilisecs = milisecs - howManyDaysAgo * 86400000; // there are 86400000 miliseconds in a day
    date.setTime(newMilisecs);

    const yearStr = date.getFullYear().toString(); 

    const month = date.getMonth() + 1; // because january is 0. month
    const day = date.getDate();

    const monthStr = (month < 10) ? "0" + month.toString() : month.toString();
    const dayStr = (day < 10) ? "0" + day.toString() : day.toString();

    let result = "https://api.exchangeratesapi.io/" + yearStr + "-" + monthStr + "-" + dayStr;
    result = isEuro ? result + "?base=USD" : result;
    return result;
}


const getStringFor = (howManyDaysAgo) => {
    const date = new Date();

    date.setTime(date.getTime() - howManyDaysAgo * 86400000); // there are 86400000 miliseconds in a day
    
    const yearStr = date.getFullYear().toString(); 
    const month = date.getMonth() + 1; // because january is 0. month
    const day = date.getDate();

    const monthStr = (month < 10) ? "0" + month.toString() : month.toString();
    const dayStr = (day < 10) ? "0" + day.toString() : day.toString();

    return dayStr + "." + monthStr + "." + yearStr;
}

const today = new Date();
const todayDate = today.getDate();
const todayMonth = today.getMonth();
const todayYear = today.getFullYear();


const date = document.querySelector("#date-input");
const month = document.querySelector("#month-input");
const year = document.querySelector("#year-input");

const yearDisplay = document.querySelector("#years-display");
const monthDisplay = document.querySelector("#months-display");
const dayDisplay = document.querySelector("#days-display");
const form = document.querySelector(".form");

let dateIn;
let monthIn;
let yearIn;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    dateIn = parseInt(date.value);
    monthIn = parseInt(month.value);
    yearIn = parseInt(year.value);
    // console.log(typeof(dateIn));
    if(todayMonth < monthIn){
        todayMonth += 12;
        todayYear--;
    }
    if(todayDate < dateIn){
        todayDate += 30;
        todayMonth--;
    }
    const ageYears = todayYear - yearIn;
    const ageMonths = todayMonth - monthIn;
    const ageDays = todayDate - dateIn;
    yearDisplay.innerHTML = ageYears;
    monthDisplay.innerHTML = ageMonths;
    dayDisplay.innerHTML = ageDays;
});

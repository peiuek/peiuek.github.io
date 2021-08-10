var startDateTime = new Date(2019, 7, 10, 0, 0, 0, 0); // YYYY (M-1) D H m s (start time and date from DB)
var startStamp = startDateTime.getTime();

var newDate = new Date();
var newStamp = newDate.getTime();

var timer;

//Hai

var dob = new Date("09/29/1997");
//calculate month difference from current date in time
var month_diff = Date.now() - dob.getTime();

//convert the calculated difference in date format
var age_dt = new Date(month_diff);

//extract year from date    
var year = age_dt.getUTCFullYear();

//now calculate the age of the user
var haiAge = Math.abs(year - 1970);

//display the calculated age
var haiAgeDOM = document.querySelector("#hai-age");
haiAgeDOM.innerHTML = haiAge;

//Huyen

var dob1 = new Date("09/18/1998");
//calculate month difference from current date in time
var month_diff1 = Date.now() - dob1.getTime();

//convert the calculated difference in date format
var age_dt1 = new Date(month_diff1);

//extract year from date    
var year1 = age_dt1.getUTCFullYear();

//now calculate the age of the user
var huyenAge = Math.abs(year1 - 1970);

//display the calculated age
var huyenAgeDOM = document.querySelector("#huyen-age");
huyenAgeDOM.innerHTML = huyenAge;

function updateClock() {
    var day = document.querySelector("#day");
    var hour = document.querySelector("#hour");
    var minute = document.querySelector("#minute");
    var second = document.querySelector("#second");

    newDate = new Date();
    newStamp = newDate.getTime();
    var diff = Math.round((newStamp - startStamp) / 1000);

    var d = Math.floor(diff / (24 * 60 * 60));
    diff = diff - (d * 24 * 60 * 60);
    var h = Math.floor(diff / (60 * 60));
    diff = diff - (h * 60 * 60);
    var m = Math.floor(diff / (60));
    diff = diff - (m * 60);
    var s = diff;

    day.innerHTML = d;
    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;

}

setInterval(updateClock, 1000);
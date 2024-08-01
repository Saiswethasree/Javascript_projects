let hour = document.getElementById("timehour")
let minute = document.getElementById("timeminute")
let seconds = document.getElementById("timesec")
let ampm1 = document.getElementById("ampm")

function update()
{
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h>12)
    {
        h = h-12;
    }
    else if(h>=12)
    {
        ampm = "PM";
    }

    h = h>10 ? h : "0" +h;
    m = m>10 ? m : "0" +m;
    s = s>10 ? s : "0" +s;

    hour.innerText = h;
    minute.innerText = m;
    seconds.innerText = s;
    ampm1.innerText=ampm;

    setTimeout(()=>{
        update()
    },1000)
}


update()
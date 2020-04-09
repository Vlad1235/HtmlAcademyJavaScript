var tick = true;

function ticker(){
    if(tick){
        document.write("Tick");
        tick = false;
    } else {
        document.write("Tock");
        tick = true;
    }
}

setInterval(ticker,1000);
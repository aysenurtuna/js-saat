let firstName = prompt("Lütfen adınızı giriniz: ")
document.querySelector("span#myName").innerHTML += `${firstName}`

window.onload = showTime();

// showTime fonksiyonu tarih bilgisi alma
function showTime(){
    let gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]

    let tarih = new Date();
    let saat = tarih.getHours();
    let dakika = tarih.getMinutes();
    let saniye = tarih.getSeconds();
    let gunIndex = tarih.getDay();
    let gun = gunler[gunIndex]
     
    saat = control(saat)
    dakika = control(dakika)
    saniye = control(saniye)

    document.querySelector('div#myClock').innerHTML = saat +":"+ dakika+ ":" +saniye+ " "+ gun
    setTimeout('showTime()',1000);
}
function control(sayi){
    if(sayi<10)
    sayi = "0"+sayi
    return sayi
}
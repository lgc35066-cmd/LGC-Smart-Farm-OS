function irrigate(){

document.getElementById("result").innerHTML =
"💧 تم تشغيل الري للقطاع 02 بنجاح - مدة التشغيل 15 دقيقة";

}


// محاكاة مراقبة النظام

setInterval(function(){

console.log("LGC AI Monitoring...");

},5000);


// رسالة ترحيبية عند فتح النظام

window.onload = function(){

console.log(
"LGC Smart Farm OS Demo v0.2 Running"
);

};

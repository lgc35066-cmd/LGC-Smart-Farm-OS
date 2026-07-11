function irrigate(){

document.getElementById("result").innerHTML =
"💧 تم تشغيل الري بنجاح";

}


// تحديث مؤشرات النظام

setInterval(function(){

let water =
Math.floor(Math.random()*10)+80;

let energy =
Math.floor(Math.random()*10)+90;


console.log(
"LGC Monitoring",
water,
energy
);


},3000);



window.onload=function(){

console.log(
"LGC Smart Farm OS Demo v0.4 Running"
);

};

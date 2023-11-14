//5 switch
var broj=0
switch(broj){
    case 0:
        console.log("F")
        break;
    case 1:
        console.log("D")
        break;
    case 2:
        console.log("C")
        break;
    case 3:
        console.log("B")
        break;
    case 4:
        console.log("A")
        break;
}
//декларирај 5 функции и повикај ги
function zbir(a,b){
    console.log(`Zbirot e: ${a+b}`)
}
zbir(1,2)
function razlika(a,b){
    console.log(`Razlika e: ${a-b}`)
}
razlika(1,2)
function proizvod(a,b){
    console.log(`Proizvodot e: ${a*b}`)
}
proizvod(5,6)
function signiture(name,surname){
    console.log(`Thank you for your time. Well wishes, ${name} ${surname}`)
}
signiture("Astra","Boki")
function kolicnik(a,b){
    console.log(`Kolicnikotn e ${a/b}`)
}
kolicnik(6,9)
// фаренхајт во целзиус
//целзиус во фаренхајт
function temperaturi() {
    var cel = 100
    var fahr = 100
    var f2c = (fahr-32)*5/9
    var c2f = (9/5)*cel+32
    console.log(f2c)
    console.log(c2f)
}
temperaturi()
//стапки во метри
function f2m(){
    var foot = 50
    var meter = 50
    var meterToFeet = meter*3.28084
    var feetToMeter = foot*0.3048
    console.log(meterToFeet)
    console.log(feetToMeter)
}
f2m()
//креирај низа од 5 елементи (градови)
var niza1=["Skopje","Ohrid","Tokyo","Rome","Kicevo"]
console.log(niza1)
//креирај низа од 10 елементи (држави) 
var niza2=["Botswana","Botswana","Estonia","Oman","Zimbabwe","Denmark",
"Iraq","The Bahamas","Denmark","Iceland"]
console.log(niza2)
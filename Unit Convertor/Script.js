let numberEl = document.getElementById("number") 
numberEl = 20
let lengthansEl = document.getElementById("length-ans")
let volumeEl =  document.getElementById("volume-ans")
let massEl = document.getElementById("mass-ans")
    
function length(){
    let meter = numberEl * 3.28
    let feet = numberEl * 0.304
    let roundedmeter = meter.toFixed(3)
    let roundedfeet = feet.toFixed(3)
    lengthansEl.textContent = numberEl + " meters " + " = " + roundedmeter + " feet " + " | " + numberEl + " feet " + " = " + roundedfeet + " meters "
}
function volume(){
    let liters = numberEl * 0.264
    let gallon = numberEl * 4.546
    let roundedliters = liters.toFixed(3)
    let roundedgallon = gallon.toFixed(3)
    volumeEl.textContent = numberEl + " litres " + " = " + roundedliters + " gallon " + " | " + numberEl + " gallon " + " = " + roundedgallon + " litres "
}
function mass(){
    let kilos = numberEl * 2.204
    let pound = numberEl * 0.453
    let roundedKilos = kilos.toFixed(3)
    let roundedPound = pound.toFixed(3)
    massEl.textContent = numberEl + " Kilos " + " = " + roundedKilos + " Pound " + " | " + numberEl + " Pound " + " = " + roundedPound + " Kilos "
}
length()
volume()
mass()
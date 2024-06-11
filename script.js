
function multiplication() {
    let inputNumber = document.getElementById("number").value;
    let display = document.getElementById("display");
    for (let i = 1; i <= 10; i++) {
        display.innerHTML +=i + " " + "x" + " "+inputNumber + " "+  "= " + inputNumber * i +"<br>"
    }
}
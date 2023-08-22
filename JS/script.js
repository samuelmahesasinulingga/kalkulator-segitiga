// Bagian Rumus Menghitung Keliling Segitiga
function Circumference(){
    var sideA = document.getElementById('sideA').value;
    var sideB = document.getElementById('sideB').value;
    var sideC = document.getElementById('sideC').value;

    var Circumference = parseInt (sideA) + parseInt (sideB) + parseInt (sideC);

    document.getElementById('Circumference').innerHTML = "Keliling Segitiga : " + Circumference
}

// Bagian Rumus Menghitung Luas Segitiga
function area(){
    var base = document.getElementById('base').value;
    var height = document.getElementById('height').value;
    
    var area = (base*height)*1/2

    document.getElementById('area').innerHTML = "Luas Segitiga : " + area
}

// Bagian Button Reset Input Keliling
function resetcircumference() {
    document.getElementById("sideA").value = "";
    document.getElementById("sideB").value = "";
    document.getElementById("sideC").value = "";
    document.getElementById("Circumference").innerHTML = ""; 
}

// Bagian Button Reset Input Luas
function resetarea() {
    document.getElementById("base").value = "";
    document.getElementById("height").value = "";
    document.getElementById("area").innerHTML = "";
}
    
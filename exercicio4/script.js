const PI = 3.1415;
function myFunction() {
    var raio = document.getElementById("raio").value;
    var area = PI * raio * raio;
    document.getElementById("circ").textContent = "A área do círculo é = " + area.toFixed(3) + " m².";
}
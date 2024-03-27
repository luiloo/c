function displayDetails() {
    const code = parseInt(document.getElementById("codigozao").value);
    const age = parseInt(document.getElementById("idade").value);
    const height = parseFloat(document.getElementById("altura").value);
    const weight = parseFloat(document.getElementById("gordao").value);

    const output = `O competidor ${code}, tem ${age} anos, pesa ${weight.toFixed(2)} Kg e tem ${height.toFixed(2)} metros de altura.`;
    document.getElementById("aparecer").textContent = output;
}
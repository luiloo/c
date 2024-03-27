function conta() {
    let num = parseInt(document.getElementById("num").value);
    let output = '';
    for (let i = num; i <= 100; i++) {
        output += i + ' ';
    }
    document.getElementById("aparecer").textContent = output;
}
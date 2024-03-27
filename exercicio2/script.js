function exibirDetalhes() {
    const matricula = parseInt(document.getElementById("matricula").value);
    const mensalidade = parseFloat(document.getElementById("mensalidade").value);

    const output = `O aluno ${matricula} paga mensalmente R$ ${mensalidade.toFixed(2)}.`;
    document.getElementById("mostrar").textContent = output;
}
const form = document.getElementById("formularioAdocao");

const cpfsCadastrados = ["12345678900", "11122233344"];

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const cpf = document.getElementById("cpf").value;
    const idade = parseInt(document.getElementById("idade").value);
    const cidade = document.getElementById("cidade").value;
    const quintal = document.getElementById("quintal").value;
    const moradia = document.getElementById("moradia").value;
    const pet = document.getElementById("pet").value;
    const horas = parseInt(document.getElementById("horas").value);
    const motivo = document.getElementById("motivo").value.trim();
    const termo = document.getElementById("termo").checked;

    




});
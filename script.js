const form = document.getElementById("formularioAdocao");

const cpfsCadastrados = ["12345678900", "11122233344"];

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value;
    let idade = parseInt(document.getElementById("idade").value);
    let cidade = document.getElementById("cidade").value;
    let quintal = document.getElementById("quintal").value;
    let moradia = document.getElementById("moradia").value;
    let pet = document.getElementById("pet").value;
    let horas = parseInt(document.getElementById("horas").value);
    let motivo = document.getElementById("motivo").value.trim();
    let termo = document.getElementById("termo").checked;

    if (nome.length < 3) {
        alert("O Nome deve ter no mínimo 3 caracteres.");
        return;
    }

    if (!email.includes("@")) {
        alert("Email inválido.");
        return;
    }

    if (telefone.length < 8) {
        alert("Telefone inválido.");
        return;
    }

    if (!cpf) {
        alert("CPF obrigatório.");
        return;
    }

    if (cpfsCadastrados.includes(cpf)) {
        alert("CPF já cadastrado.");
        return;
    }

    if (idade < 18) {
        alert("Você precisa ter 18 anos ou mais para adotar");
        return;
    }

    if (!cidade) {
        alert("Cidade obrigatória.");
        return;
    }

    if (!moradia) {
        alert("Selecione o tipo de moradia.");
        return;
    }

    if (!quintal) {
        alert("Informe se possui quintal.")
        return;
    }

    if (!pet) {
        alert("Informe se já teve pet.");
        return;
    }

    if (isNaN(horas)) {
        alert("Informe um número válido de horas")
        return;
    }

    if (motivo.length < 10) {
        alert("O motivo deve ter pelo menos 10 caracteres.");
        return;
    }

    if (!termo) {
        alert("Você deve aceitar os termos.");
        return;
    }



    if (moradia === "apartamento" && quintal === "sim") {
        alert("Apartamento não possui quintal.");
        return;
    }

    if (moradia === "casa" && quintal === "nao") {
        alert("Casa sem quintal pode não ser ideal.");
    }

    if (horas > 8) {
        alert("O animal ficará muito tempo sozinho, justifique melhor.");
        return;
    }

    if (pet === "nao") {
        alert("A ONG poderá acompanhar sua adaptação com o pet.");
    }

    const motivosGenericos = ["quero", "porque sim"];
    if (motivosGenericos.includes(motivo.toLowerCase())) {
        alert("Motivo da adoção muito genérico.");
        return;
    }

    if (motivo.toLowerCase().includes("hoje")) {
        alert("Decisão impulsiva detectada.");
    }

    if (motivo.toLowerCase().includes("não tenho dinheiro")) {
        alert("Adoção não recomendada sem condições financeiras.");
        return;
    }


    alert(`
        Cadastro realizado com sucesso!

        Nome: ${nome}
        Email: ${email}
        Cidade: ${cidade}
        `);

    form.requestFullscreen();


});
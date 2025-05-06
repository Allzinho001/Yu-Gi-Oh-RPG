document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.querySelector("#username").value;
    const senha = document.querySelector("#senha").value;

    if (username && senha) {
        alert("Cadastro realizado com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

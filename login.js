function validar(){
    // Declarando as variáveis 
    let usuario = document.getElementById("usuario").value.toLowerCase();
    let senha = document.getElementById("senha").value;

    if(usuario === "admin" && senha === "12345"){
        window.open("quiz.html");
    } else {
        alert("Usuário ou senha inválidos");
    }
}
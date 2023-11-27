function checkPassword() {
    var password = document.getElementById("password").value;
    var messageElement = document.getElementById("message");

    // Verifique se a senha está correta (simplificando para este exemplo)
    if (password === "SENHA") {
        messageElement.style.color = "green";
        messageElement.textContent = "Senha correta. Redirecionando...";
        // Aqui você pode redirecionar para a próxima página ou executar outras ações desejadas.
        localStorage.setItem("usuárioLogado" , "true");
        window.location.href = "home.html";
    } else {
        messageElement.style.color = "red";
        messageElement.textContent = "Senha incorreta. Tente novamente.";
    }
}

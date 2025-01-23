let nomes = JSON.parse(localStorage.getItem('nomes')) || [];
let senhas = JSON.parse(localStorage.getItem('senhas')) || [];

function criarConta() {
    let nome = document.getElementById('criar-nome').value.trim();
    let senha = document.getElementById('criar-senha').value.trim();

    if (nome, senha == '') {
        alert('Por favor, preencha todos os campos!')
    } else {
        nomes.push(nome);
        senhas.push(senha);
        localStorage.setItem('nomes', JSON.stringify(nomes));
        localStorage.setItem('senhas', JSON.stringify(senhas));
        alert('Conta criada!')
        document.getElementById('criar-nome').value = '';
        document.getElementById('criar-senha').value = '';
    }
    
}   

document.addEventListener('DOMContentLoaded', () => {
    const nomes = JSON.parse(localStorage.getItem('nomes')) || [];
    const senhas = JSON.parse(localStorage.getItem('senhas')) || [];
});

function verificarLogin() {
    let nome = document.getElementById('nome-usuario').value.trim();
    let senha = document.getElementById('senha-usuario').value.trim();
    let index = nomes.indexOf(nome);

    if (index !== -1 && senhas[index] == senha) {
        alert('Login realizado com sucesso!');
    } else {
        alert('Nome ou senha inválidos. Por favor, tente novamente.');
    }
}
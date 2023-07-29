
/*Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021.
 A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).
 Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando
 até que um valor correto seja preenchido.*/

while(true){
try{
    let nomeUsuario = prompt("Qual o seu nome?");
    let dataNascUsuario = parseInt(prompt("Em qual ano você nasceu? (Digite apenas o ano)"))
    let idadeAtual

        if(isNaN(dataNascUsuario) || dataNascUsuario < 1922 || dataNascUsuario > 2022){
           throw new Error ("Data de nascimento inválida")
    }
        idadeAtual = 2023 - dataNascUsuario
        window.alert("Seu nome é " + nomeUsuario + " e você irá completar ou já completou " + idadeAtual + " anos")
    break;

}   catch (error) {
        alert(error.message);
}
}

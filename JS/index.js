//Evitando que o formulário atualize o site

//Pegando o elemento formulário e armazenando em uma variável
let form = document.querySelector("form");

//O "addEventListener" (um escutador de eventos),
//ao perceber o clique da submissão do formmulário,
//irá evitar que o site atualize
form.addEventListener("submit",(event) => {
  event.preventDefault();
})
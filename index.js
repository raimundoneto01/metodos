
 // o .REPLACE, é usado para substituir ou tirar
 // um elemento do array...
 // exemplo:
const frase = 'Meu nome é Neto, Essa é minha frase!';

console.log(frase.replace('nome', 'sobrenome'));
console.log(frase.replace('nome' , "(...)"));

// o ESPLIT, serve pra trasnformar "string", em arrays..
// ou ja mandar como um array direto.
// exemplo:

console.log(frase.split(" "));
console.log(frase.split(', '));
const tags = "PHP, HTML, JAVASCRIPT, CSS, REACT"
console.log(tags.split(" "));
console.log(tags.split(", "));

// trim: serve para aparar os espaços vazios 
// para melhor o armazenamento de envios de dados.
// muito ultilizado como:
// exemplo: envio de e-mail, notificações. 
//melhor organização no servidor...back-end
const dados = "         NETO       "
console.log(dados);
console.log(dados.trim());


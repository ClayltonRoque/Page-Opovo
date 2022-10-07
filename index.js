// O form tem que ter essas duas propriedades para funcionar o codigo abaixo:
//action = "mailto:claylton202@gmail.com"
//method = "get"
//não funciona passar arquivo.

document.getElementById('form-curriculo').addEventListener('submit', function () {
    var nome = this.querySelector('input[name=nome]'), nome = nome.value;
    var email = this.querySelector('input[name=e-mail]'), email = email.value;
    var cep = this.querySelector('input[name=cep]'), cep = cep.value;
    var endereço = this.querySelector('input[name=endereço]'), endereço = endereço.value;
    var numero = this.querySelector('input[name=número]'), numero = numero.value;
    var bairro = this.querySelector('input[name=bairro]'), bairro = bairro.value;
    var cidade = this.querySelector('input[name=cidade]'), cidade = cidade.value;
    var estado = this.querySelector('input[name=estado]'), estado = estado.value;
    var curriculo = this.querySelector('input[type=file]'), curriculo = curriculo.value;
  
    var texto = `Olá destinatário, Meu nome é: ${nome} e meu email é: ${email}, meu cep é: ${cep}, 
    meu endereço é: ${endereço}, meu numero é ${numero}, meu bairro é ${bairro}, minha cidade é ${cidade} 
    meu bairro é ${bairro}, minha cidade ${cidade}, meu estado é ${estado}, e meu curriculo é ${curriculo}`;
    this.querySelector('input[name=Body]').setAttribute('value', texto);
});


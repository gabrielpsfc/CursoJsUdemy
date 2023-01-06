class ValidaFormulário {
  constructor() {
    this.formulario = document.querySelector('.formulario')// 1 seleção do form com class='formulario'
    this.eventos()
  }

  eventos() {
    //2 adiciona event listener em formulário, usamos arrow function para preservar o this
    this.formulario.addEventListener('submit', e => { // submit = qualquer tag button for clicada 
      this.handleSubmit(e) //3 captura do evento de submit
    })
  }

  handleSubmit(e) { //4 criar o método handleSubmit
    e.preventDefault() // 5 para que o furmulário não seja enviado
    // se camposValidos = true o formulário é enviado
    const camposValidos = this.camposSaoValidos() // 6 checar se os campos estão preenchidos
    const senhasValidas = this.senhasSaoValidas() // 35 criar const senhasValidas

    if(camposValidos && senhasValidas) { //50 testar camposValidos e senhasValidas
      alert('ok')
      this.formulario.submit() // 51 enviar formulário
    }


  }


  senhasSaoValidas(){ // 38 declarar método senhasValidas
    let valid = true // 39 setar valid = true

    const senha = this.formulario.querySelector('.senha') //41 declarar variável senha 
    const repetirSenha = this.formulario.querySelector('.repetir-senha')// 42 declarar variável repetir-senha

    if(senha.value !== repetirSenha.value){ // 43 testar se senha = repetirSenha
      valid = false //44 setar valid como false
      this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais') // 45 criar erro campo senha
      this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais')// 46 criar erro campo repetirSenha

    }

    if(senha.value.length < 6 || senha.value.length > 12) { //47 testar length de senha
      valid = false; // 48 setar valid = false
      this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.'); // 49 criar erro
    }   


    return valid // 40 retornar valid
  }

  camposSaoValidos() { //7  criar função que checa se os campos estão preenchidos
    let valid = true //8 assumimos que os campos são válidos

    for (let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove()
    }


    for (let campo of this.formulario.querySelectorAll('.validar')) {// 9 criar for para checar cada campo
      const label = campo.previousElementSibling.innerText // 16 selecionar o innerText do label anterior ao campo selecionado
      
      if (!campo.value) { // 10 testamos se o campo está vazio
        this.criaErro(campo, `campo ${label} não pode estar em branco`) // 11
        valid = false // 16 mudar a flag valid caso algum campo não esteja preenchido       
      }

      if (campo.classList.contains('cpf')) {// 18 selecionar campo com class cpf/ textar se ele está preencido
        if (!this.validaCPF(campo)) valid = false  // 19 se valida cpf for false, valid = false
      }
      if(campo.classList.contains('usuario')){ // 25  selecionar campo com class usuario
        if(!this.validaUsuario(campo)) valid = false // 26 se a função valida usuario retornar false valid =  false
      }

    }
    return valid // 37 return valid no for
  }

  validaUsuario(campo){ // 27 criar função valida funcionario
    const usuario = campo.value // 28 criar a const usuario
    let valid = true //  30 criar variável valid no metodo
    if(usuario.length < 3 || usuario.length > 12){ //29 textar lenght de usuario
      this.criaErro(campo, 'usuário precisa ter entre 3 e 12 caracteres') // 31 criar erro usuario
      valid = false // 32 valid =  false
    }
                  //  aprender expressão regular
    if(!usuario.match(/^[a-zA-Z0-9]+$/g)){ // 33 textar se usuário contem apenas letras e numero
      this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e/ou números') // 34criar erro refente ao uso de caracteres além de letras e numeros
      valid = false // 35 valid =  false
    }

    return valid
  }

  validaCPF(campo) { // 20 criar função validaCPF
    const cpf = new ValidaCPF(campo.value) // 21 usar class ValidaCPF para criar o objeto cpf

    if (!cpf.valida()) { // 22 utiliza a função valida() para textar de o cpf fornecido é válido
      this.criaErro(campo, 'CPF inválido') // 23 criar erro cpf
      return false // 24  retorna falso caso cpf n seja valido
    }

    return true// 25 else true
  }



  criaErro(campo, msg) { //11 criar metodo que retorna erro
    const div = document.createElement('div') //12 criar div
    div.innerHTML = msg // 13 add msg in inner HTML
    div.classList.add('error-text') // 14 add class 
    // 15 inserir a div no dom após o elemento campo
    //element.insertAdjacentElement(position, element)    
    campo.insertAdjacentElement('afterend', div);
    //https://www.w3schools.com/jsref/met_node_insertadjacentelement.asp

  }

}

const valida = new ValidaFormulário()

// 17 O arquivo validaCPF deve ser carretado no HTML antes do main
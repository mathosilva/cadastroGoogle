class CadastroGoogle{
    get criarConta(){return $('span.NlWrkb.snByac')}
    get praMim(){return $('div.jO7h3c')}
    get nome(){return $('input[id="firstName"]')}
    get sobrenome(){return $('input[id="lastName"]')}
    get email(){return $('input[id="username"]')}
    get senha(){return $('input[name="Passwd"]')}
    get ConfirmaSenha(){return $('input[name="ConfirmPasswd"]')}
    get btnProximo(){return $('span[class="RveJvd snByac"]')}
    get telefone(){return $('input[id="phoneNumberId"]')}
    get erro(){return $('div.o6cuMc')}
    get btnConfirma(){return $('div[class="VfPpkd-RLmnJb"]')}


    realizaCadastro(data, codPais){
        this.criarConta.waitForDisplayed(10000)
        this.criarConta.click()
        browser.pause(500)
        this.praMim.waitForDisplayed(10000)
        this.praMim.click()
        this.nome.waitForDisplayed(10000)
        this.nome.setValue(data.nome)
        this.sobrenome.setValue(data.sobrenome)
        this.email.setValue(data.email)
        this.senha.setValue(data.senha)
        this.ConfirmaSenha.setValue(data.senha)
        this.btnProximo.click()
        this.telefone.setValue(`${codPais}${data.telefone}`)
        this.btnConfirma.click()
    }
}

module.exports = new CadastroGoogle
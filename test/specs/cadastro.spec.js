const CadGoogle = require('../pageObjects/cadGoogle.po')
const faker = require('faker')
const data = require('../../data/dadosCliente.json')
const erroTel = 'Este formato de número de telefone não é válido. Verifique o país e o número.'

describe('Cadastro fake no google', ()=>{
    beforeEach(()=>{
     browser.url('/')
    })
    it('Cadastro com telefone inválido com código do Brasil', ()=>{
        let nomeObj = faker.name.findName().split(' ')
        data.nome = nomeObj[0]
        data.sobrenome = nomeObj[1]
        data.email = `${nomeObj[0]}.${nomeObj[1]}08092020`
        CadGoogle.realizaCadastro(data, '+55')
        CadGoogle.erro.waitForDisplayed(10000)
        expect(CadGoogle.erro.getText()).toEqual(erroTel)
    })
    it('Cadastro com telefone inválido com código dos EUA', ()=>{
        let nomeObj = faker.name.findName().split(' ')
        data.nome = nomeObj[0]
        data.sobrenome = nomeObj[1]
        data.email = `${nomeObj[0]}.${nomeObj[1]}08092020`
        CadGoogle.realizaCadastro(data, '+1')
        CadGoogle.erro.waitForDisplayed(10000)
        expect(CadGoogle.erro.getText()).toEqual(erroTel)
    })
    it('Cadastro com telefone inválido com código da Angola', ()=>{
        let nomeObj = faker.name.findName().split(' ')
        data.nome = nomeObj[0]
        data.sobrenome = nomeObj[1]
        data.email = `${nomeObj[0]}.${nomeObj[1]}08092020`
        CadGoogle.realizaCadastro(data, '+244')
        CadGoogle.erro.waitForDisplayed(10000)
        expect(CadGoogle.erro.getText()).toEqual(erroTel)
    })
})
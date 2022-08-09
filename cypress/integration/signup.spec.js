import signup from '../pages/SignupPage'
import SignupFactory from '../factories/signupFactory'
import SignupPage from '../pages/SignupPage'

//FLUXO 1
// Buscando a página e procurando o botão para entra na página de cadastro
describe('Signup', () => {

    // beforeEach(function () {
    //   cy.fixture('deliver').then((d) => {
    //     this.deliver = d
    //   })
    // })

    it('User should be deliver', function () {

        var deliver = SignupFactory.deliver()
        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        //Constante para que a mensagem não fique grande. Ela não vai sofrer alteração
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContetShouldBe(expectedMessage)
    })

    // FLUXO 2
    it('Incorrect document', function () {

        var deliver = SignupFactory.deliver()
        deliver.cpf = '000000141aa'

        // Variável criada para validação dos campos de preenchimento
        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')

    })

    it('Incorrect email', function () {

        var deliver = SignupFactory.deliver()
        deliver.email = "user.com.br"
        // Variável criada para validação dos campos de preenchimento
        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')

    })
        context('Required fields', function () {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome'},
            { field: 'cpf', output: 'É necessário informar o CPF'},
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP'},
            { field: 'number', output: 'É necessário informar o número do endereço'},
            { field: 'delivery_method', output: 'Selecione o método de entrega'},
            { field: 'cnh', output: 'Adicione uma foto da sua CNH'}
        ]

        before(function () {
            SignupPage.go()
            SignupPage.submit()
        })

        messages.forEach(function(msg) {
            it(`${msg.field} is required`, function(){
                SignupPage.alertMessageShouldBe(msg.output)
            })
        })
    })

})
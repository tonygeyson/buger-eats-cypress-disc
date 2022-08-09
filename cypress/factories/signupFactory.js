var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstname = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstname} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstname),
            whatsapp: '85999999999',
            address: {
                postalcode: '60533350',
                street: 'Rua 1123',
                number: '1000',
                details: 'Ap 142',
                district: 'Conjunto Ceará I',
                city_state: 'Fortaleza/CE'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
            return data
    }
}
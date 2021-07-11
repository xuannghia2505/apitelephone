const seeder = require('mongoose-seed');

const phones = [

    {
        'model': 'Phone',
        'documents': [
            {   
                '_id'  :'6034c179c7f75d27640b3f55',
                'tendanhba': 'hello',
                'sdt': '355535433',

               
            }
        ]
    },
    {
        'model': 'User',
        'documents': [
            {
                'username': 'nghia1',
                'password': '123',
                'phone_id': '6034c179c7f75d27640b3f55'
            },
            {
                'username': 'nghia2',
                'password': '123',
                'phone_id': '6034c179c7f75d27640b3f55'
            }
        ]
    } 
]
seeder.connect('mongodb://localhost:27017/traning', function() {
    seeder.loadModels([
        './models/phone.js',
        './models/user.js'
    ]);
    seeder.clearModels(['Phone','User'], function() {

        seeder.populateModels(phones, () => {
            seeder.disconnect()
        })

    })
})
const mongoose = require('mongoose')
const Association = require('../models/association.model')
const Adopter = require('../models/petAdopter.model')

const dbtitle = 'animal-adopt'
mongoose.connect(`mongodb://localhost/${dbtitle}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

Association.collection.drop()
Adopter.collection.drop()

const associations = [
    {
        
    }
]
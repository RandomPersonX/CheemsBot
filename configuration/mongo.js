require('dotenv').config()
const mongoose = require('mongoose')

module.exports = async () => {

    await mongoose.connect(process.env.mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    return mongoose
}
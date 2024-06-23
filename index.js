const mongoose = require('mongoose')
const { PORT, MONGODB_URI } = require('./utils/config');
const app=require('./server')

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Mongodb is connected successfully..')
       
    })
    .catch((e) => {
    console.log(e)
    })
     app.listen(PORT, () => {
    console.log('Server listening...')
})

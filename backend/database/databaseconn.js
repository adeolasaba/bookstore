const mongoose = require('mongoose')

try {

    mongoose.set('useCreateIndex', true)
    mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/book_database', { useNewUrlParser: true, useUnifiedTopology: true  })
.then(()=>{
    console.log("Database connection OK")
    })


} catch (error) {
    console.log("Error " + error) 
   
}

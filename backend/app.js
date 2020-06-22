const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Books = require('./Schema/Books')
require('./database/databaseconn')


const app = express()

app.use(bodyParser.json())
app.use(cors())




//Route
app.get('/', async(req, res)=>{
    try {
        const findBook = await Books.find({})
        res.json({'All books on our database': findBook}).status(200)
        
    } catch (error) {
        res.json({'sorry no data found on our database': error}).status(400)   
    }
})

app.post('/', async(req, res)=>{
    try {
        const firstBook = new Books ({
            author: req.body.author,
            title:req.body.title,
            serialNo: req.body.serialNo,
            PublicationDate:req.body.publicationDate
        })

        const saveBook = await firstBook.save()
        res.json({'Book successfully save into database': saveBook}).status(200)
        
    } catch (error) {
        res.json({'Database is currently down': error.message}).status(400)

        
    }

})

app.delete("/:id", async (req, res) => {
try {
    const findbook = await Books.findByIdAndDelete({_id:req.params.id})

    res.json({"deleted books is ": findbook}).status(200)
    
} catch (error) {

    res.json({'Database can not delete selected book': error.message}).status(400) 
    
}
   

})

app.put("/:id", async (req, res) => {

    try {
        const updateBook = await Books.findByIdAndUpdate({_id:req.params.id},req.body)
    res.json({'updated book': updateBook}).status(200)
        
    } catch (error) {

        res.json({' your book is updated': error.message})
        
    }
    

    
})

const port = process.env.PORT || 5000

app.listen(port,(req, res) =>{
console.log('server is running on ' + port)
})
import express from 'express'
import mongoose from 'mongoose'
import router from './routes/routes.js'
import cors from 'cors'
const app = express()
const CONNECTION_URL ='mongodb+srv://ruhinaz:ruhishaf9@cluster0.t86lu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const port = process.env.PORT || 5000;

app.use(express.json({limit:'20mb'}));
app.use(express.urlencoded({limit:'20mb', extended:true}))
app.use(cors())

app.use('/', router)

mongoose.connect(CONNECTION_URL).then(()=>{
    app.listen(port, ()=>{
        console.log(`connnection sucessfull`)
        })
}).catch(e=>{
    console.log(e,'Connection failed')

})
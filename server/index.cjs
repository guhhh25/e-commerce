
const express = require('express');
var cors = require('cors')

const app = express()

app.use(cors())


let foodDB =  import('./../foodTest.cjs').then((res) =>{
    return res
});


console.log(foodDB)

app.get('/food', async (req, res)  =>{
    return res.status(200).json({
      item: await foodDB,
      
    })
})



app.listen(3001, () =>{
    console.log('rodando')
})




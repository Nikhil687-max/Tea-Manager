import express from 'express'
import 'dotenv/config'
import { config } from 'dotenv';
let app = express();
let port = process.env.port || 3001
app.use(express.json());
let Teas = [];
let newId = Teas.length+1;



app.get('/',(req, res) => {
    res.status(200).send("All good all ok");
})

//CURD - create Update Render Delete

app.post('/teas', (req,res) => {
    const {name, price} = req.body;
    console.log(`Name: ${name}, Price: ${price}`);
    let newTea = {
        id:newId++, 
        "name": name,
        "price": price 
    }
    Teas.push(newTea);
    res.status(200).send(newTea);
})

//list all 
app.get('/teas' , (req, res) => {
   
    res.status(200).send(Teas);
    
})


//getting tea with id
app.get('/teas/:idd', (req, res) => {
    const tea = Teas.find(t => (t.id === parseInt(req.params.idd)));
    if(!tea) return res.status(400).send("tea not found bro");
    else
        res.status(200).send(tea);
})

//update
app.post('/teas/:id', (req,res) => {
    let tea = Teas.find(t => t.id === parseInt(req.params.id));
    const {name, price} = req.body;
    if(!tea)res.status(404).send("invalid update command");
    tea.name = name;
    tea.price = price;
    res.status(200).send(tea)
})


//Delete
app.delete('/teas/:id', (req, res) => {
    let index = Teas.findIndex(t => t.id === parseInt(req.params.id));
    if(index === -1)res.status(404).send("invalid update command");
    Teas.splice(index,1);
    return res.status(200).send('Deleted')

})


app.listen(port, () => {
    console.log(`listening at Port: ${port}`)
})
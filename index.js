const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();

//middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res)=>{
        res.send('john is running waiting for Ema ')
});

app.listen(port, ()=>{
    console.log(' john is running on port', port);
})

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Home');
  
});
app.get('/api/ping', (req, res) => {
    
    res.status(200).send(
        {
            "status":200,
            "message":"success"
        }
    ); 


});
app.listen(port, () => {
  console.log(`Our app listening on port ${port}!`)
});

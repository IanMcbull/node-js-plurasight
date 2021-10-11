const express = require('express');
const app = express();
const port = process.env.PORT || 4444;

app.get('/',(req,res)=>{
  res.send('Server response..');
})
app.listen(port,()=>{
 console.log(`Listening on port: ${port}`);
})
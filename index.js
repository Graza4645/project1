require('dotenv').config();
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/manish', (req, res) => {
    res.send('Hello Manish');
  });

  app.get('/iqbal', (req, res) => {
    res.send('Hello Iqbal')
  })


  app.get('/raza', (req, res) => {
    res.send('Hello raza')
  })

  app.get('/login', (req, res) => {
    res.send('<h1> hello </h1>')
  })

//   app.get('/app', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'table.html'));
//   });

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
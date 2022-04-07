const express = require('express')
const app = express()
const port = 3000

app.use('/static', express.static('public'))
app.use(require('./ruotes/routes'))

app.listen(port,  () => {
  console.log(`Example app listening on port ${port}!`)
})



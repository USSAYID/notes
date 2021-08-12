import express from 'express'
import path from 'path'

const app = express()
const port = process.env.PORT ?? 3000
const __dirname = path.resolve()

app.set('view engine', 'pug')
app.use('/static', express.static(__dirname + '/public'))

app.get('/', (req, res) => res.render('index'))


app.listen(port, () => console.log(`Example app listening on http://localhost:${port}`))
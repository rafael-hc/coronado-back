const app = require('./src/app')
const port = process.env.PORT || 3000


// Roda a api na porta 3000
app.listen(port, () => console.log(`Server is running in port: ${port}`))
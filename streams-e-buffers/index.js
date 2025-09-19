const fs = require('node:fs')

//const streamLeitura = fs.createReadStream('arquivo.txt')
const streamLeitura = fs.createReadStream('image.jpeg')

const buffer = []

streamLeitura.on('data', (chunk) => {
    buffer.push(chunk)
    console.log('Um chunk foi processado.')
 } )

streamLeitura.on('end', () => { 
    console.log("Buffer:\n", buffer)
    //const dadosCompletos = Buffer.concat(buffer).toString()
    //console.log("Dados lidos:\n", dadosCompletos)
} )
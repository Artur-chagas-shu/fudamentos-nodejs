const fs = require('node:fs')
const filename = './arquivo.txt'

const exists = fs.existsSync(filename) // true ou false
if(exists){
    fs.readFile(filename,"utf-8", ( err, data ) =>{
    if(err){
        console.error('Erro ao ler o arquivo:', err.message)
        return
    }
    const entries = data.split(", ")
    console.log(entries)
    entries.forEach((entry)=>{
        console.log(entry)
    })
})

}else {
    console.log(" O arquivo nao existe")
}




/* try {
   const data =  fs.readFileSync(filename, "utf-8")
    console.log(data)
    
} catch (error) {
    console.error('Erro ao ler o arquivo:', error.message)
} */
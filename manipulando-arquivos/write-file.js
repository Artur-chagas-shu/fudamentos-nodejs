const fs = require("node:fs")

const content = "Conteudo do novo arquivo assincrono" 
fs.writeFile("./arquivo.txt", content, "utf-8",(err)=> {
    if(err){
    console.log("Erro ao escrever o arquivo: ", error.message)
    return
    }
    console.log("Arquivo escrito com sucesso! de forma assincrona")
})

/* try {
    fs.writeFileSync('./arquivo.txt','Ola, Mundo!','utf-8')
    console.log("Arquivo escrito com sucesso!")
    
} catch (error) {
    console.log("Erro ao escrever o arquivo: ", error.message)
    
} */
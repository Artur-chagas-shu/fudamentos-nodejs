const fs = require("node:fs")
fs.rename("arquivo.txt", "arquivo.csv",(err) =>{
    if(err){
        console.log("erro ao renomear o arquivo", err.message)
        return
    }

    console.log("arquivo renomeado com sucesso")
})
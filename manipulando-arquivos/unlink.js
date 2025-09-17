const fs = require("node:fs")


fs.unlink("arquivo.csv", (err) => {
    if(err){
        console.error("Erro ao deletar o arquivo", err.message)
        return
    }
    console.log("Arquivo deletado com sucesso")
} )
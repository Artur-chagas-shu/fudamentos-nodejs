import fs from "node:fs"

function deleteFile(){
    try {
        fs.unlinkSync('./meuarquivo.txt')
        console.log("Arquivo deletado com sucesso!");
        
    } catch (error) {
        console.log("Erro ao deletar o arquivo:", error.message);
        
    }
}

export default deleteFile
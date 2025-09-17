import fs from 'node:fs'

function showFile(){
    try {
        const data = fs.readFileSync('meuarquivo.txt', 'utf-8')
        console.log(data);
        
    } catch (error) {
        console.log("Erro ao ler o arquivo:", error.message);
        
    } 

}


export default showFile
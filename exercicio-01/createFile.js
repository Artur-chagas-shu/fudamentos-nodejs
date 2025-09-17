
import fs from 'node:fs';

function createFile(content){
    try {
        fs.writeFileSync('./meuarquivo.txt', content, 'utf-8')
        console.log("Arquivo criado com sucesso!");
    } catch (error) {
        console.log("Erro ao criar o arquivo:", error.message);  
    }
}

export default createFile
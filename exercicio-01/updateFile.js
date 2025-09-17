
import fs from "node:fs"

function updateFileContet (content){
  try {
    fs.writeFileSync("./meuarquivo.txt", content , "utf-8")
    console.log("Arquivo atualizado com sucesso!");
    
  } catch (error) {
    console.log("Erro ao atualizar o arquivo:", error.message); 
  }
}

export default updateFileContet
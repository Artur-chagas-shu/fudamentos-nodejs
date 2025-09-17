import  createFile from './createFile.js';
import updateFileContet from './updateFile.js';
import showFile from './showFile.js';
import deleteFile from './deleteFile.js';   


createFile("Meu primeiro arquivo criado com Node.js")
showFile()
updateFileContet("Conteudo atualizado com sucesso")
showFile()
deleteFile()
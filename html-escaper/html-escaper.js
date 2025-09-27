const fs = require('node:fs');
const path = require('node:path');
const { escape } = require('node:querystring');
const readline = require('node:readline');

run()

function escapeHtmlSpecialCharacters(text) {
    return text.replace(/[<>&]/g,(match)=> {
        switch(match){
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "&":
                return "&amp;";
            default:
                return match;
        }
    })
}

function escapeHtmlFile(inputFilePath, outputFilePath) {
    try {
        const fileContent = fs.readFileSync(inputFilePath, 'utf-8');
        const escapedContent = escapeHtmlSpecialCharacters(fileContent);
        fs.writeFileSync(outputFilePath, escapedContent, 'utf-8');
        console.log(`Arquivo processado com sucesso. Conteúdo escapado salvo em: ${outputFilePath}`);
        
    } catch (error) {
        console.log('Erro:', error.message);
        process.exit(1);
        
    }
}


function askFilePath(question) {
    const rl = readline.createInterface({input:process.stdin, output:process.stdout});

    return new Promise((resolve)=> {
        rl.question(question,(answer)=>{
            resolve(answer);
            rl.close();
        })
    })
}

async function userIntereaction() { 
    let inputPath = process.argv[2];
    if (!inputPath) {
        inputPath = await askFilePath('Por favor, insira o caminho do arquivo de entrada: ');
    }
    inputPath = path.resolve(inputPath);

    const defaultName = `escaped_${path.basename(inputPath)}.txt`;
    const answer = await askFilePath(`Insira o caminho do arquivo de saída (pressione Enter para usar o nome padrão: ${defaultName}): `);
    let outputPath = answer.length > 0 ? answer : defaultName;
    outputPath = path.resolve(outputPath);

    escapeHtmlFile(inputPath, outputPath);
}

function run(){
    if (process.argv.length >= 4 ) {
        escapeHtmlFile(
            path.resolve(process.argv[2]), 
            path.resolve(process.argv[3])
        );
    }else {
        console.log('---------------------------------------------')
        console.log('HTML Tag Escaper v1.0.0')
        console.log('---------------------------------------------')
        console.log('Argumentos não fornecidos! Por favor, insira os caminhos dos arquivos quando solicitado.')
        userIntereaction();
    }
}
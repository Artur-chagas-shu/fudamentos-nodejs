/* process.stdout.write("Ola, mundo!")

process.stdin.on("data",(data)=>{
    process.stdout.write(`Voce digitou: ${data}`)
}) */

const readline = require('node:readline');  

const rl = readline.createInterface({input:process.stdin, output:process.stdout});

/* rl.on('line', (input)=>{
    rl.write(`Voce digitou: ${input}`);
}); */


/* rl.question('Qual o seu nome?', (answer)=>{
    rl.write(`Ola, ${answer}!\n`);
    rl.close()
})

rl.once('close', () => {
    rl.write('Saindo...')
    /* process.exit(0) */
/* })  */

rl.on('SIGINT', () =>{
    rl.question("Voce realmente deseja sair? (S/N) ", (answer)=>{
        if (answer.trim().toLowerCase() === 's'){
            process.exit(0)
         } else{
            rl.write('Voce Escolheu continuar!\n')
        }
    })
})
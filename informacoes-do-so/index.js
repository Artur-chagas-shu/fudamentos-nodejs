const os = require("node:os")

const plataforma = os.platform()
console.log(`Plataforma do SO: ${plataforma}`)

const arquitetura = os.arch()
console.log(`Arquitetura do SO: ${arquitetura}`)

const cpus = os.cpus()
console.log('Informações das CPUs:', cpus[0])

const memoria = os.totalmem()
console.log(`Memória total do sistema: ${memoria / 1024 /1024 / 1024 } GB`)
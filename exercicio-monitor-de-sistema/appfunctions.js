
const os = require('node:os');
const fs = require('node:fs');
const path = require('node:path');
const { memoryUsage } = require('node:process');

const mapSystemData = {
    'win32': 'Windows',
    'darwin': 'MacOS',
    'linux': 'Linux'
}

function getSystemData(){
        const totalMemory = os.totalmem() / (1024 ** 3);
        const freeMemory = os.freemem() / (1024 ** 3);
        const usedMemory = totalMemory - freeMemory;
        const memoryUsage = (usedMemory / totalMemory) * 100;
        const cpuModel = os.cpus()[0].model; 
        const architecture = os.arch();
        const osName = mapSystemData[os.platform()]  ;

        const uptimeTotalSeconds = Math.floor(os.uptime());
        const uptimeDays = Math.floor(uptimeTotalSeconds / (60 * 60 * 24));
        const uptimeHours = Math.floor((uptimeTotalSeconds % (60 * 60 * 24)) / (60 * 60));
        const uptimeMins = Math.floor((uptimeTotalSeconds % (60 * 60)) / 60);
        const uptimeSecs = uptimeTotalSeconds % 60;


        const uptime = `${uptimeDays} dias, ${uptimeHours} horas, ${uptimeMins} minutos `;
        return { osName, architecture, cpuModel, memoryUsage:memoryUsage.toFixed(2), uptime, usedMemory: usedMemory.toFixed(2), totalMemory: totalMemory.toFixed(2) };
}

       
function printSystemInfo(){
        console.clear();
        const data = getSystemData();
      
        console.log('Nome do sistema: ', data.osName);
        console.log('Arquitetura do sistema: ',data.architecture);
        console.log('Modelo do processador: ', data.cpuModel);
        console.log(`Uso de memória Ram: , ${data.usedMemory} GB / ${data.totalMemory} GB  (${data.memoryUsage} %)`);
        console.log('Tempo de atividade do sistema: ', data.uptime);
        console.log('---------------------------------------');  


}

 function createlog(){
    const logDir = path.join ('/', 'logs')
    const logPath = path.join(logDir, 'log.txt');
        const data = getSystemData();
        const logContent = 'Log de monitoramento do sistema\n' +
            '---------------------------------------\n' +
            `Nome do sistema: ${data.osName}\n` +
            `Arquitetura do sistema: ${data.architecture}\n` +
            `Modelo do processador: ${data.cpuModel}\n` +
            `Uso de memória Ram: , ${data.usedMemory} GB / ${data.totalMemory} GB  (${data.memoryUsage} %)`; +
            `Tempo de atividade (horas): ${data.uptime}\n` +
            '---------------------------------------\n';
        if(!fs.existsSync(logDir)){
            fs.mkdirSync(logDir); 
        }
            fs.appendFileSync(logPath, logContent);   
    
}
module.exports = { systemInfo: printSystemInfo, createlog };
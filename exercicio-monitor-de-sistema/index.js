const { systemInfo, createlog } = require('./appfunctions');

setInterval(()=>{
    systemInfo();
    createlog();
}, 1000);

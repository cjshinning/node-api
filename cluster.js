const cluster = require('cluster');
const os = require('os');
const http = require('http');

// if(cluster.isMaster){
//     let numWorker = os.cpus().length;
//     console.log(`Master cluster setting up ${numWorker} workers...`);

//     for(let i = 0; i < numWorker; i++){
//         cluster.fork();
//     }

//     cluster.on('online', worker => {
//         console.log(`Worker ${worker.process.pid} is online`)
//     })

//     cluster.on('exit', (worker, code, signal) => {
//         console.log(`Worker ${worker.process.pid} died with code: ${code}`);
//         console.log('Starting a new workder');
//         cluster.fork();
//     })
// }else{
//     http.createServer((req, res) => {
//         res.writeHead(200);
//         res.end('hello world\n');
//     }).listen(8000);
// }

if(cluster.isMaster){
    const workder = cluster.fork();
    workder.send('hi there');
}else if(cluster.isWorkder){
    process.on('message', msg => {
        process.send(msg);
    })
}
const os = require('os');
const cluster = require('cluster');

console.log(os.platform());
// console.log(os.arch());
console.log(os.cpus().length);

if(cluster.isMaster){
  for (let i = 0; i < os.cpus.length-1; i++) {
    cluster.fork()

  }
  cluster.on('exit', (worker)=>{
    console.log(`Воркер с PID ${worker.process.pid} умер`);
    cluster.fork()
  })
}else{
  console.log(`Воркер с PID ${process.pid} запущен`);
  setInterval(() => {
  console.log(`Воркер с PID ${process.pid} всё еще запущен`);
  }, 5000);
}

// const cpus=os.cpus
// for (let i = 0; i < cpus.length-1; i++) {
//   const care=cpus[i]
//   console.log('Запустить еще один nodejs процесс');
// }

// console.log(process.pid);
console.log(process.pid);

// console.log(process.env);
console.log(process.argv);

if (Math.random() > 0.5) {
  while (true) {}
} else {
  console.log('precess finished');
  process.exit();
}

function doWork (){
  //throw error that says 'unable to do work'
  throw new Error('unable to do work');
}

try {
  doWork();
} catch (e) {
  console.log(e.message);
} finally {
  console.log('Finally block executed');
}

console.log('try catch ended');

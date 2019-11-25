/* when ever a asyn function enter in call stack it is moved
   into the webapi where its execution happen. these are provided by browser.
   Its like a hack to provide multiple thread.
   when execution is completed in webapi it queues the function to eventloop, where they wait
   till the call stack is empty;
*/
var name ='sahil';
var age =23;

var arr = [];
// this.arr({name,age});

console.log(arr)

console.log('first value');
setTimeout(()=>{
    console.log('second value');
},0);

for(let i=1;i<=90000;i++){
    if(i==90000){
        console.log('third value');
    }
}

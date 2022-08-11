var fs = require('fs');

var search = 'Novel';

fs.readFile('q5.txt', function(err, data){
   var arr = [data.toString().split(' ')][0];
   if(err) throw err;
   if(data.includes(search)){
    var count = 0;
    for (var i=0; i<arr.length; i++){
        if(search === arr[i]){
            count+=1
        }
    }
    console.log(count);
   }
})
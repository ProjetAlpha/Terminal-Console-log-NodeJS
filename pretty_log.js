
function log(type, ...args){
let title = type.toUpperCase();
console.log('\n  \x1b[42;30m%s\x1b[0m','\t\t'+title+'\t\t\n');
console.log('\n');
args.forEach(function(row){
    if(row.constructor === String){
         console.log('  '+row,'\n');
    }else if(row.constructor === Array){
        log_arr(row);
        console.log('\n');
    }
});

}

function log_arr(arr){

  var result = [], countDepth = [], str = '';

  flatten(arr, result, countDepth);

  for(var i =0, j = 0; i<result.length;i++,j++){

    for(var k = 0; k<countDepth.length;k++){

      if(result[i] == countDepth[k]){
        str+='\t';
        j=0;
      }
    }
  console.log(str+'['+j+']'+'=>'+result[i]);
}

function flatten(arr, result, countDepth){

   if(arr instanceof Array){
      countDepth.push(arr[0]);

      arr.forEach(function(row){
        flatten(row, result, countDepth);
      });
    }
    else{
    result.push(arr);
    }
  }
}

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
let arr = ['yolo', 'salut', 'bonjour'];
log('warning', 'Message: display my data!', arr, 'Another message: hey there!', arr);
log('error', arr, 'hey');
log('info', arr, 'hey');

// TODO : array / object...
var arr_2 = ['first', ['second1', 'second2', ['third1', 'third2','third3','intru1'], ['forth1', 'forth2','forth3','intru2']]];
function log_arr(arr){

  var result = [], countDepth = [], str = '';

  flatten(arr, result, countDepth);

  for(var i =0, j = 0; i<result.length;i++,j++){

    for(var k = 0; k<countDepth.length;k++){

      if(result[i] == countDepth[k] && result[i - 1] !== countDepth[k]){
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
log('info', 'message : multidimensional array', arr_2);

function log_object(obj){

}
//TODO : object et JSON (object + array). Fichier bash pour tester les fonctionnalités.
var schema = require('../schema.json');

function traverse(obj,func, parent) {
  for (i in obj){
    func.apply(this,[i,obj[i],parent]);
    if (obj[i] instanceof Object && !(obj[i] instanceof Array)) {
      traverse(obj[i],func, i);
    }
  }
}

function getPropertyRecursive(obj, property){
  var acc = [];
  traverse(obj, function(key, value, parent){
    if(key === property){
      acc.push({parent: parent, value: value});
    }
  });
  return acc;
}

var myobj = {
  boo :'1',
  bo1 :'1',
  bo2 : {
    boo :'2',
    test :'2',
    bo3 : {
      bar1: '3',
      bar2: '3',
      bar3: '3',
      test: '3',
      bar4: '3',
    }
  },
  boo :'1',
}

console.log(getPropertyRecursive( myobj, 'test' ));

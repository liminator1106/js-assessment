exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i ++){
      sum += arr[i];
    }
    return sum;
  },

  remove : function(arr, item) {
    var output = [];
    arr.forEach(function(val){
      if(val !== item){
        output.push(val);
      }
    })
    return output;
  },

  removeWithoutCopy : function(arr, item) {
    while(arr.indexOf(item) !== -1){
      var index = arr.indexOf(item);
      arr.splice(index, 1);
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var output = 0;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        output++;
      }
    }
    return output;
  },

  duplicates : function(arr) {
    var obj = {};
    var output = [];
    for(var i = 0; i < arr.length; i++){
      if(obj[arr[i]] === undefined){
        obj[arr[i]] = 1;
      }
      else{
        obj[arr[i]]++;
      }
    }

    for(var key in obj){
      if(obj[key] > 1){
        output.push(parseInt(key));
      }
    }
    return output;
  },

  square : function(arr) {
    for(var i = 0; i < arr.length; i++){
      arr[i] = arr[i] * arr[i];
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var indexes = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === target){
        indexes.push(i);
      }
    }
    return indexes;
  }
};

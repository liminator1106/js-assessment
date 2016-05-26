exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    for(var i = start; i <= end; i++){
      function(){
        var j = i;
        setTimeout(function(){
          console.log(j);
        }, 100)
      }
    }
  }
};

exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function(resolve, reject){
      resolve(value);
    })
  },

  manipulateRemoteData : function(url) {
    return new Promise(function(resolve, reject){
      $.ajax({
        url: url,
        method: 'GET',
        success: function(result) {
          var send = result.people.map(function(person){
            return person.name
          })
          send.sort();
          resolve(send);
        },
        error: function(err) {
          reject(err);
        }
      })
    })
  }
};

appController = function(options) {
  this.options = options || {};
  this.data = {};
}

appController.prototype.init = function() {
  console.log('[ GET TWEETS.JSON ]')
  $.ajax({
    url: '/data/tweets.json',
    success: this.build.bind(this),
    error: function(e) {
      console.error(e);
    }
  });
}

appController.prototype.build = function(data) {
  console.log('[ BUILDING TWEETS ]');
  var tweets = document.getElementById('tweets');
  for (var i = 0; i < data.statuses.length; i++) {
    console.log(data.statuses[i]);
    var tweet = document.createElement('li');
    tweet.className = 'tweet';
    tweet.innerHTML = data.statuses[i].text;
    if (data.statuses[i].entities.media) {
      for (var m = 0; m < data.statuses[i].entities.media.length; m++) {
        var img = data.statuses[i].entities.media[m].media_url;
        tweet.innerHTML += '<img src='+img+'>';
      }
    }
    tweets.appendChild(tweet);
  }
}
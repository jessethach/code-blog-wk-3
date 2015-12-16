var repos = {};

repos.all = [];
repos.owner = '';

repos.requestRepos = function(callback) {
  $.ajax({
    type: 'GET',
    url: 'https://api.github.com/users/jessethach/repos?sort=updated',
    headers: {Authorization: 'token ' + githubToken}
  }).done(function(data) {
    repos.all = data;
    repos.owner = repos.all[0].owner.html_url;
    console.log(data);
  }).done(callback);
};


// $.ajax({
//   url: '/github/users/jessethach/repos?sort=updated',
//   type: 'GET',
//   success: function(data, message, xhr) {
//     repos.all = data;
//   }
// }).done(callback);

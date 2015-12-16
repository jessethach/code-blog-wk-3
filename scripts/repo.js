var repos = {};

repos.all = [];

repos.requestRepos = function(callback) {
  $.ajax({
    type: 'GET',
    url: 'https://api.github.com/users/jessethach/repos?sort=updated',
    headers: {Authorization: 'token ' + githubToken}
  }).done(function(data) {
    console.log(data);
    repos.all = data;
    console.log(data);
  }).done(callback);
};

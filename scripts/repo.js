var repos = {};

repos.all = [];
repos.owner = '';

repos.requestRepos = function(callback) {
  $.ajax({
    url: '/github/users/jessethach/repos' +
          '?per_page=100' +
          '&sort=updated',
    type: 'GET',
    success: function(data, message, xhr) {
      repos.all = data;
      repos.owner = repos.all[0].owner.html_url;
    }
  }).done(callback);
};

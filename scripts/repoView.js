repoView = {};

//Create function that will call the render function as a callback
repoView.index = function() {
  repoView.ui();

  var _append = function(repo) {
    $('#about ul').append(repoView.render(repo));
  };
  repos.all.forEach(_append);
};

//Will render every repo
repoView.render = function(repo) {
  return $('<li>').text(repo.commits_url);
};

//This will empty the previous rendered repos
repoView.ui = function() {
  var $about = $('#about');
  var $ul = $about.find('ul');

  $ul.empty();
  $about.fadeIn().siblings().hide();
};

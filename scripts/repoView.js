repoView = {};

//Create function that will call the render function as a callback
repoView.index = function() {
  repoView.ui();

  var _append = function(repo) {
    $('#about ul').append(repoView.renderRepolinks(repo));
  };
  repos.all.forEach(_append);
  repoView.renderOwner();
};

//Will render every repo
repoView.renderRepolinks = function(repo) {
  return $('<li>').text(repo.html_url);
};

//Will render info of Jesse Thach
repoView.renderOwner = function() {
  return $('<section>').text(repos.owner).prependTo('#about-section');
};

//This will empty the previous rendered repos
repoView.ui = function() {
  var $about = $('#about');
  var $aboutSection = $('#about-section');
  var $ul = $about.find('ul');

  $ul.empty();
  $aboutSection.empty();
  $about.fadeIn().siblings().hide();
};

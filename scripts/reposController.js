var reposController = {};

reposController.index = function() {
  console.log('calling controller!');
  repos.requestRepos(repoView.index);
};

var articlesController = {};

articlesController.index = function () {
  Article.loadAll(articleView.index);
};

//Build a load function that will load the user for subsequent routes you'll need to access the ":id" passed.
articlesController.loadID = function(ctx, next) {
  //Create method of matching id and directing user to specific page
  var id = ctx.params.id;
  Article.find(id, function(data) {
    data = data[0];
    console.log(data);
  });
    next();
  };

  articlesController.showID = function(ctx) {
  console.log(ctx);
  $('#articles')
  .empty();

  //Need to write code to match context to the artticle in the database

  // .append('<h1>' + ctx.user.name + '<h1>');
  // articleView.render(ctx).done;
};

var articlesController = {};

articlesController.index = function () {
  Article.loadAll(articleView.index);
};

//Will filter the articles by category
articlesController.category = function(ctx, next) {
  var categoryData = function(data) {
    ctx.data = data;
    next();
  };
  Article.findByCategory(ctx.params.category, categoryData);
};

articlesController.author = function(ctx, next) {
  console.log(ctx);
  var authorData = function(data) {
    ctx.data = data;
    next();
  };
  Article.findByAuthor(ctx.params.author, authorData);
};

//Build a load function that will load the user for subsequent routes you'll need to access the ":id" passed.
articlesController.ID = function(ctx, next) {
  var idData = function(data) {
    console.log(data);
    ctx.data = data;
    next();
  };
  Article.findID(ctx.params.id, idData);
};

articlesController.show = function(ctx) {
  console.log(ctx.data);
  articleView.show(ctx.data);
};

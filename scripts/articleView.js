var articleView = {};

articleView.index = function() {
  var _renderAll = function() {
    $articles = $('#articles');
    $articles.show().siblings().hide();
    $('#spinner').hide();
    Article.all.forEach(function(article) {
      $articles.append(articleView.render(article));
    });
  };

  if (articleView.template) {
    _renderAll();
  } else {
    $.get('/templates/article.html', function(data, msg, xhr) {
      articleView.template = Handlebars.compile(data);
      _renderAll();
    });
  }
};

articleView.loadTemplate = function(articles) {
  $.get('/templates/article.html', function(data, msg, xhr) {
    articleView.template = Handlebars.compile(data);
    articleView.renderGroup(articles);
  });
};

articleView.renderGroup = function(articles) {
  $('#about').hide();
  $('#spinner').hide();
  $('#articles')
    .empty()
    .fadeIn()
    .append(
      articles.map(function(article){
        return articleView.render(article);
      })
  );//list of articles
};

articleView.show = function(articles) {
  articleView.loadTemplate(articles);
};

articleView.render = function(article) {
  article.daysAgo =
    parseInt((new Date() - new Date(article.publishedOn))/60/60/24/1000);

  article.publishStatus = article.publishedOn ? 'published ' + article.daysAgo + ' days ago' : '(draft)';
  article.authorSlug = util.slug(article.author);
  article.categorySlug = util.slug(article.category);

  return articleView.template(article);
};

//Attempting to render single article by ID
articleView.renderByID = function(article) {
  article.daysAgo =
    parseInt((new Date() - new Date(article.publishedOn))/60/60/24/1000);

  article.publishStatus = article.publishedOn ? 'published ' + article.daysAgo + ' days ago' : '(draft)';

  return articleView.template(article);
};

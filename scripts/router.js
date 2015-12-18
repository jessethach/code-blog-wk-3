page('/', articlesController.index);

page('/about', reposController.index);

page('/category/:category', articlesController.category, articlesController.show);

page('/author/:author', articlesController.author, articlesController.show);

// page('/:id', articlesController.ID, articlesController.show);

page.start();

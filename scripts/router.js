page('/', articlesController.index);

page('/about', reposController.index);

page('/:id', articlesController.loadID);

page.start();

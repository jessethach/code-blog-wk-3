page('/', articlesController.index);

page('/about', aboutController.about);
page('/about', aboutController.about);

page('/:id', articlesController.loadID);

page.start();

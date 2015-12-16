page('/', articlesController.index);

page('/about', aboutController.about);

page('/:id', articlesController.loadID, articlesController.showID);

page.start();

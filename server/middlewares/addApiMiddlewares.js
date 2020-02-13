const dbManager = require('../modules/dbManager');

module.exports = function addApiMiddlewares(app) {
  app.get('/api/now', (req, res) => {
    res.json({ now: Date.now() });
  });

  app.get('/api/test/db', async (req, res) => {
    const userProfile = await dbManager.getUserProfilebyUsername('1@1.com');
    res.json(userProfile);
  });
};

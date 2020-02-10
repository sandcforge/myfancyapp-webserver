module.exports = function addApiMiddlewares(app) {
  app.get('/api/now', (req, res) => {
    res.json({ now: Date.now() });
  });
};

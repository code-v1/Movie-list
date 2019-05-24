const router = require('express').Router();
const apiCtlr =require('../controllers/api/api');

router.get('/movies', apiCtlr.index);
router.get('/movies/:id', apiCtlr.show);
router.post('/movies', apiCtlr.create);
router.put('/movies/:id', apiCtlr.update);
router.delete('/movies/:id', apiCtlr.remove);

module.exports = router;
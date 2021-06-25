const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.journalEntries.index);
router.get('/:id', ctrl.journalEntries.show);
router.post('/', ctrl.journalEntries.create);
router.put('/:id', ctrl.journalEntries.update);
router.delete('/:id', ctrl.journalEntries.destroy);

module.exports = router;
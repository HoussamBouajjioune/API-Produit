const CategorieContr = require("../controllers/categorie");
var router = require("express").Router();

router.get('/all', CategorieContr.getall);
router.get('/:id', CategorieContr.findOne);
router.post('/add', CategorieContr.add);
router.put('/update/:id', CategorieContr.update);
router.delete('/delete/:id', CategorieContr.delete);
module.exports = router;
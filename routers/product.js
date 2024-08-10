const ProductContr = require("../controllers/product");
var router = require("express").Router();

router.get('/all', ProductContr.getall);
router.get('/all/:categorie', ProductContr.getcategorie);
router.get('/:id', ProductContr.findOne);
router.post('/add', ProductContr.add);
router.put('/update/:id', ProductContr.update);
router.delete('/delete/:id', ProductContr.delete);
module.exports = router;
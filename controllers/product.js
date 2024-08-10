const Product = require("../models/product");
const Categorie = require("../models/categorie");

// Associations One-To-Many 
Product.belongsTo(Categorie, {
  foreignKey: "CategorieLibelle"
});

exports.getall = (req, res) => {
    Product.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving product."
      });
    });
  };

  exports.getcategorie = (req, res) => {
    Product.findAll({where:{CategorieLibelle:req.params.categorie}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving product."
      });
    });
  };

exports.add = (req, res) => {

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

//   const product = {
//     libelle: req.body.libelle,
//     description: req.body.description
//     CategorieLibelle:req.body.CategorieLibelle
//   };

  Product.create(req.body)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the product."
    });
  });

}



exports.update = (req, res) => {
    const id = req.params.id;
  
    Product.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Product was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Product with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message:  err.message || "Error updating Product with id=" + id
        });
      });
  };


exports.delete =  (req, res) => {
    const id = req.params.id;
  
    Product.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Product was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Product with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Could not delete Product with id=" + id
        });
      });
  };


exports.findOne = (req, res) => {
  const id = req.params.id;

  Product.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Product with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error retrieving Product with id=" + id
      });
    });
};


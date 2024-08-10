const Categorie = require("../models/categorie");
const Product = require("../models/product");

// Associations One-To-Many
Categorie.hasMany(Product);

exports.getall = (req, res) => {
  Categorie.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categorie."
      });
    });
};

exports.add = (req, res) => {

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  //   const categorie = {
  //     libelle: req.body.libelle,
  //     description: req.body.description
  //   };


  Categorie.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the categorie."
      });
    });

}



exports.update = (req, res) => {
  const idlibelle = req.params.id;
  Categorie.update(req.body, {
    where: { libelle: idlibelle }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Categorie was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Categorie with id=${idlibelle}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error updating Categorie with id=" + idlibelle
      });
    });
};


exports.delete = (req, res) => {
  const idlibelle = req.params.id;

  Categorie.destroy({
    where: { libelle: idlibelle }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Categorie was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Categorie with id=${idlibelle}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message:err.message || "Could not delete Categorie with id=" + idlibelle
      });
    });
};


exports.findOne = (req, res) => {
  const idlibelle = req.params.id;

  Categorie.findByPk(idlibelle)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Categorie with id=${idlibelle}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message ||"Error retrieving Categorie with id=" + idlibelle
      });
    });
};


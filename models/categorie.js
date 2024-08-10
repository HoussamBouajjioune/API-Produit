const { DataTypes, Model } = require('sequelize');
const sequelize = require("../middleware/dbconnection");

class Categorie extends Model { }

Categorie.init(
    {
        libelle: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        description: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize, // We need to pass the connection instance
        modelName: 'Categorie', // We need to choose the model name
    },
);

// the defined model is the class itself
console.log(Categorie === sequelize.models.Categorie); // true

module.exports = Categorie;

const { DataTypes, Model } = require('sequelize');
const sequelize = require("../middleware/dbconnection");

class Product extends Model { }

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        libelle: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.STRING,
        }
    }
    , {
        sequelize, // We need to pass the connection instance
        modelName: 'Product', // We need to choose the model name
    },
);

// the defined model is the class itself
console.log(Product === sequelize.models.Product); // true
module.exports = Product;

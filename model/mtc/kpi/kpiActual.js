const { Sequelize } = require("sequelize");
const db = require("../../../config/database");
const { DataTypes } = Sequelize;
const Users = require("../../userModel")

const KpiActual = db.define(
    "kpi_actual",
    {
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Users,
                key: "id",
            },
        },
        tanggal: {
            type: DataTypes.DATE,
            allowNull: false
        },
        actual: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        point: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bobot:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ip_100: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        ip_0: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        reverse: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        freezeTableName: true,
    }
);

Users.hasMany(KpiActual, {
    foreignKey: "id_user",
}),

KpiActual.belongsTo(Users, {
        foreignKey: "id_user", as: "user"
    });

module.exports = KpiActual;

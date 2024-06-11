const { Sequelize } = require("sequelize");
const db = require("../../config/database");

const prosesMtc = require("./prosesMtc");
const MasterSparepart = require("./../masterData/masterSparepart");

const { DataTypes } = Sequelize;

const RequestServiceSparepart = db.define(
  "spb_service_sparepart",
  {
    id_proses_os2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: prosesMtc,
        key: "id",
      },
    },
    id_master_sparepart: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: MasterSparepart,
        key: "id",
      },
    },
    tgl_spb: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    no_spb: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tgl_permintaan_kedatangan: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    kriteria: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    kode_estimasi: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    incoming_sparepart: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    tgl_po: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    no_po: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    suplier: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    harga_satuan: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    total_harga: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    status_pengajuan: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tgl_aktual: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    note: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);

MasterSparepart.hasMany(RequestServiceSparepart, {
  foreignKey: "id_master_sparepart",
}),
  RequestServiceSparepart.belongsTo(MasterSparepart, {
    foreignKey: "id_master_sparepart",
    as: "master_part",
  });

prosesMtc.hasMany(RequestServiceSparepart, {
  foreignKey: "id_proses_os2",
}),
  RequestServiceSparepart.belongsTo(prosesMtc, {
    foreignKey: "id_proses_os2",
  });

module.exports = RequestServiceSparepart;

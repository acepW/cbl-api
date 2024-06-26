const masterMesin = require("../../model/masterData/masterMesinModel");
const masterSparepart = require("../../model/masterData/masterSparepart");

const masterMesinController = {
  getMasterMesin: async (req, res) => {
    // const {}
    const {
      serial_number,
      nama_mesin,
      bagian_mesin,
      lokasi_mesin,
      kode_mesin,page,limit
    } = req.query;

    let obj = {};
    let offset = (page-1)*limit

    if (serial_number) obj.serial_number = serial_number;
    if (nama_mesin) obj.nama_mesin = nama_mesin;
    if (bagian_mesin) obj.bagian_mesin = bagian_mesin;
    if (lokasi_mesin) obj.lokasi_mesin = lokasi_mesin;
    if (kode_mesin) obj.kode_mesin = kode_mesin;

    try {
      if(page&limit){
        const length_data = await masterMesin.count({where:obj})
        const response = await masterMesin.findAll({where:obj,limit:parseInt(limit),offset:parseInt(offset)});
        res.status(200).json({data:response,total_page:Math.ceil(length_data/limit)});
      }else{
        const response = await masterMesin.findAll({where:obj});
        res.status(200).json(response);
      }
     
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
  getMasterMesinById: async (req, res) => {
    try {
      const response = await masterMesin.findByPk(req.params.id, {
        include: [
          {
            model: masterSparepart,
          },
        ],
      });
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },

  createMasterMesin: async (req, res) => {
    const {
      serial_number,
      nama_mesin,
      bagian_mesin,
      lokasi_mesin,
      kode_mesin,
    } = req.body;
    if (
      !serial_number ||
      !nama_mesin ||
      !bagian_mesin ||
      !lokasi_mesin ||
      !kode_mesin
    )
      return res.status(404).json({ msg: "incomplete data!!" });

    try {
      const response = await masterMesin.create({
        serial_number,
        nama_mesin,
        bagian_mesin,
        lokasi_mesin,
        kode_mesin,
      });
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },

  updateMasterMesin: async (req, res) => {
    const _id = req.params.id;
    const {
      serial_number,
      nama_mesin,
      bagian_mesin,
      lokasi_mesin,
      kode_mesin,
    } = req.body;

    let obj = {};
    if (serial_number) obj.serial_number = serial_number;
    if (nama_mesin) obj.nama_mesin = nama_mesin;
    if (bagian_mesin) obj.bagian_mesin = bagian_mesin;
    if (lokasi_mesin) obj.lokasi_mesin = lokasi_mesin;
    if (kode_mesin) obj.kode_mesin = kode_mesin;

    try {
      await masterMesin.update(obj, { where: { id: _id } }),
        res.status(201).json({ msg: "Machine update Successfuly" });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  },

  deleteMasterMachine: async (req, res) => {
    const _id = req.params.id;
    try {
      await masterMesin.destroy({ where: { id: _id } }),
        res.status(201).json({ msg: "Machine delete Successfuly" });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  },
};

module.exports = masterMesinController;

const { Sequelize } = require("sequelize");
const MasalahSparepart = require("../../model/mtc/sparepartProblem");

const MasalahSparepartController = {
  getMasalahSparepart: async (req, res) => {
    try {
      const response = await MasalahSparepart.findAll();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },

  getMasalahSparepartById: async (req, res) => {
    try {
      const response = await MasalahSparepart.findByPk(req.params.id);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },

  getMasalahSparepartByTicket: async (req, res) => {
    try {
      const response = await MasalahSparepart.findAll({where:{id_tiket:req.params.id}});
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },

  createMasalahSparepart: async (masalah_sparepart) => {
    
    
    
      

    try {
      const response = await MasalahSparepart.bulkCreate(masalah_sparepart);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },

//   updateStokSparepart: async (req, res) => {
//     const _id = req.params.id;
//     const {
//       kode,
//       nama_sparepart,
//       nama_mesin,
//       jenis_part,
//       persen,
//       kebutuhan_bulanan,
//       stok,
//       keterangan,
//       umur_sparepart,
//       vendor,
//     } = req.body;

//     let obj = {};
//     if (kode) obj.kode = kode;
//     if (nama_sparepart) obj.nama_sparepart = nama_sparepart;
//     if (nama_mesin) obj.nama_mesin = nama_mesin;
//     if (umur_sparepart) obj.umur_sparepart = umur_sparepart;
//     if (jenis_part) obj.jenis_part = jenis_part;
//     if (persen) obj.persen = persen;
//     if (kebutuhan_bulanan) obj.kebutuhan_bulanan = kebutuhan_bulanan;
//     if (stok) obj.stok = stok;
//     if (keterangan) obj.keterangan = keterangan;
//     if (vendor) obj.vendor = vendor;

//     try {
//       await StokSparepart.update(obj, { where: { id: _id } }),
//         res.status(201).json({ msg: "Sparepart update Successfuly" });
//     } catch (error) {
//       res.status(400).json({ msg: error.message });
//     }
//   },

//   deleteStokSparepart: async (req, res) => {
//     const _id = req.params.id;
//     try {
//       await StokSparepart.destroy({ where: { id: _id } }),
//         res.status(201).json({ msg: "Sparepart delete Successfuly" });
//     } catch (error) {
//       res.status(400).json({ msg: error.message });
//     }
//   },

//   addStokSparepart: async (req, res) => {
//     const _id = req.params.id;
//     const { new_stok } = req.body;

//     if (!new_stok) return res.status(404).json({ msg: "stok required" });

//     try {
//       const sparepart = await StokSparepart.findByPk(_id);
//       const stok_sparepart = sparepart.stok + new_stok;
//       console.log(stok_sparepart);

//       await StokSparepart.update(
//         { stok: stok_sparepart },
//         { where: { id: _id } }
//       ),
//         res.status(201).json({ msg: "Sparepart update Successfuly" });
//     } catch (error) {
//       res.status(400).json({ msg: error.message });
//     }
//   },
};

module.exports = MasalahSparepartController;
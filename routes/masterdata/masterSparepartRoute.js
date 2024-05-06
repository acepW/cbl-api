const router = require("express").Router();
const {getMasterSparepart, getMasterSparepartById, createMasterSparepart, updateMasterSparepart, deleteMasterSparepart} = require("../../controller/masterData/masterSparepartController")
const { Auth } = require("../../middlewares/authMiddlewares");

router.get("/master/sparepart", getMasterSparepart);
router.get("/master/sparepart/:id", getMasterSparepartById);
router.post("/master/sparepart",Auth, createMasterSparepart);
router.put("/master/sparepart/:id",Auth, updateMasterSparepart);
router.delete("/master/sparepart/:id", Auth, deleteMasterSparepart )


module.exports = router;
const router = require("express").Router();
const {
  getProsesMtcByTicket,
  getProsesMtcById,
  responseMtc,
  analisisMtc,
  pendingProses,
  requestedDate,
  approveDate,
  tolakDate,
  approveTiket,
  tolakTiket,
  reworkMtc,
} = require("../../controller/mtc/prosesMtc");
const { auth } = require("../../middlewares/authMiddlewares");

router.get("/prosessMtcById/:id", getProsesMtcById);
router.get("/prosessMtcByIdTicket/:id", getProsesMtcByTicket);
router.get("/ticket/respon/:id", auth, responseMtc);
router.put("/ticket/analisis/:id", auth, analisisMtc);
router.put("/ticket/pending/:id", auth, pendingProses);
//router.put("/ticket/selectMtc/:id", auth, selectMtc);
router.put("/ticket/requestedDate/:id", auth, requestedDate);
router.put("/ticket/approveDate/:id", auth, approveDate);
router.put("/ticket/tolakDate/:id", auth, tolakDate);
router.put("/ticket/approve/:id", auth, approveTiket);
router.put("/ticket/tolak/:id", auth, tolakTiket);
router.put("/ticket/rework/:id", auth, reworkMtc);

module.exports = router;

const exporess = require("express");
const router = exporess.Router();
const incomeController = require('../controllers/incomeController');
// router.get("/getIncome", (req, resp) => {
//     try {
//         const getIncomes = pool.query("select * from income");
//         resp.json(getIncomes);
//     } catch (error) {
//         console.error(error);
//     }
// })

router.post("/addIncome", incomeController.addIncome);

router.get('/getIncome', incomeController.getIncome);

router.delete('/deleteIncome/:id', incomeController.deleteIncome);

module.exports = router;
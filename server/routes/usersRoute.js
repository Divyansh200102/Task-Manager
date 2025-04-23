const router = require("express").Router();

const userController=require('../controllers/userController')

//Login page
router.post("/login", userController.login);

//Register page
router.post("/register",userController.register);

router.get("/register",userController.getAllUsers);
router.delete("/register",userController.deleteUsers);



router.get("/user-profile", userController.getUserProfile);

module.exports = router;

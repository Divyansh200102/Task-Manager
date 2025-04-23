const router = require("express").Router();

const rbacMiddleware=require('../middleware/rbacMiddleware')

const teamController=require('../controllers/teamController')

router.post("/team",rbacMiddleware.checkPermission('create_team') ,teamController.createTeam);
router.delete("/team",rbacMiddleware.checkPermission('delete_team'),teamController.deleteTeams);
router.get("/team",rbacMiddleware.checkPermission('getAllTeams'),teamController.getAllTeams);
router.put("/team/:id",rbacMiddleware.checkPermission('update_team'),teamController.updateTeam);



module.exports = router;
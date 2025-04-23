const router = require("express").Router();

const rbacMiddleware = require("../middleware/rbacMiddleware");

const taskController = require("../controllers/taskController");
router.get(
  "/tasks",
  rbacMiddleware.checkPermission("view_team_tasks"),
  taskController.getAllTasks,
);
router.post(
  "/tasks",
  rbacMiddleware.checkPermission("create_task"),
  taskController.createTask,
);
router.get(
  "/task/:id",
  rbacMiddleware.checkPermission("view_team_tasks"),
  taskController.getTask,
);

router.put(
  "/task/:id",
  rbacMiddleware.checkPermission("update_task"),
  taskController.updateTasks,
);

router.delete(
  "/task/:id",
  rbacMiddleware.checkPermission("delete_task"),
  taskController.deleteTasks,
);

module.exports = router;

const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

// POST /api/users
router.post("/", usersCtrl.create);
// POST /api/users/login
router.post("/login", usersCtrl.login);
// POST /api/users/newBlog
router.post("/newBlog", usersCtrl.createBlog);
// GET /api/users/blogs
router.get("/blogs", usersCtrl.findBlogs);
// PUT /api/users/blogs/:id
router.put("/blogs/:id", usersCtrl.editBlog);
// DELETE /api/users/blogs/delete/:id
router.get("/blogs/delete/:id", usersCtrl.deleteBlog);
// GET /api/users/check-token
router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;

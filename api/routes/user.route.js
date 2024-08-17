import express from "express";
import { test, userUpdate, deleteUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyToken.js";
import { getUserListing , getUser} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", test);
router.post("/update/:id", verifyToken, userUpdate);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/listings/:id",verifyToken,getUserListing);
router.get("/:id",verifyToken,getUser)

export default router;

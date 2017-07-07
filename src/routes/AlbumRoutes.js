import express from "express";
const router = express.Router();
import {list, show, create, remove, update} from "../controllers/AlbumController";

router.get("/albums", list);

router.get("/albums/:id", show);

router.post("/albums", create);

router.delete("/albums/:id", remove);

router.put("/albums/:id", update);

export default router;

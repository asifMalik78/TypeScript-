import { Router } from "express";
const router = Router();
router.get("/", (req, res) => {
    res.send("list of reminders");
});
router.post("/", (req, res) => {
    const { title } = req.body;
    const reminder = { id: Date.now(), title, isComplete: false };
    res.status(200).json({ reminder });
});
export default router;

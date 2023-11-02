import express from "express";
import reminderRoute from "./routes/reminders";
const app = express();
app.use(express.json());
app.use("/reminders", reminderRoute);
app.get("/", (req, res) => {
    res.send("Hellow World");
});
app.listen(5000, () => console.log("Server is Running"));

import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import contactRoutes from "./routes/contact.routes";

dotenv.config();

const app = express();
const port = Number(process.env.PORT ?? 5000);

app.use(cors({ origin: process.env.FRONTEND_URL ?? "http://localhost:3000" }));
app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({ ok: true });
});

app.use("/api/contact", contactRoutes);

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});

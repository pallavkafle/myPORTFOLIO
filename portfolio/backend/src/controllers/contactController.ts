import type { Request, Response } from "express";

export async function contactController(_req: Request, res: Response) {
  return res.status(200).json({ message: "Contact endpoint ready." });
}

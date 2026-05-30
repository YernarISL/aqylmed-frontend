import axios from "axios";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const API_BASE = process.env.API_BASE_URL;
  const apiKey = process.env.AI_AGENT_API_KEY;
  const response = await axios.post(`${API_BASE}/api/v1/agent`, req.body, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return res.status(200).json(response.data);
}

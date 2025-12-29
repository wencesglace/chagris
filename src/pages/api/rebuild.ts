import type { NextApiRequest, NextApiResponse } from "next";
import { exec } from "child_process";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST" && req.headers.authorization === `Bearer ${process.env.REBUILD_SECRET}`) {
    exec("npm run build && npm run export", (error, stdout, stderr) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: "Build failed" });
      }
      console.log(stdout);
      console.error(stderr);
      res.status(200).json({ message: "Build triggered" });
    });
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
}

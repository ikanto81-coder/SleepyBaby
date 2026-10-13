import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Readable } from "stream";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Audio proxy endpoint to bypass CORS and stream Google Drive sounds safely
  app.get("/api/proxy-audio", async (req, res) => {
    const id = req.query.id as string;
    if (!id) {
      return res.status(400).send("Missing Google Drive file id");
    }

    const driveUrl = `https://drive.google.com/uc?export=download&id=${id}`;

    try {
      const response = await fetch(driveUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
      });

      if (!response.ok) {
        console.error(`Google Drive fetch failed for id ${id} with status ${response.status}`);
        return res.status(response.status).send(`Failed to fetch from Google Drive: ${response.statusText}`);
      }

      // Forward some important headers
      const contentType = response.headers.get("content-type") || "audio/mpeg";
      const contentLength = response.headers.get("content-length");

      res.setHeader("Content-Type", contentType);
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Cache-Control", "public, max-age=86400"); // Cache for 1 day
      if (contentLength) {
        res.setHeader("Content-Length", contentLength);
      }

      if (response.body) {
        // Convert Web ReadableStream to Node.js Readable stream and pipe it
        const nodeStream = Readable.fromWeb(response.body as any);
        nodeStream.pipe(res);
      } else {
        res.status(500).send("Google Drive response body is empty");
      }
    } catch (err) {
      console.error(`Error proxying Google Drive sound ${id}:`, err);
      res.status(500).send("Internal server error proxying audio");
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

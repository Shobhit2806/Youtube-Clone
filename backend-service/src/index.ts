import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/google-suggest", async (req, res) => {
  try {
    const q: any = req.query.q;
    // @ts-ignore
    const apiUrl = `http://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q=${encodeURIComponent(
      q
    )}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

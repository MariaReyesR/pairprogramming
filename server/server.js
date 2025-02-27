import express from "express";
import cors from "cors";
import "dotenv/config";
const app = express();
const PORT = process.env.PORT || 5000;
import axios from "axios";

//app.use(cors({ origin: 'http://localhost:5174', }));

// const cors = require('cors');
app.use(cors()); // Allow all origins

// const express = require("express");
// const axios = require("axios");
// import "dotenv/config";

app.get("/api/search", async (req, res) => {
  try {
    const genre = req.query.q;
    const deezerApiUrl = `https://api.deezer.com/search?q=genre:"${genre}"`;
    const response = await axios.get(deezerApiUrl);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching from Deezer:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

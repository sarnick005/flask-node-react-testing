const express = require("express");
const axios = require("axios");
const cors = require("cors"); 
const app = express();
const port = 8080; 

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.post("/api/calculate", async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/calculate",
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res
      .status(error.response ? error.response.status : 500)
      .json(
        error.response ? error.response.data : { error: "An error occurred" }
      );
  }
});

// translate

app.post("/api/translate", async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/translate",
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res
      .status(error.response ? error.response.status : 500)
      .json(
        error.response ? error.response.data : { error: "An error occurred" }
      );
  }
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

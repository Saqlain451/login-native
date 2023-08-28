import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "app is runnig fine at home page" });
});

app.listen(4000, () => {
  console.log("app is runnig at port 4000");
});

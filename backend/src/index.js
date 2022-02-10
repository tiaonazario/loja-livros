import express from "express";
import router from "./routes.js";
import fs from "fs";
import https from "https";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

app.listen(5000, () =>
  console.log("API Rodando (porta: http://localhost:5000/).")
);

https
  .createServer(
    {
      cert: fs.readFileSync("src/SSL/code.crt"),
      key: fs.readFileSync("src/SSL/code.key"),
    },
    app
  )
  .listen(5001, () =>
    console.log("API Rodando (porta: http://localhost:5001/).")
  );

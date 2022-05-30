import "@shared/typeorm";
import "reflect-metadata";
import express from "express";
import cors from "cors";
import routes from "./routes";
import errorMiddleware from "@shared/errors/middleware";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//? If not working, get the code inside errorMiddleware
app.use(errorMiddleware);

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log("Server started on port 3333");
});

import "reflect-metadata";
import express, { NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
//
import routes from "./routes";
import "../users/infra/typeorm";
import AppError from "./errors/AppError";
//
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err: Error, req: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }
  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(3333, () => {
  console.log("Server listen on port 3333");
});

export default app;

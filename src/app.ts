import "reflect-metadata";
import express, { json } from "express";
import "express-async-errors";
import { PrismaClient } from "@prisma/client";
import usersRoutes from "./routers/users.routes";
import loginRoute from "./routers/login.route";
import "dotenv/config";
import adsRoutes from "./routers/ads.route";
import addressRoutes from "./routers/address.route";

export const prisma: PrismaClient = new PrismaClient();

const app = express();
app.use(json());

app.use("/users", usersRoutes);
app.use("/login", loginRoute);
app.use("/ads", adsRoutes);
app.use("/address", addressRoutes);

// app.use(errorHandler);

export default app;

import "reflect-metadata";
import express, { json } from "express";
import { PrismaClient } from "@prisma/client";
import usersRoutes from "./routers/users.routes";

export const prisma: PrismaClient = new PrismaClient();
const app = express();
app.use(json());

app.use("/users", usersRoutes);

export default app;

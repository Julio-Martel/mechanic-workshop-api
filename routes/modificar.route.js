import { Router } from "express";
import express from 'express';
import { modificarController } from "../controllers/modificar.controller.js";

const modificacionRoute = express.Router();

modificacionRoute.patch('/:id', modificarController);

export default modificacionRoute;

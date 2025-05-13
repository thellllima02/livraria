import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autorRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.JS 5"));

  app.use(express.json(), livros, autores);
};

export default routes;

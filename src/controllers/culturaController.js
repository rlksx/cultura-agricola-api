const Cultura = require("../models/culturaModel");

module.exports = {
  async all(request, response) {
    try {
      const culturas = await Cultura.findAll();
      response.status(200).json(culturas);
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
  async create(request, response) {
    try {
      await Cultura.create(request.body);
      response.status(200).json("Cultura created!!");
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
  async one(request, response) {
    try {
      const { codigo } = request.params;
      const foundCultura = await Cultura.findOne({ where: { codigo } });
      if (!foundCultura) {
        return response.status(400).json("Cultura not found");
      }
      response.status(200).json(foundCultura);
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
  async update(request, response) {
    try {
      const { cultura, safra } = request.body;
      const { codigo } = request.params;
      const foundCultura = await Cultura.findOne({ where: { codigo } });

      if (!foundCultura) {
        return response.status(400).json("Cultura not found");
      }
      foundCultura.cultura = cultura;
      foundCultura.safra = safra;

      await foundCultura.save();
      response.status(200).json("Cultura updated!!");
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
  async delete(request,response){
    try {
      const { codigo } = request.params;
      const foundCultura = await Cultura.findOne({ where: { codigo } });
      if (!foundCultura) {
        return response.status(400).json("Cultura not found");
      }
      response.status(200).json("Cultura removed!!");
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  }
};

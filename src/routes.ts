import {response, Router} from "express";
import { getCustomRepository } from "typeorm";
import {SettingsRepository} from "./repositories/SettingsRepository"

const routes = Router();
/*
  route Params => parametro de rota
  query params => filto busca
  body params => 

*/


routes.post("/settings", async (request,response) =>{
  const {chat, username} = request.body;

  const  settingsRepository = getCustomRepository(SettingsRepository);

  const settings = settingsRepository.create({
    chat,
    username 
  })

  await settingsRepository.save(settings);
  return response.json(settings);
})

export {routes};
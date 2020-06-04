import { Request, Response } from 'express';
import Pokedex from '../../helpers/pokedex';

const router = require('express').Router();

router.get(
  '/',
  async (req: Request, res: Response): Promise<void> => {
    const pokemon = await Pokedex.getPokemonsList();
    res.status(200).json(pokemon);
  }
);

router.get(
  '/:id',
  async (req: Request, res: Response): Promise<void> => {
    const pokemon = await Pokedex.getPokemonByName(req.params.id);
    res.status(200).json(pokemon);
  }
);

export default router;

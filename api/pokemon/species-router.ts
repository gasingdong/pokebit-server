import { Request, Response } from 'express';
import Pokedex from '../../helpers/pokedex';

const router = require('express').Router();

router.get(
  '/:id',
  async (req: Request, res: Response): Promise<void> => {
    const species = await Pokedex.getPokemonSpeciesByName(req.params.id);
    res.status(200).json(species);
  }
);

export default router;

import { Request, Response } from 'express';
import Pokedex from '../../helpers/pokedex';

const router = require('express').Router();

router.get(
  '/',
  async (req: Request, res: Response): Promise<void> => {
    const pokemon = await Pokedex.getPokemonsList();
    let limit = 20;
    let offset = 0;

    if (req.query.limit) {
      limit = parseInt(req.query.limit.toString(), 10);
    }

    if (req.query.offset) {
      offset = parseInt(req.query.offset.toString(), 10);
    }
    res.status(200).json(pokemon.results.slice(offset, limit + offset));
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

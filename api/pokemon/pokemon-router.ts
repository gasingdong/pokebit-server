import { Request, Response } from 'express';
import Fuse from 'fuse.js';
import Pokedex from '../../helpers/pokedex';

const router = require('express').Router();

router.get(
  '/',
  async (req: Request, res: Response): Promise<void> => {
    const pokemon = await Pokedex.getPokemonsList();
    let limit = 20;
    let offset = 0;
    let search = '';

    if (req.query.search) {
      search = req.query.search.toString();
    }

    if (req.query.limit) {
      limit = parseInt(req.query.limit.toString(), 10);
    }

    if (req.query.offset) {
      offset = parseInt(req.query.offset.toString(), 10);
    }

    let { results } = pokemon;

    if (search) {
      const options = {
        threshold: 0.3,
        keys: ['name'],
      };
      const fuse = new Fuse(results, options);
      results = fuse.search(search).map((result) => result.item);
    }

    res.status(200).json({
      list: results.slice(offset, limit + offset),
      next: limit + offset < results.length,
    });
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

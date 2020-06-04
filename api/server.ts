import express from 'express';
import cors from 'cors';
import PokemonRouter from './pokemon/pokemon-router';
import SpeciesRouter from './pokemon/species-router';

const server = express();

server.use(cors());
server.use(express.json());

server.use('/api/pokemon', PokemonRouter);
server.use('/api/species', SpeciesRouter);

export default server;

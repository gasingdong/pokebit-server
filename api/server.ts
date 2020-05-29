import express from 'express';
import cors from 'cors';
import PokemonRouter from './pokemon/pokemon-router';

const server = express();

server.use(cors());
server.use(express.json());

server.use('/api/pokemon', PokemonRouter);

export default server;

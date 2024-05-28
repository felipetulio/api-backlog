import express from "express";
import filmeController from "../controllers/filmeController.js";

const router = express.Router();
const novoFilme = new filmeController();

router.get('/', (req, res) => {
    try {
        novoFilme.BuscarTodosOsFilmes(req, res);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
});

router.get('/:id', (req, res) => {
    try {
        novoFilme.BuscarFilmePorId(req, res);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
});

router.post('/', (req, res) => {
    try {
        novoFilme.CadastrarFilme(req, res);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
});

router.put('/:id', (req, res) => {
    try {
        novoFilme.AtualizarFilme(req, res);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:id', (req, res) => {
    try {
        novoFilme.ExcluirFilme(req, res);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
});

export default router;
 

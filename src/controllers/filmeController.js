import filmeModel from "../models/filmeModel.js";

export default class Filmes {

  async BuscarTodosOsFilmes (req, res) {
    try {
      const filmes = await filmeModel.findAll();
      res.json(filmes);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async BuscarFilmePorId (req, res) {
    try {
      const filmeEncontrado = await filmeModel.findByPk(req.params.id);
      if (filmeEncontrado) {
        res.json(filmeEncontrado);
      } else {
        res.status(404).json({ error: 'Filme não encontrado' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  async CadastrarFilme (req, res) {
    try {
      const filmeCadastrado = await filmeModel.create(req.body);
      res.json({ message: 'Filme criado com sucesso!', filmeCadastrado });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  async AtualizarFilme (req, res) {
    try {
      const [atualizado] = await filmeModel.update(req.body, {
        where: { id: req.params.id }
      });
      if (atualizado) {
        const filmeAtualizado = await filmeModel.findByPk(req.params.id);
        res.json({ message: 'Filme atualizado com sucesso!', filme: filmeAtualizado });
      } else {
        res.status(404).json({ error: 'Filme não encontrado' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  async ExcluirFilme (req, res) {
    try {
      const excluido = await filmeModel.destroy({
        where: { id: req.params.id }
      });
      if (excluido) {
        res.json({ message: 'Filme excluído com sucesso!' });
      } else {
        res.status(404).json({ error: 'Filme não encontrado' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

}
import Paquete from '../models/Paquete';

export const getPaquetes = async (req, res) => {
  const paquetes = await Paquete.find();
  res.status(200).send(paquetes);
};

export const getPaqueteById = async (req, res) => {
  const { id } = req.params;
  try {
    const paqueteFound = await Paquete.findById(id);
    res.status(200).json(paqueteFound);
  } catch (err) {
    res.status(400).json({ err });
  }
};

export const createPaquete = async (req, res) => {
  try {
    const newPaquete = await new Paquete({
      ...req.body,
    });
    const savePaquete = await newPaquete.save();

    res.status(200).send({ savePaquete });
  } catch (err) {
    res.status(400).send({ err });
  }
};

export const deletePaqueteById = async (req, res) => {
  const { id } = req.params;
  try {
    const paqueteDeleted = await Paquete.findByIdAndDelete(id);
    res.status(200).send({
      mensaje: 'Paquete eliminado',
      paquete: paqueteDeleted,
    });
  } catch (err) {
    res.status(400).send({ err });
  }
};

export const updatePaqueteById = async (req, res) => {
  const { id } = req.params;
  try {
    const paqueteUpdated = await Paquete.findByIdAndUpdate(id, {
      ...req.body,
    });
    res.status(200).json({ mensaje: 'Paquete actualizado', paqueteUpdated });
  } catch (err) {
    res.status(400).json({ err });
  }
};

import { Schema, model } from 'mongoose';

const paqueteSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  peso: {
    type: String,
    required: true,
  },
  cantidad: {
    type: Number,
    required: true,
  },
  costoEnvio: {
    type: Number,
    required: true,
  },
  remitente: {
    type: String,
    required: true,
  },
  destinatario: {
    type: String,
    required: true,
  },
  fechaLlegada: {
    type: Date,
    required: true,
  },
  fechaEntrega: {
    type: Date,
    required: true,
  },
});

export default model('Paquetes', paqueteSchema);

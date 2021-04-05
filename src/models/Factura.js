import { model, Schema } from 'mongoose';
import Paquete from './Paquete';
const facturaSchema = new Schema({
  destinatarioNombre: {
    type: String,
    required: true,
  },
  destinatarioDireccion: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  paquetes: [Paquete],
  cancelada: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export default model('Factura', facturaSchema);

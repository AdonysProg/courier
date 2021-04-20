import express from 'express';
import pkg from '../package.json';
import cors from 'cors';
import morgan from 'morgan';
import paquetesRoutes from './routes/paquete.routes';
import remitenteRoutes from './routes/remitente.routes';
import facturaRoutes from './routes/factura.routes';
import destinatarioRoutes from './routes/destinatario.routes';
import { config } from 'dotenv';

config();
const app = express();

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3001',
    exposedHeaders: 'x-access-token',
  })
);

// app.use(cookieParser(process.env.JWT_SECRET_KEY)); Login coming soon

// app.use(
//   session({
//     secret: process.env.JWT_SECRET_KEY,
//     resave: false,
//     saveUninitialized: false,
//   })
// );

app.use(express.json());

app.use(morgan('dev'));

app.use('/api/paquetes', paquetesRoutes);
app.use('/api/remitente', remitenteRoutes);
app.use('/api/factura', facturaRoutes);
app.use('/api/destinatario', destinatarioRoutes);
export default app;

import mongoose from 'mongoose';
import 'dotenv/config';

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@main.ir5pn.mongodb.net/courier?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true,
    }
  )
  .then((res) =>
    console.log(`Connected to Database ${res.connections[0].name}`)
  )
  .catch(console.error);

const express = require("express");
const mongoose = require("mongoose");
const congig = require("config");
const authRouter = require("./routes/auth.routes");
const corsMiddleware = require('./middleware/cors.middleware');

const app = express();
const PORT = congig.get("serverPort");

app.use(corsMiddleware)
app.use(express.json())
app.use('/api/auth', authRouter );

const start = async () => {
  try {

    await mongoose.connect(congig.get("DATABASE_URL"), {
      useNewUrlParser: true,
    })
      .then(() => console.log('Connected to DB'));

    app.listen(PORT, () => {
      console.log('Server started on port ', PORT)
    })
  } catch (e) {

  }
}

start()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Permite recibir JSON en las peticiones

// Conectar a MongoDB Atlas
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.6dlp0t5.mongodb.net/chartDB?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch((err) => console.error("Error al conectar a MongoDB:", err));

// Definir el esquema y modelo
const reactivoSchema = new mongoose.Schema({
  nombre: String,
  cantidad: Number,
});

const Reactivo = mongoose.model("Reactivo", reactivoSchema);

// Ruta para obtener los reactivos
app.get("/api/reactivos", async (req, res) => {
  try {
    const reactivos = await Reactivo.find();
    res.json(reactivos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los reactivos" });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

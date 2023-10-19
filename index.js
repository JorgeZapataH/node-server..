const express = require('express');
const app = express();
const PORT = 3000;

// Lista de tareas como objetos
const tareas = [
  { id: 1, descripcion: 'Hacer la compra', completado: false },
  { id: 2, descripcion: 'Lavar el coche', completado: true },
  { id: 3, descripcion: 'Estudiar para el examen', completado: false }
];

// Ruta para obtener la lista de tareas en formato JSON
app.get('/tareas', (req, res) => {
  res.json(tareas);
});

app.listen(PORT, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${PORT}`);
});
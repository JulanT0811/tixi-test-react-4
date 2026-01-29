import { useMemo, useState } from "react";
import { Paper, TextField, Typography } from "@mui/material";

export default function SumPage() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const result = useMemo(() => a + b, [a, b]);

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
        Registrar Nuevo Producto (local)
      </Typography>

      <TextField
        label="Nombre:"
        type="text"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
        sx={{ mr: 2, mb: 2 }}
      />
      <Typography variant="h5" fontWeight={900} gutterBottom>
      </Typography>

      <TextField
        label="Precio:"
        type="number"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
        sx={{ mb: 2 }}
      />
      <Typography variant="h5" fontWeight={900} gutterBottom>
        
      </Typography>
      <TextField
        label="Stock:"
        type="number"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
        sx={{ mb: 2 }}
      />

      <Typography sx={{ mt: 1 }}>
        Guardar Producto <strong>{result}</strong>
      </Typography>
      <h8>Nota: este formulario agrega productos a una lista local (solo para practicar). El listado principal viene de la API.</h8>
      <Typography sx={{ mt: 2 }}>
         © 2025 - Sistema de Productos - Taller Académico
      </Typography>
    </Paper>
  );
}
import { useMemo, useState } from "react";
import { Paper, TextField, Typography } from "@mui/material";

export default function MultiplyPage() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const result = useMemo(() => a * b, [a, b]);

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
        Cálculos de Inventario
        <h3>1. Valor Total de un Producto</h3>
        <h4>Precio Unitario:</h4>
      </Typography>

      <TextField
        label="Precio Unitario:"
        type="number"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
        sx={{ mr: 2, mb: 2 }}
      />

      <TextField
        label="Cantidad en Stock:"
        type="number"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
        sx={{ mb: 2 }}
      />

      <Typography sx={{ mt: 1 }}>
        Resultado: <strong>{result}</strong>
      </Typography>

      <Typography variant="h5" fontWeight={900} gutterBottom>
        2. Calcular IVA (12%)
      </Typography>

      <TextField
        label="Precio del Producto:"
        type="number"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
        sx={{ mr: 2, mb: 2 }}
      />

      <Typography sx={{ mt: 1 }}>
        calcular IVA <strong>{result}</strong>
      </Typography>


      <Typography variant="h5" fontWeight={900} gutterBottom> 
        <h3>3. Calcular Precio con Descuento</h3>
      </Typography>

      <TextField
        label="Precio Original:"
        type="number"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
        sx={{ mr: 2, mb: 2 }}
      />

      <TextField
        label="Porcentaje de Descuento:"
        type="number"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
        sx={{ mb: 2 }}
      />

      <Typography sx={{ mt: 1 }}>
        Cálculo final: <strong>{result}</strong>
      </Typography>









    </Paper>
  );
}
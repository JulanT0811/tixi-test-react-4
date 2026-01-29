import { Paper, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h4" fontWeight={900} gutterBottom>
        Bienvenido a la Gestión de Inventario
      </Typography>

      <Typography color="text.secondary">
        Consulta, registra y realiza cálculos sobre los productos del inventario.
      </Typography>
      <center>
        <img src="https://fastly.picsum.photos/id/1084/800/300.jpg?hmac=JZ3VyJmOlV233WqeyKH4knIDjJ7C2dzS3HiG_fYwOk8" alt="" />
      </center>
      <Typography sx={{p: 3, borderRadius: 3 }}>
        Listado de Productos
        Ahora se llena dinámicamente con personajes de Dragon Ball (con fotos).
      </Typography>
       <Typography sx={{p: 3, borderRadius: 3 }}>
        Registrar Producto
        Agrega nuevos productos (locales) al arreglo.
      </Typography>
       <Typography sx={{p: 3, borderRadius: 3 }}>
        Cálculos de Inventario
        Calcula valores comerciales básicos.
      </Typography>
      <Typography sx={{p: 3, borderRadius: 3 }}>
        © 2025 - Sistema de Productos - Taller Académico
      </Typography>
    </Paper>
    

  );
}





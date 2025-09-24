import { Box, Typography } from "@mui/material";

export default function ListarCategorias() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Página de Listagem de Categorias
      </Typography>
      <Typography>Aqui será a lista de todas as categoias</Typography>
    </Box>
  );
}

import { Box, Typography } from "@mui/material";

export default function ListarPordutos() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Página de Listagem de Produtos
      </Typography>
      <Typography>Aqui será a lista de todas os produtos</Typography>
    </Box>
  );
}
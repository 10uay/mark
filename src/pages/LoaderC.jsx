import { Box, LinearProgress } from "@mui/material";

const LoaderC = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100%",
    }}
  >
    <Box sx={{ width: "40%" }}>
      <h1 style={{ textAlign: "center" }}>Loading...</h1>
      <LinearProgress
        sx={{ "& .MuiLinearProgress-bar": { backgroundColor: "#FFCD05" } }}
      />
    </Box>
  </Box>
);

export default LoaderC;

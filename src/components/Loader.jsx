import { Html, useProgress } from "@react-three/drei";
import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress size={80} variant="determinate" value={progress} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="body2"
            component="div"
            color="text.secondary"
          >{`${Math.round(progress)}%`}</Typography>
        </Box>
      </Box>
    </Html>
  );
};

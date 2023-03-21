import { Html, useProgress } from "@react-three/drei";
import { Box, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

export const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: 320 }}>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            progress
          )}%`}</Typography>
        </Box>
      </Box>
    </Html>
  );
};

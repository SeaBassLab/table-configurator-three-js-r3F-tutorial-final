import { Box, FormControlLabel, Typography } from "@mui/material";
import { useConfigurator } from "../contexts/Configurator";
export const Interface = () => {
  const { MODEL } = useConfigurator();
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
      }}
      p={3}
    >
      <Box className="glass" p={3}>
        {Object.entries(MODEL).map(([key, model]) => {
          return (
            <Box key={key}>
              <FormControlLabel
                value={key}
                control={
                  <img
                    src={model.imgURL}
                    width={90}
                    height={90}
                    onClick={() => model.setVisibility(!model.visibility)}
                  />
                }
              />
              <Typography>{model.name}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

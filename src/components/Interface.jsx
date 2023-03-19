import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { useConfigurator } from "../contexts/Configurator";
export const Interface = () => {
  const { model, setModel, legs, setLegs, legsColor, setLegsColor } =
    useConfigurator();

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
      }}
      p={3}
    >
      <Stack spacing={3}>
        <Typography variant="caption">Table Configurator</Typography>
        <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Select model</FormLabel>
            <RadioGroup
              value={model}
              onChange={(e) => {
                setModel(parseInt(e.target.value));
                setLegs(0);
              }}
            >
              <FormControlLabel value={0} control={<Radio />} label="Table" />
              <FormControlLabel value={1} control={<Radio />} label="Chair" />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Legs Layout</FormLabel>
            <RadioGroup
              value={legs}
              onChange={(e) => setLegs(parseInt(e.target.value))}
            >
              <FormControlLabel
                value={0}
                control={<Radio />}
                label="Standard"
              />
              <FormControlLabel value={1} control={<Radio />} label="Solid" />
              {model ? null : (
                <FormControlLabel
                  value={2}
                  control={<Radio />}
                  label="Design"
                />
              )}
            </RadioGroup>
          </FormControl>
        </Box>
        <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Legs Color</FormLabel>
            <RadioGroup
              value={legsColor}
              onChange={(e) => setLegsColor(e.target.value)}
            >
              <FormControlLabel
                value={"#777777"}
                control={<Radio />}
                label="Black"
              />
              <FormControlLabel
                value={"#ECECEC"}
                control={<Radio />}
                label="Chrome"
              />
              <FormControlLabel
                value={"#C9BD71"}
                control={<Radio />}
                label="Gold"
              />
              <FormControlLabel
                value={"#C9A3B9"}
                control={<Radio />}
                label="Pink Gold"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Stack>
    </Box>
  );
};

import { Button, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackButton = ({ goBack }) => (
  <Box sx={{ mt: 2, mb: 2 }}>
    <Button
      startIcon={<ArrowBackIcon />}
      onClick={goBack}
    >
      Go Back
    </Button>
  </Box>
);

export default BackButton;

import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";

const MuiAccordion = () => {
  return (
    <Box width="300px" sx={{ mx: "auto" }}>
      <Accordion>
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
            aperiam dolores vero nihil nesciunt, consequatur odit cumque
            veritatis fugiat eligendi quaerat molestias ad iusto explicabo eos
            tenetur voluptatem, aliquid vel?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
            aperiam dolores vero nihil nesciunt, consequatur odit cumque
            veritatis fugiat eligendi quaerat molestias ad iusto explicabo eos
            tenetur voluptatem, aliquid vel?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
            aperiam dolores vero nihil nesciunt, consequatur odit cumque
            veritatis fugiat eligendi quaerat molestias ad iusto explicabo eos
            tenetur voluptatem, aliquid vel?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default MuiAccordion;

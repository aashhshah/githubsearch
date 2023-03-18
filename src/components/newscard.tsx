import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";

interface NewsCardProps {
  heading: string;
  details: string;
  date: string
}

export const NewsCard = (props: NewsCardProps) => {
  const { heading, details, date } = props;
  const formattedDate = new Date(date).toJSON().slice(0, 10)
  return (
    <Accordion elevation={0} sx={{ bgcolor: '#e2dddb' }}>
      <AccordionSummary
        expandIcon={<CustomExpandIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h6">
          <b>{heading} </b>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="caption">{formattedDate}</Typography>
        <div dangerouslySetInnerHTML={{ __html: details }} />
      </AccordionDetails>
    </Accordion>
  );
};

const CustomExpandIcon = () => {
  return (
    <Box
      sx={{
        ".Mui-expanded & > .collapsIconWrapper": {
          display: "none",
        },
        ".expandIconWrapper": {
          display: "none",
        },
        ".Mui-expanded & > .expandIconWrapper": {
          display: "block",
        },
      }}
    >
      <div className="expandIconWrapper">
        <RemoveCircleOutlineIcon />
      </div>
      <div className="collapsIconWrapper">
        <AddCircleOutlineIcon />
      </div>
    </Box>
  );
};

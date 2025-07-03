import { Education } from '@/gql/generated/graphql';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Divider, List, ListItem, ListItemText } from '@mui/material';

interface OwnProps {
  education: Education;
}

const EducationItem = (props: OwnProps) => {
  const { education } = props;
  const { institution, degree } = education
  const startDate = education?.startDate ? new Date(education.startDate) : null;
  const endDate = education?.endDate ? new Date(education.endDate) : null;

  return (
    <Box>
      <Accordion elevation={2} sx={{ marginBottom: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="span">
              <strong>{endDate?.getFullYear()}</strong>
              {`: ${degree}, ${institution}`}
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemText primary="Institution" secondary={institution} />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Degree" secondary={degree} />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Start" secondary={startDate?.getFullYear()} />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="End" secondary={startDate?.getFullYear()} />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default EducationItem;
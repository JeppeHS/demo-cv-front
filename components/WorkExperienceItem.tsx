import { Education, WorkExperience } from '@/gql/generated/graphql';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Divider, List, ListItem, ListItemText } from '@mui/material';

interface OwnProps {
  workExperience: WorkExperience;
}

const WorkExperienceItem = (props: OwnProps) => {
  const { workExperience } = props;
  const { company, jobTitle } = workExperience
  const startDate = workExperience?.startDate ? new Date(workExperience.startDate) : null;
  const endDate = workExperience?.endDate ? new Date(workExperience.endDate) : null;

  return (
    <Box>
      <Accordion elevation={2} sx={{ marginBottom: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography component="span">
            <strong>{endDate?.getFullYear() || 'Present'}</strong>
            {`: ${company?.name} - ${jobTitle}`}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemText primary="Company" secondary={company?.name} />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Position" secondary={jobTitle} />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Start" secondary={startDate?.getFullYear()} />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="End" secondary={startDate?.getFullYear() || 'Present'} />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default WorkExperienceItem;
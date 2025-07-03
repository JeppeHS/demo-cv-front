import { Project } from '@/gql/generated/graphql';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Divider, List, ListItem, ListItemText } from '@mui/material';

interface OwnProps {
  project: Project;
}

const ProjectItem = (props: OwnProps) => {
  const { project } = props;
  const { description } = project
  const startDate = project?.startDate ? new Date(project.startDate) : null;
  const endDate = project?.endDate ? new Date(project.endDate) : null;

  return (
    <Box>
      <Accordion elevation={2} sx={{ marginBottom: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="span">
              <strong>{endDate?.getFullYear() || 'Present'}</strong>
              {`: ${description}`}
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemText primary="Description" secondary={description} />
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

export default ProjectItem;
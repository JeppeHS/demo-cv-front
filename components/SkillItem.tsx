import { Skill } from '@/gql/generated/graphql';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Divider, List, ListItem, ListItemText } from '@mui/material';

interface OwnProps {
  skill: Skill;
}

const SkillItem = (props: OwnProps) => {
  const { skill } = props;
  const { name, level, description } = skill;

  return (
    <Box>
      <Accordion elevation={2} sx={{ marginBottom: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography component="span">
            {name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemText primary="Name" secondary={name} />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Level" secondary={level} />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Description" secondary={description} />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default SkillItem;
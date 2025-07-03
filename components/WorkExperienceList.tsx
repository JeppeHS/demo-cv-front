import { WorkExperience } from '@/gql/generated/graphql';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import WorkExperienceItem from './WorkExperienceItem';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

interface OwnProps {
  workExperiences: WorkExperience[];
}

const WorkExperienceList = (props: OwnProps) => {
  const { workExperiences } = props;

  const workExperienceItems = workExperiences.map((workExperience) => (
    <WorkExperienceItem key={workExperience.id} workExperience={workExperience} />
  ));

  return (
    <Accordion defaultExpanded elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
      <AccordionSummary>
        <Box display="flex" alignItems="center" justifyContent="center">
          <WorkOutlineIcon sx={{ marginRight: 1, color: "#667eea" }}/>
          <Typography variant="h5" fontWeight="400">Work Experience</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          {workExperienceItems}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default WorkExperienceList;
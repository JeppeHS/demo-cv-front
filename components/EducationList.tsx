import { Education } from '@/gql/generated/graphql';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import EducationItem from './EducationItem';
import SchoolIcon from '@mui/icons-material/School'; 

interface OwnProps {
  educations: Education[];
}

const EducationList = (props: OwnProps) => {
  const { educations } = props;

  const educationItems = educations.map((education) => (
    <EducationItem key={education.id} education={education} />
  ));

  return (
    <Accordion defaultExpanded elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
      <AccordionSummary>
        <Box display="flex" alignItems="center" justifyContent="center">
          <SchoolIcon sx={{ marginRight: 1, color: "#667eea" }}/>
          <Typography variant="h5" fontWeight="400">Education</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          {educationItems}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default EducationList;
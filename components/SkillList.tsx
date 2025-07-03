import { Skill } from '@/gql/generated/graphql';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import SkillItem from './SkillItem';
import StarBorderIcon from '@mui/icons-material/StarBorder';

interface OwnProps {
  skills: Skill[];
}

const SkillList = (props: OwnProps) => {
  const { skills } = props;

  const skillItems = skills.map((skill) => (
    <SkillItem key={skill.id} skill={skill} />
  ));

  return (
    <Accordion defaultExpanded elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
      <AccordionSummary>
        <Box display="flex" alignItems="center" justifyContent="center">
          <StarBorderIcon sx={{ marginRight: 1, color: "#667eea" }}/>
          <Typography variant="h5" fontWeight="400">Skills</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          {skillItems}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default SkillList;
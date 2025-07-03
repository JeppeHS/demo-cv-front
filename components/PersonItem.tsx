import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Paper } from '@mui/material';
import { Person } from '@/gql/generated/graphql';
import EducationList from './EducationList';
import WorkExperienceList from './WorkExperienceList';
import ProjectList from './ProjectList';
import SkillList from './SkillList';
import PersonCard from './PersonCard';

interface OwnProps {
  person: Person;
}

const PersonItem = (props: OwnProps) => {
  const { person } = props;
  const { name, educations, workExperiences, projects, skills } = person

  return (
    <>
      <PersonCard person={person}/>
    
      <EducationList educations={educations || []} />

      <WorkExperienceList workExperiences={workExperiences || []} />

      <ProjectList projects={projects || []} />

      <SkillList skills={skills || []} />
    </>
  );
}

export default PersonItem;
import { Project } from '@/gql/generated/graphql';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import ProjectItem from './ProjectItem';
import GradingIcon from '@mui/icons-material/Grading';

interface OwnProps {
  projects: Project[];
}

const ProjectList = (props: OwnProps) => {
  const { projects } = props;

  const projectItems = projects.map((project) => (
    <ProjectItem key={project.id} project={project} />
  ));

  return (
    <Accordion defaultExpanded elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
      <AccordionSummary>
        <Box display="flex" alignItems="center" justifyContent="center">
          <GradingIcon sx={{ marginRight: 1, color: "#667eea" }}/>
          <Typography variant="h5" fontWeight="400">Projects</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          {projectItems}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default ProjectList;
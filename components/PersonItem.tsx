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
  const { educations, workExperiences, projects, skills } = person

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
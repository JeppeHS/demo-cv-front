import { useQuery } from "@apollo/client";
import { GetPersonsDocument, Person } from "@/gql/generated/graphql";
import { useState, useEffect } from "react";
import { Box, Collapse, Container, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import useUrlState from "@/hooks/useUrlState";

const EducationPage = () => {
  const { data } = useQuery(GetPersonsDocument, {
    fetchPolicy: 'cache-and-network'
  });
  const [persons, setPersons] = useState<Person[]>([]);
  const { educations } = persons[0] || {};
  const [urlState, setUrlState] = useUrlState({
    selectedEducationId: -1,
  });
  
  useEffect(() => {
    if (data && data.persons) {
      // Temporary workaround
      setPersons(data.persons.filter(p => !!p));
    }
  }, [data]);

  const listItems = educations?.map((education) => {
    const selected = urlState.selectedEducationId === education.id;
  
    const onClick = () => {
      if (selected) {
        setUrlState((current) => ({ ...current, selectedEducationId: -1 }));
      } else {
        setUrlState((current) => ({ ...current, selectedEducationId: education.id }));
      }
    }

    return (
      <>
        <ListItemButton onClick={onClick} key={education.id} selected={selected}>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary={`${education.degree} at ${education.institution}`} />
          {selected ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={selected} timeout="auto" unmountOnExit>
          <Box sx={{ paddingLeft: 4 }}>
            <List>
              <ListItemText primary={`Institution: ${education.institution}`} />
              <ListItemText primary={`Degree: ${education.degree}`} />
              <ListItemText primary={`Start: ${education.startDate ? new Date(education.startDate).getFullYear() : 'N/A'}`} />
              <ListItemText primary={`End: ${education.endDate ? new Date(education.endDate).getFullYear() : 'N/A'}`} />
            </List>
          </Box>
        </Collapse>
      </>
    );
  });
  
  return (
    <div>
      <Container maxWidth="lg" sx={{ marginTop: '2rem' }}>
        <List sx={{ width: '100%', maxWidth: 650, bgcolor: 'background.paper' }}>
          {listItems}
        </List>
      </Container>
    </div>
  );
}

export default EducationPage;
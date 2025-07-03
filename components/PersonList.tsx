import { useQuery } from '@apollo/client';
import { GetPersonsDocument, Person } from '@/gql/generated/graphql';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import PersonItem from './PersonItem';

const PersonList = () => {
  const { data } = useQuery(GetPersonsDocument, {
    fetchPolicy: 'cache-and-network'
  });
  const [persons, setPersons] = useState<Person[]>([]);
  
  useEffect(() => {
    if (data && data.persons) {
      // Temporary workaround
      setPersons(data.persons.filter(p => !!p));
    }
  }, [data]);

  const personItems = persons.map((person) => (
    <PersonItem key={person.id} person={person} />
  ));

  return (
    <div>
      <Box>
        {personItems}
      </Box>
    </div>
  );
}

export default PersonList;
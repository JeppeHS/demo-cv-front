import React from 'react';
import { Box, Typography, Avatar, Paper } from '@mui/material';
import { Person } from '@/gql/generated/graphql';

interface OwnProps {
  person: Person;
}

const PersonCard = (props: OwnProps) => {
  const { person } = props;
  const { name, initials, currentJobTitle } = person;

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: 4, 
        mb: 4, 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        borderRadius: 3
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' }}>
        <Avatar
          sx={{ 
            width: 120, 
            height: 120, 
            bgcolor: 'rgba(255,255,255,0.2)',
            fontSize: '3rem',
            border: '4px solid rgba(255,255,255,0.3)'
          }}
        >
          {initials}
        </Avatar>
        
        <Box sx={{ flex: 1, minWidth: 300 }}>
          <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
            {name}
          </Typography>
          <Typography variant="h6" sx={{ mb: 2, opacity: 0.9 }}>
            {currentJobTitle}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default PersonCard;
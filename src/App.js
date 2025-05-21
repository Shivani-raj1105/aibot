import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Chatbot from './components/Chatbot';
import { IconButton, Box, Paper, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ChatIcon from '@mui/icons-material/Chat';

const App = () => {
  const [chatOpen, setChatOpen] = useState(true);

  return (
    <>
      <LandingPage />
      {/* Floating Chatbox with Minimize/Maximize */}
      {chatOpen ? (
        <Paper
          elevation={8}
          sx={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            zIndex: 1300,
            width: 380,
            maxWidth: '95vw',
            boxShadow: '0 8px 32px rgba(31,38,135,0.18)',
            borderRadius: 4,
            overflow: 'hidden',
            background: 'rgba(255,255,255,0.98)',
            border: '1.5px solid #e3f2fd',
            transition: 'box-shadow 0.2s',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            bgcolor: 'primary.main',
            color: 'white',
            px: 2,
            py: 1,
          }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Virtual Assistant
            </Typography>
            <IconButton size="small" onClick={() => setChatOpen(false)} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ flex: 1, minHeight: 400 }}>
            <Chatbot />
          </Box>
        </Paper>
      ) : (
        <IconButton
          onClick={() => setChatOpen(true)}
          sx={{
            position: 'fixed',
            bottom: 40,
            right: 40,
            zIndex: 1300,
            bgcolor: 'primary.main',
            color: 'white',
            boxShadow: '0 8px 32px rgba(31,38,135,0.18)',
            borderRadius: '50%',
            width: 64,
            height: 64,
            '&:hover': { bgcolor: 'primary.dark' },
          }}
        >
          <ChatIcon sx={{ fontSize: 36 }} />
        </IconButton>
      )}
    </>
  );
};

export default App; 
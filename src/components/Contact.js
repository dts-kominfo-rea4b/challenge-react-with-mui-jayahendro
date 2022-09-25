// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import './Contact.css'

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
function ImageIcon() {
    return null;
}

function WorkIcon() {
    return null;
}

function BeachAccessIcon() {
    return null;
}

// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
      <>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}>
              <ListItem>
                  <ListItemAvatar>
                      <Avatar>
                          <ImageIcon />
                      </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Photos" secondary="Jan 9, 2014" />
              </ListItem>
              <ListItem>
                  <ListItemAvatar>
                      <Avatar>
                          <WorkIcon />
                      </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Work" secondary="Jan 7, 2014" />
              </ListItem>
              <ListItem>
                  <ListItemAvatar>
                      <Avatar>
                          <BeachAccessIcon />
                      </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Vacation" secondary="July 20, 2014" />
              </ListItem>
          </List>
      </>
    );
};

export default Contact;

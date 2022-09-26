// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import {Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import './Contact.css'

// Kalian bisa membuat CSS sendiri di src/components/Contact.css

// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data, myKey }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
      <div key={myKey}>
          <List sx={{ width: '100%', maxWidth: 560, bgcolor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
              <ListItem alignItems="flex-start">
                  <ListItemAvatar className={"avatar"}>
                      <Avatar alt={data.name}
                              src={data.photo}
                      sx={{ width: 72, height: 72 }}/>
                  </ListItemAvatar>
                  <ListItemText
                    className={"text"}
                    primary={data.name}
                    secondary={
                        <React.Fragment>
                            <Typography
                              component="span"
                              variant="subtitle2"
                              color="text.secondary"
                            >
                                {data.phone}<br/>
                            </Typography>
                            <Typography
                              component="span"
                              variant="subtitle2"
                              color="text.secondary"
                            >
                                {data.email}
                            </Typography>
                        </React.Fragment>
                  }
                  />
              </ListItem>
              <Divider />
          </List>
      </div>
    );
};

export default Contact;

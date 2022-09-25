// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import {Button, Container, TextField} from "@mui/material";

const ContactForm = () => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada

    return (
        <Container>
          <div className={"row"}>
            <TextField id="filled-basic"
                       label="Name"
                       variant="filled"
                       required
                       fullWidth
            />
          </div>
          <div className={"row"}>
            <TextField id="filled-basic"
                       label="Phone"
                       variant="filled"
                       required
                       fullWidth
            />
          </div>
          <div className={"row"}>
            <TextField id="filled-basic"
                       label="Email"
                       variant="filled"
                       required
                       fullWidth
            />
          </div>
          <div className={"row"}>
            <TextField id="filled-basic"
                       label="Photo URL"
                       variant="filled"
                       required
                       fullWidth
            />
          </div>
          <div className={"button"}>
            <Button variant="text">Add New</Button>
          </div>
        </Container>
    );
}

export default ContactForm;
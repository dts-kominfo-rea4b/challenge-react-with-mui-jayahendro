// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import {Button, Container, TextField} from "@mui/material";
import {useState} from "react";

const ContactForm = ({ clickHandler }) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [photo, setPhoto] = useState("");

    return (
        <Container>
          <div className={"row"}>
            <TextField id="filled-basic"
                       label="Name"
                       variant="filled"
                       required
                       fullWidth
                       value={name}
                       onChange={(element) => setName(element.target.value)}
            />
          </div>
          <div className={"row"}>
            <TextField id="filled-basic"
                       label="Phone"
                       variant="filled"
                       required
                       fullWidth
                       value={phone}
                       onChange={(element) => setPhone(element.target.value)}
            />
          </div>
          <div className={"row"}>
            <TextField id="filled-basic"
                       label="Email"
                       variant="filled"
                       required
                       fullWidth
                       value={email}
                       onChange={(element) => setEmail(element.target.value)}
            />
          </div>
          <div className={"row"}>
            <TextField id="filled-basic"
                       label="Photo URL"
                       variant="filled"
                       required
                       fullWidth
                       value={photo}
                       onChange={(element) => setPhoto(element.target.value)}
            />
          </div>
          <div className={"button"}>
            <Button variant="text"
                    onClick={() => clickHandler({ name, phone, email, photo})}>
              Add New
            </Button>
          </div>
        </Container>
    );
}

export default ContactForm;
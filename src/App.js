import './App.css';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";
import {useState, useEffect} from "react";
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const newContacts = [...contactsJSON];

    setContacts(newContacts)
  }, []);

  const clickHandler = (data) => {
    setContacts([...contacts, data])
  }

  return (
    <div className="App">
      <Header />
      <div className={"content"}>
        <div className={"contact-form"}>
          <ContactForm clickHandler={clickHandler} />
        </div>
        <div className={"contact-list"}>
          {
            contacts.map((element, key) => {
              return (
                <Contact key={key}
                         myKey={key}
                         data={element} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default App;

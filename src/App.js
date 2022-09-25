import './App.css';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  return (
    <div className="App">
      <Header />
      <div className={"content"}>
        <div className={"contact-form"}>
          <ContactForm />
        </div>
        <div className={"contact-list"}>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;

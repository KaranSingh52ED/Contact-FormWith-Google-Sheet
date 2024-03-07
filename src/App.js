import { ToastContainer } from 'react-toastify';
import ContactForm from './Contactform';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ContactForm />
      <ToastContainer />
    </div>
  );
}

export default App;

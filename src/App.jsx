import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import CategoryDetails from './Pages/CategoryDetails';
import Layout from './Layout/Layout';
import VoiceOverPortofilio from './Pages/VoiceOverPortofilio';
import WhatsAppButton from './Components/Whatsappbutton';
import Pagelogo1 from './Components/Pagelogo1';
import Pagelogo2 from './Components/Pagelogo2';
import Pagelogo3 from './Components/Pagelogo3';
import OurSuccessPartners from './Components/Oursuccesspartners';
import 'animate.css';
//------------------------------------------------------------------------------
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout childern={<Home />} />} />
        <Route
          path="/categoryDetails/:type"
          element={<Layout childern={<CategoryDetails />} />}
        />
        <Route
          path="/categoryDetails/voiceOver/:id"
          element={<Layout childern={<VoiceOverPortofilio />} />}
        />
        <Route
          path="/our-success-partners"
          element={<Layout childern={<OurSuccessPartners />} />}
        />
      <Route path="/pagelogo1" element={<Pagelogo1 />} />
      <Route path="/pagelogo2" element={<Pagelogo2 />} />
      <Route path="/pagelogo3" element={<Pagelogo3 />} />

      
        
      </Routes>
      <WhatsAppButton />
    </>
  );
}
export default App;
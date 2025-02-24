import { Route, Routes } from 'react-router-dom';
import { MarvelPage } from '../heroes/pages/MarvelPage';
import { DCPage } from '../heroes/pages/DcPage';
import { LoginPage } from '../auth/pages/LoginPage';
import { Navbar } from '../ui/components/navbar';



export const AppRouter = () => {
  return (
    <>
     <Navbar/>
        <Routes>
            
            <Route path="marvel" element={<MarvelPage />} />
            
            
            <Route path="dc" element={ <DCPage />} />
            
           <Route path="login" element={<LoginPage />} /> 
            <Route path="/*" element={<MarvelPage to = "/marvel" />} />

        </Routes>
    
    </>
  )
}

import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import Cadastro from './components/Cadastro';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Footer from './components/Footer';
import Sobre from './components/Sobre';
import Administracao from './components/Administracao';
import EditarBrinquedo from './components/EditarBrinquedo';
import CadastrarBrinquedo from './components/CadastrarBrinquedo';
import Produto1 from './components/Produto1';
import Produto2 from './components/Produto2';
import Produto3 from './components/Produto3';
import Produto4 from './components/Produto4';
import Produto5 from './components/Produto5';
import Produto6 from './components/Produto6';
import CarrinhoCompra from './components/carrinhoCompra';
import Cupom from './components/Cupom';
import Pix from './components/Pix';
import Boleto from './components/Boleto';
import Cartao from './components/Cartao';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Header />
              <Sidebar />
              <Footer />
              <Outlet /> 
            </>
          }
        >
          <Route index element={<Home />} />
        </Route>

        <Route
        path="/sobreNos"
        element={     
        <>
         <Header/>
         <Sidebar/>
         <Sobre/>
         <Footer/>
         <Outlet /> 
        </>
        }
        >

        </Route>
       
        <Route
          path="/cadastro"
          element={
            <>
              <Cadastro/>
              <Outlet /> 
            </>
          }
        />

        <Route 
        path="/login"
        element={
          <>
           <Login/>
           <Outlet /> 
          </>
        }       
        />
       
       <Route
          path="/administracao"
          element={
            <> <Header/>
              <Sidebar/>
              <Administracao/>
              <Footer/>
              <Outlet /> 
            </>
          }
        />
       
       <Route
          path="/editarBrinquedo"
          element={
            <> <Header/>
              <Sidebar/>
              <EditarBrinquedo/>
              <Footer/>
            </>
          }
        />
       
       <Route
          path="/cadastrarBrinquedo"
          element={
            <> <Header/>
              <Sidebar/>
              <CadastrarBrinquedo/>
              <Footer/>
              <Outlet /> 
            </>
          }
        />
         <Route
          path="/produto1"
          element={
            <> <Header/>
              <Sidebar/>
              <Produto1/>
              <Footer/>
              
            </>
          }
        />
         <Route
          path="/produto2"
          element={
            <> <Header/>
              <Sidebar/>
              <Produto2/>
              <Footer/>
              
            </>
          }
        />
         <Route
          path="/produto3"
          element={
            <> <Header/>
              <Sidebar/>
              <Produto3/>
              <Footer/>
              
            </>
          }
        />
         <Route
          path="/produto4"
          element={
            <> <Header/>
              <Sidebar/>
              <Produto4/>
              <Footer/>
             
            </>
          }
        />
         <Route
          path="/produto5"
          element={
            <> <Header/>
              <Sidebar/>
              <Produto5/>
              <Footer/>
             
            </>
          }
        />
         <Route
          path="/produto6"
          element={
            <> <Header/>
              <Sidebar/>
              <Produto6/>
              <Footer/>
              
            </>
          }
        />

        <Route
          path="/carrinhoCompra"
          element={
            <> 
            <Header/>
             
           <CarrinhoCompra/>
           <Footer/> 
          
              
            </>
          }
        />
       
       <Route
          path="/cupom"
          element={
            <>
              <Cupom/>
              <Outlet /> 
            </>
          }
        />
         <Route
          path="/pix"
          element={
            <>
              <Pix/>
              <Outlet /> 
            </>
          }
        />
        <Route
          path="/boleto"
          element={
            <>
              <Boleto/>
              <Outlet /> 
            </>
          }
        />
        
        <Route
          path="/cartao"
          element={
            <>
              <Cartao/>
              <Outlet /> 
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import React  from 'react';
import styled from 'styled-components';
import logoSite from '../assets/img/logo.png';
import barCode from '../assets/img/barcode.png';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; 

const StyledContainer = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  background-color: #f0f0f0;
`;
const StyledLink = styled(Link)`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none; 
  display: inline-flex; 
  align-items: center; 
  margin-left: 200px;
`;


const Content = styled.div`
  width: 500px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  h1 {
    text-align: center;
    font-size: 24px;
  }
  table {
    width: 100%;
    margin-bottom: 20px;
    border-collapse: collapse;
  }
  table, th, td {
    border: 1px solid #ccc;
  }
  th, td {
    padding: 10px;
    text-align: left;
  }
  ul {
    list-style-type: square;
    margin-left: 20px;
    padding: 0;
  }
  .logo-container {
    text-align: center;
    img {
      max-width: 150px;
      height: auto;
    }
  }
  #qrcode {
    display: block;
    margin: 0 auto;
    text-align: center;
    margin-top: 20px;
  }
  .logos {
    display: flex;
    justify-content: space between;
    margin-bottom: 20px;
    .nubank-logo {
      max-width: 150px;
      height: auto;
    }
  }
  
  #barcode-container {
    margin-top: 20px;
    display: flex;
    align-items: center;
    text-align: left;
    flex-direction: column;
    #barcode {
      font-size: 11px;
      font-weight: bold;
      margin-top: 5px;
      margin-bottom: 5px;
    }
    .barcode-line-container {
      display: flex;
      flex-direction: row;
    }
    .barcode-line {
      width: 10px;
      height: 40px;
      background-color: black;
      margin-right: 2px;
      margin-left: 2px;
    }
  }
`;

const Boleto = () => {
 
  return (
    <StyledContainer>
      <Content>
        <div className="logos">
          <div className="logo-container">
            <img className="nubank-logo" src={logoSite} alt="Logotipo da PlanetKids" />
            <StyledLink to="/home">
        <FaArrowLeft /> Voltar
      </StyledLink>
          </div>
          
        </div>
       
        <h1>Boleto</h1>
        <div className="row">
          <div className="col-6">
            <table>
              <thead>
                <tr>
                  <th colSpan="2">Informações do pagador</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nome:</td>
                  <td id="nome-pagador">João Batista Silva</td>
                </tr>
                <tr>
                  <td>CPF:</td>
                  <td id="cpf-pagador">455.678.978-40</td>
                </tr>
                <tr>
                  <td>Endereço:</td>
                  <td>Rua das Flores, 123, Centro, São Paulo, SP, 01234-567</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-6">
            <table>
              <thead>
                <tr>
                  <th colSpan="2">Informações do boleto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Número do documento:</td>
                  <td>1234567890</td>
                </tr>
                <tr>
                  <td>Vencimento:</td>
                  <td>31/08/2023</td>
                </tr>
                <tr>
                  <td>Valor do boleto:</td>
                  <td>R$ 100,00</td>
                </tr>
                <tr>
                  <td>Banco:</td>
                  <td>Banco do Brasil</td>
                </tr>
                <tr>
                  <td>Agência:</td>
                  <td>1234-5</td>
                </tr>
                <tr>
                  <td>Conta corrente:</td>
                  <td>12345-6</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p>
              <b>Instruções de pagamento:</b>
            </p>
            <ul>
              <li>Pague até o vencimento no banco, casa lotérica ou pela internet.</li>
              <li>Para pagar pelo internet banking, copie o código de barras e insira no campo indicado.</li>
              <li>O pagamento do boleto não é automático.</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p>
              <b>Informações complementares:</b>
            </p>
            <ul>
              <li>Este boleto é registrado.</li>
              <li>Em caso de dúvidas, entre em contato com o beneficiário.</li>
            </ul>
          </div>
        </div>
        <div id="barcode-container">
          <div className="barcode-line-container">
            <img src={barCode} alt="Código de Barras" id="barcode" />
          </div>
        </div>
      </Content>
    
    </StyledContainer>
  );
};

export default Boleto;

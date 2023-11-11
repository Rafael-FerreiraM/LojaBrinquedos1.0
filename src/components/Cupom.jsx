import React from 'react';
import styled from 'styled-components';
import cupomImage from '../assets/img/cupom.png'; 
import backgroundImage from'../assets/img/cupomfundo.jpg';

const CupomWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  background-size: cover; 
`;

const CupomImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const CupomTitle = styled.h2`
  color: #333;
`;

const CupomText = styled.p`
  color: #555;
`;
const CupomBackground = styled.div`
  background-image: url(${backgroundImage}); 
  max=height: 100%;
`;

const CupomValidity = styled.p`
  font-style: italic;
  color: #777;
`;

const DiscountFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

const DiscountValue = styled.p`
  color: #27ae60;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const AcceptButton = styled.button`
  background-color: #27ae60;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #1e8449;
  }
`;

const RejectButton = styled.button`
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #c0392b;
  }
`;

const Cupom = () => {
  const aceitarCupom = () => {
    window.location.href = '/carrinhoCompra';
  };

  const rejeitarCupom = () => {
    window.location.href = '/home';
  };

  return (
    <CupomBackground>
    <CupomWrapper>
       
      <CupomImage src={cupomImage} alt="Cupom de Dia das Crianças" />
      <CupomTitle>Cupom de Dia das Crianças</CupomTitle>
      <CupomText>
        Aproveite o cupom <strong>DIADASCRIANCAS</strong> para ganhar <strong>20% de desconto</strong> em qualquer compra no site.
      </CupomText>
      <CupomValidity>
        O cupom é válido de <strong>26/09</strong> a <strong>12/10</strong> até as <strong>23:59</strong>.
      </CupomValidity>
      <DiscountFooter>
        <DiscountValue>20% de desconto em qualquer compra</DiscountValue>
        <ButtonGroup>
          <AcceptButton onClick={aceitarCupom}>Aceitar</AcceptButton>
          <RejectButton onClick={rejeitarCupom}>Rejeitar</RejectButton>
        </ButtonGroup>
      </DiscountFooter>
     
    </CupomWrapper>
    </CupomBackground>
  );
};

export default Cupom;

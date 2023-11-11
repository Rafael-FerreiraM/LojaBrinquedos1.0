import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Swal from 'sweetalert2';
import backgroundImage from '../assets/img/bg-01.jpg';
import Inputmask from 'inputmask';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    /* Outros estilos para o corpo do documento */
  }
`;

const PaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: transparent; /* Remova o fundo cinza claro */
`;

const CardBox = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 30px;
  width: 400px; /* Tornando o CardBox maior */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
const BackgroundContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* Outros estilos para o contêiner do fundo */
`;
const Title = styled.h2`
  font-size: 20px;
  margin: 0 0 20px;
`;

const InputLabel = styled.label`
  font-size: 14px;
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  background-color: #963E7B;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const Cartao = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvc, setCvc] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const cardNumberInput = document.getElementById('cardNumber');
    Inputmask('9999 9999 9999 9999').mask(cardNumberInput);

    const expirationInput = document.getElementById('expiration');
    Inputmask('99/99').mask(expirationInput);

    const cvcInput = document.getElementById('cvc');
    Inputmask('999').mask(cvcInput);
  }, []);

  const validateForm = () => {
    setIsFormValid(
      cardNumber.length === 19 &&
      cardName.trim() !== '' &&
      expiration.length === 5 &&
      cvc.length === 3
    );
  };

  const showConfirmationModal = () => {
    Swal.fire({
      title: 'Tem certeza que deseja pagar?',
      text: 'Confirme o pagamento',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.isConfirmed) {
        showProcessingModal();
      }
    });
  };

  const showProcessingModal = () => {
    Swal.fire({
      title: 'Pagamento em processamento',
      text: 'Aguarde a confirmação',
      icon: 'info',
    });


    setTimeout(() => {
      // Redirecionar para /home
      window.location.href = '/home';
    }, 2000);
  };

  const handlePaymentSubmit = () => {
   
    if (isFormValid) {
      showConfirmationModal();
    }
  };

  return (
    <BackgroundContainer>
    <PaymentContainer>
      <CardBox>
        <Title>Informações de Pagamento</Title>
        <InputLabel>Número do Cartão:</InputLabel>
        <Input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => {
            setCardNumber(e.target.value);
            validateForm();
          }}
          placeholder="1111 1111 1111 1111"
        />
        <InputLabel>Nome do Titular:</InputLabel>
                <Input
        type="text" 
        value={cardName}
        onChange={(e) => {
            setCardName(e.target.value);
            validateForm();
        }}
        placeholder="Nome do Titular"
        />
        <InputLabel>Data de Validade:</InputLabel>
        <Input
          type="text"
          id="expiration"
          value={expiration}
          onChange={(e) => {
            setExpiration(e.target.value);
            validateForm();
          }}
          placeholder="MM/YY"
        />
        <InputLabel>CVC:</InputLabel>
        <Input
          type="text"
          id="cvc"
          value={cvc}
          onChange={(e) => {
            setCvc(e.target.value);
            validateForm();
          }}
          placeholder="CVC"
        />
        <Button onClick={handlePaymentSubmit} disabled={!isFormValid}>
          Confirmar Pagamento
        </Button>
      </CardBox>
    </PaymentContainer>
    </BackgroundContainer>
  );
};

export default Cartao;

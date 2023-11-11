import React, { useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2'; 
import PixImage from '../assets/img/Pix.png';
import LogoImage from '../assets/img/logo.png';
import qrCode from '../assets/img/qrcode.png';
import { FaArrowLeft } from 'react-icons/fa';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
`;

const Container = styled.div`
  text-align: center;
  width: 400px;
  height: 500px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
`;

const BackgroundBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  filter: blur(10px);
  z-index: -1;
`;

const QRCodeContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
`;

const ImagesContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const PixImageStyled = styled.img`
  width: 60px;
  height: 60px;
  margin: 10px;
`;

const LogoImageStyled = styled.img`
  width: 60px;
  height: 60px;
  margin: 10px;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const BackButton = styled.a`
  background-color: transparent;
  color: #007bff;
  display: flex;
  align-items: center;
  width: 56%;
`;

const ArrowIcon = styled.i`
  margin-right: 5px;
`;

const QRCodeImage = styled.img`
  width: 100%;
  max-width: 200px; 
  height: auto; 
`;

const Pix = () => {
  const [qrScanned, setQrScanned] = useState(false);
  
  const handleScanQRCode = () => {
    if (!qrScanned) {
      setQrScanned(true);
      Swal.fire({
        title: 'Aguardando Pagamento!',
        text: 'Por favor aguarde a confirmação de pagamento!',
        icon: 'info',
        confirmButtonText: 'OK',
      });
    }
  };
  
  return (
    <PageContainer>
      <Container>
        <BackgroundBlur />
        <h1>Escaneie o Código</h1>
       
        <ImagesContainer>
          <PixImageStyled src={PixImage} alt="Imagem Pix" />
          <LogoImageStyled src={LogoImage} alt="Logo" />
        </ImagesContainer>
        <QRCodeContainer id="qrcode">
          <QRCodeImage src={qrCode} alt="QR Code" />
        </QRCodeContainer>
        <ButtonContainer style={{ marginTop: 'auto' }}>
          <Button id="escanear-button" onClick={handleScanQRCode}>
            Escanear Código
          </Button>
          <BackButton href="/home">
            <Button>
              <ArrowIcon />
              <FaArrowLeft /> Voltar à Página Principal
            </Button>
          </BackButton>
        </ButtonContainer>
        <script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>
      </Container>
    </PageContainer>
  );
};

export default Pix;

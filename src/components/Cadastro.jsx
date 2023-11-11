import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import imgFormulario from '../assets/img/img-formulario.png';
import imgBackground from '../assets/img/background.png';
import { FaUser, FaLock, FaCalendar, FaAddressCard, FaPhone, FaEnvelope, FaUserPlus } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${imgBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  width: 80%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.2);
  background-color: transparent;
`;

const LeftCard = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

const RightCard = styled.div`
  width: 48%;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 0 10px 10px 0;
`;

const Logo = styled.img`
  width: 80%;
  height: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

const H2Title = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Input = styled(InputMask)`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 50%;
`;

const BootstrapInput = styled(Input)`

    // qualquer estilo adicional do Bootstrap aqui
 
`;

const Button = styled.button`
  background-color: #FF008A;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;

const LoginLink = styled(Link)`
  text-decoration: none;
  color: #FF008A;
  font-weight: bold;
  margin-top: 10px;
`;

const Text = styled.span`
  color: black;
  font-weight: bold;
  margin-top: 10px;
`;

const InlineContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Space = styled.span`
  margin-right: 10px;
`;

const Label = styled.label`
  color: #000;
  margin-bottom: 5px;
`;

const PinkText = styled.span`
  color: #FF008A;
  font-weight: bold;
`;

const ErrorMessage = styled.span`
  color: red;
  font-weight: bold;
`;

const Cadastro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    nomeUsuario: '',
    cpf: '',
    dataNascimento: '',
    telefone: '',
    senha: '',
    confirmarSenha: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    cpf: '',
    senha: '',
  });

  const [isCpfValid, setIsCpfValid] = useState(true); 
  const [isSenhaValid, setIsSenhaValid] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitPressed, setIsSubmitPressed] = useState(false);
  const [serverError, setServerError] = useState(null);

  const validarCpf = (cpf) => {
    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
      setIsCpfValid(false);
      setErrors({ ...errors, cpf: 'CPF inválido. Por favor, verifique o campo CPF.' });
    } else {
      setIsCpfValid(true);
      setErrors({ ...errors, cpf: '' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    

    if (name === 'cpf') {
      validarCpf(value);
    }

    if (name === 'confirmarSenha') {
      const isSenhaValid = formData.senha === value;
      setIsSenhaValid(isSenhaValid);
      setErrors({ ...errors, senha: isSenhaValid ? '' : 'As senhas digitadas não coincidem.' });

      if (!isSubmitPressed) {
        setIsFormValid(isCpfValid && isSenhaValid);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitPressed(true);

    
    if (isFormValid) {
       //JSP Aqui
      try {
        const response = await fetch('cadastro.jsp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          navigate('/login');
        } else {
          console.error('Erro na solicitação');
          setServerError('Erro no backend. Requisição não foi feita.');
        }
      } catch (error) {
        console.error('Erro no backend');
        setServerError('Erro no backend. Tente novamente mais tarde.');
      }
    } else {
      setServerError('Por favor, digite os dados corretamente.');
    }
  };

  return (
    <Container>
      <CardContainer>
        <LeftCard>
          <Logo src={imgFormulario} alt="Logo" />
        </LeftCard>
        <RightCard>
          <Form>
            <InputGroup>
              <H2Title>
                <PinkText>C</PinkText>
                <PinkText>A</PinkText>
                <PinkText>D</PinkText>
                <PinkText>A</PinkText>
                <PinkText>S</PinkText>
                <PinkText>T</PinkText>
                <PinkText>R</PinkText>
                <PinkText>O</PinkText>
                <Space> </Space>
                <PinkText>P</PinkText>
                <PinkText>L</PinkText>
                <PinkText>A</PinkText>
                <PinkText>N</PinkText>
                <PinkText>E</PinkText>
                <PinkText>T</PinkText>
                <PinkText>K</PinkText>
                <PinkText>I</PinkText>
                <PinkText>D</PinkText>
                <PinkText>S</PinkText>
              </H2Title>
            </InputGroup>
            <InputGroup>
              <Label>
                <FaUser /> Nome Completo:
              </Label>
              <BootstrapInput
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                className="form-control" 
              />
            </InputGroup>
            <InputGroup>
              <Label>
                <FaUserPlus /> Nome de Usuário:
              </Label>
              <BootstrapInput
                type="text"
                name="nomeUsuario"
                value={formData.nomeUsuario}
                onChange={handleInputChange}
                className="form-control" 
              />
            </InputGroup>
            <InputGroup>
              <Label>
                <FaEnvelope /> Email:
              </Label>
              <BootstrapInput
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-control"
              />
            </InputGroup>
            <InputGroup>
              <Label>
                <FaAddressCard /> CPF:
              </Label>
              <BootstrapInput
                style={{ width: "215px" }}
                mask="999.999.999-99"
                maskChar=" "
                type="text"
                name="cpf"
                value={formData.cpf}
                onChange={handleInputChange}
                className="form-control" 
              />
              {errors.cpf && <ErrorMessage>{errors.cpf}</ErrorMessage>}
            </InputGroup>
            <InputGroup>
              <Label>
                <FaCalendar /> Data de Nascimento:
              </Label>
              <BootstrapInput
                style={{ width: "215px" }}
                mask="99/99/9999"
                maskplaceholder={null}
                type="text"
                name="dataNascimento"
                value={formData.dataNascimento}
                onChange={handleInputChange}
                className="form-control" 
              />
            </InputGroup>
            <InputGroup>
          <Label>
            <FaPhone /> Telefone:
          </Label>
          <BootstrapInput
            style={{ width: "215px" }}
            mask="(99) 99999-9999"
            maskChar=" "
            type="text"
            name="telefone"
            value={formData.telefone}
            onChange={handleInputChange}
            className="form-control"
          />
        </InputGroup>

          <div style={{ display: "flex" }}>
    <div style={{ flex: 1 }}>
      <Label>
        <FaLock /> Senha:
      </Label>
      <BootstrapInput
        style={{ width: "200px" }}
        type="password"
        name="senha"
        value={formData.senha}
        onChange={handleInputChange}
        className="form-control"
      />
    </div>
    <div style={{ flex: 1 }}>
      <Label>
        <FaLock /> Confirmar Senha:
      </Label>
      <BootstrapInput
        style={{ width: "210px" }}
        type="password"
        name="confirmarSenha"
        value={formData.confirmarSenha}
        onChange={handleInputChange}
        className="form-control"
      />
    </div>
  </div>

  <div style={{ marginBottom: "10px" }}></div> 

{errors.senha && <ErrorMessage>{errors.senha}</ErrorMessage>}
{serverError && <ErrorMessage>{serverError}</ErrorMessage>}

<Button onClick={handleSubmit} disabled={!isFormValid}>
  Cadastrar
</Button>
      
            <InlineContainer>
              <Text>Já tem uma conta?</Text>
              <Space />
              <LoginLink to="/login">Login</LoginLink>
              
            </InlineContainer>
          </Form>
        </RightCard>
      </CardContainer>
    </Container>
  
  );
};

export default Cadastro;

import React from 'react';
import styled from 'styled-components';
import RhainImage from '../assets/img/Rhain.jpeg';
import RafaelImage from '../assets/img/Rafael.jpg';
import RafaelBImage from '../assets/img/Rafael_B.jpeg';
import RychardImage from '../assets/img/Rychard.jpeg';
import BrunoImage from '../assets/img/Bruno.jpeg';
import GabrielAImage from '../assets/img/Gabriel_A.jpeg';
import JuliaImage from '../assets/img/julia.jpeg';

const SobreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 800px;
  margin: 20px auto 0;
  margin-bottom:100px;
`;

const Membro = styled.div`
  flex-basis: calc(25% - 20px); /* Defina o tamanho desejado para 4 imagens em uma linha */
  margin: 5px; /* Reduzi o espaçamento entre os membros */
  text-align: center;
`;

const MembroImagem = styled.img`
  max-width: 100%;
  border-radius: 50%;
`;

const MembroInfo = styled.div`
  margin-top: 5px; /* Reduzi o espaçamento superior */
`;

const Titulo = styled.h2`
  text-align: center; /* Centraliza horizontalmente */
  /* Adicione estilos adicionais aqui, se necessário */
  margin-top: 20px; /* Adicione margem superior para o título */
`;

const LinhaHorizontal = styled.hr`
  width: 50%; /* Define a largura desejada */
  margin: 20px auto; /* Centraliza horizontalmente */
  /* Adicione estilos adicionais aqui, se necessário */
`;

const Sobre = () => {
  const membros = [
    {
      nome: 'Rhaian Alvarado',
      rgm: '29162831',
      imagem: RhainImage,
    },
    {
      nome: 'Rafael Ferreira',
      rgm: '30060222',
      imagem: RafaelImage,
    },
    {
      nome: 'Rafael de Souza',
      rgm: '29320127',
      imagem: RafaelBImage,
    },
    {
      nome: 'Rychard Alves',
      rgm: '29690781',
      imagem: RychardImage,
    },
    {
      nome: 'Bruno Ferreira',
      rgm: '29523176',
      imagem: BrunoImage,
    },
    {
      nome: 'Gabriel Amancio',
      rgm: '31365973',
      imagem: GabrielAImage,
    },
    {
      nome: 'Julia',
      rgm: ' 30111056',
      imagem: JuliaImage,
    },
  ];

  return (
    <div>
      <Titulo>INTEGRANTES BOLA 7</Titulo>
      <LinhaHorizontal />
      <SobreContainer>
        {membros.map((membro, index) => (
          <Membro key={index}>
            <MembroImagem src={membro.imagem} alt={`Foto de ${membro.nome}`} />
            <MembroInfo>
              <p>{membro.rgm}</p>
              <p>{membro.nome}</p>
            </MembroInfo>
          </Membro>
        ))}
      </SobreContainer>
    </div>
  );
};

export default Sobre;

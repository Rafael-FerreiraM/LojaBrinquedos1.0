import React from 'react';

const Footer = () => {
  const textStyle = {
    color: 'black', // Cor preta para o texto
  };

  return (
    <footer>
      <p style={textStyle}>&copy; {new Date().getFullYear()} Feito pelo Grupo Bola 7. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;

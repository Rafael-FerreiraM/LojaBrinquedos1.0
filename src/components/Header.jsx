import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import '../assets/img/img-formulario.png';

const HeaderContainer = styled.header`
  background-color: #a08edf;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 45px;
  margin: 0;
  color: #711d92;
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CartContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const CartImage = styled.img`
  max-width: 40px;
  max-height: 40px;
`;

const CartCount = styled.span`
  background-color: #ff0000;
  color: #fff;
  border-radius: 50%;
  padding: 5px 10px;
  margin-left: -10px;
  position: relative;
  top: -10px;
  font-size: 18px;
`;

const AvatarContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const AvatarImage = styled.img`
  max-width: 40px;
  max-height: 40px;
`;

const SubmenuContainer = styled.div`
  position: absolute;
  top: 70px;
  right: 5px;
  background-color: black;
  padding: 5px;
  display: flex;
  flex-direction: column;
  z-index: 1000;
`;

const SubmenuButton = styled.button`
  width: 100%;
`;

const Header = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const submenuRef = useRef();

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('storedItemsAdicionados')) || [];
    const itemIDs = ['produto1', 'produto2', 'produto3', 'produto4', 'produto5', 'produto6'];
    let count = 0;

    for (let i = 0; i < itemIDs.length; i++) {
      if (storedItems.includes(itemIDs[i])) {
        ++count;
      }
    }

    setCartCount(count);

    const storedAuthenticated = localStorage.getItem('authenticated') === 'true';

    if (storedAuthenticated) {
      const storedUsername = localStorage.getItem('username');
      setAuthenticated(true);
      setUsername(storedUsername);
    }

    if (!storedAuthenticated) {
      fetch('verificarusuario.jsp')
        .then((response) => response.json())
        .then((data) => {
          if (data.username) {
            localStorage.setItem('authenticated', 'true');
            localStorage.setItem('username', data.username);
            setAuthenticated(true);
            setUsername(data.username);
          } else {
            localStorage.removeItem('authenticated');
            localStorage.removeItem('username');
          }
        });
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setShowSubMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const confirmLogout = () => {
    Swal.fire({
      title: 'Tem certeza de que deseja sair da sua conta?',
      text: 'Clique em "Sair" para confirmar.',
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sair',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('authenticated');
        localStorage.removeItem('username');
        setAuthenticated(false);
        setUsername('');
        window.location.href = '/home';
      }
    });
  };

  function redirectToLogin() {
    window.location.href = '/login';
  }

  function redirectToCart() {
    window.location.href = '/carrinhoCompra';
  }

  function redirectToRegister() {
    window.location.href = '/cadastro';
  }

  return (
    <HeaderContainer>
      <div className="header-logotipo">
        <a href="/home">
          <img src={require('../assets/img/logo.png')} alt="Loja de Brinquedo" />
        </a>
      </div>
      <Title className="header-titulo">
        <span className="animated-letter">P</span>
        <span className="animated-letter">L</span>
        <span className="animated-letter">A</span>
        <span className="animated-letter">N</span>
        <span className="animated-letter">E</span>
        <span className="animated-letter">T</span>
        <span className="animated-letter letter-space"></span>
        <span className="animated-letter">K</span>
        <span className="animated-letter">I</span>
        <span className="animated-letter">D</span>
        <span className="animated-letter">S</span>
      </Title>
      <ActionButtonsContainer>
        <CartContainer onClick={redirectToCart}>
          <CartImage src={require('../assets/img/carrinho.png')} alt="Carrinho de Compras" />
          <CartCount id="cart-count">{cartCount}</CartCount>
        </CartContainer>
        <AvatarContainer onClick={() => setShowSubMenu(!showSubMenu)} ref={submenuRef}>
          <AvatarImage src={require('../assets/img/avatar.png')} alt="Avatar" />
          {showSubMenu && (
            <SubmenuContainer>
              <p style={{ fontSize: '16px', color: 'white', marginBottom: '10px', textAlign: 'center' }}>
                {authenticated ? `Bem-vindo, ${username}!` : 'Bem-vindo!'}
              </p>
              {authenticated ? (
                <SubmenuButton type="button" className="btn btn-danger btn-sm" onClick={confirmLogout}>
                  Sair
                </SubmenuButton>
              ) : (
                <div>
                  <SubmenuButton type="button" className="btn btn-danger btn-sm" onClick={redirectToLogin}>
                    Login
                  </SubmenuButton>
                  <SubmenuButton type="button" className="btn btn-primary btn-sm" onClick={() => redirectToRegister()}>
                    Cadastrar
                  </SubmenuButton>
                </div>
              )}
            </SubmenuContainer>
          )}
        </AvatarContainer>
      </ActionButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;

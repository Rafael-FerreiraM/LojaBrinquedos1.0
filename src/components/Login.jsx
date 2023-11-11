import React, { useState } from 'react';
import imgBackground from '../assets/img/bg-01.jpg'; 
import imgLogo from '../assets/img/logo.png'; 
import '../assets/css/util.css';
import '../assets/css/main.css';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
      if (username === 'admin' && password === '1234') {
          // Se as credenciais são admin e 1234, loga como um administrador
          sessionStorage.setItem('authenticated', 'true');
          sessionStorage.setItem('isAdmin', 'true');
          localStorage.setItem('authenticated', 'true');
          localStorage.setItem('isAdmin', 'true');
          localStorage.setItem('username',username);
          sessionStorage.setItem('username', username);
          window.location.href = '/home'; // Redirecionar para a página inicial
      } else {
          try {
              const formData = new FormData();
              formData.append('username', username);
              formData.append('password', password);

              // Solicitação de formulário POST para o servidor JSP
              const response = await fetch('login.jsp', {
                  method: 'POST',
                  body: formData,
              });

              if (response.ok) {
                  const data = await response.json();
                  if (data.success) {
                      sessionStorage.setItem('authenticated', 'true');
                      sessionStorage.setItem('isAdmin', data.isAdmin || username === 'admin');
                      localStorage.setItem('authenticated', 'true');
                      localStorage.setItem('isAdmin', data.isAdmin || username === 'admin');
                      sessionStorage.setItem('username', username);
                      window.location.href = '/home';
                  } else {
                      alert('Credenciais inválidas. Tente novamente.');
                  }
              } else {
                  alert('Erro ao fazer login. Credenciais inválidas.');
              }
          } catch (error) {
              console.error('Erro ao fazer login:', error);
              alert('Ocorreu um erro ao fazer login. Tente novamente mais tarde.');
          }
      }
  };
  
  return (
    <div className="limiter">
        <div className="container-login100" style={{ backgroundImage: `url(${imgBackground})` }}>
        <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
          <form className="login100-form validate-form flex-sb flex-w">
            <span className="login100-form-title p-b-53">
              <i className="fa fa-rocket"></i> Entrar
              <img className="logo-image" src={imgLogo} alt="Logo" style={{ width: '100px' }} /> {/* Ajuste a largura aqui */}
            </span>


            <div className="p-t-31 p-b-9">
              <span className="txt1">
                <i className="fa fa-user"></i> Nome de Usuário
              </span>
            </div>
            <div className="wrap-input100 validate-input" data-validate="Nome de Usuário é obrigatório">
              <input
                className="input100"
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <span className="focus-input100"></span>
            </div>

            <div className="p-t-13 p-b-9">
              <span className="txt1">
                <i className="fa fa-lock"></i> Senha
              </span>

            </div>
            <div className="wrap-input100 validate-input" data-validate="Senha é obrigatória">
              <input
                className="input100"
                type="password"
                name="pass"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input100"></span>
            </div>

            <div className="container-login100-form-btn m-t-17">
              <button type="button" className="login100-form-btn" onClick={handleLogin}>
                Entrar
              </button>
            </div>

            <div className="w-full text-center p-t-55">
              <span className="txt2">
                Não tem conta ?
                <a href="/cadastro" className="txt2 bo1">
                 <br/>Registre-se agora
              </a>
              </span>

             
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

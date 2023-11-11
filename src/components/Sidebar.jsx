import React, { useEffect } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { AiOutlineHome, AiOutlineTool, AiOutlineTeam } from 'react-icons/ai';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const handleSubMenuLinkClick = (to) => {
    navigate(to); 
  };
  useEffect(() => {
    
    
    const storedUsername = localStorage.getItem('username');
    const administracaoTab = document.getElementById('administracaoTab');

    if (storedUsername === 'admin' || storedUsername === 'jadir') {
      administracaoTab.style.display = 'block';
    } else {
      administracaoTab.style.display = 'none';
    }

    fetch('verificarusuario.jsp')
    .then((response) => response.json())
    .then((data) => {
      if (data.username === 'admin' || data.username === 'jadir') {
        administracaoTab.style.display ='block';
      } else {
        administracaoTab.style.display ='none';
      } 
    })
  }, []);

  const handleMenuClick = (e) => {
    e.preventDefault();

    const subMenuItems = document.querySelectorAll('#categoriasItem ul li');
    const categoriasItem = document.getElementById('categoriasItem');
    let icon = categoriasItem.querySelector('i');

    categoriasItem.classList.toggle('active');

    if (categoriasItem.classList.contains('active')) {
      icon = <BsArrowLeft />;
    } else {
      icon = <BsArrowRight />;
    }
  };

  useEffect(() => {
    const categoriasItem = document.getElementById('categoriasItem');
    categoriasItem.addEventListener('click', handleMenuClick);

    return () => {
      categoriasItem.removeEventListener('click', handleMenuClick);
    };
  }, []);

  useEffect(() => {
    var carrinhosItem = document.getElementById('carrinhosItem');
    var submenuCarrinho = document.getElementById('submenu-carrinho');

    submenuCarrinho.style.display = 'none';

    carrinhosItem.addEventListener('mouseenter', function () {
      submenuCarrinho.style.display = 'block';
    });

    carrinhosItem.addEventListener('mouseleave', function () {
      submenuCarrinho.style.display = 'none';
    });

    var peluciasItem = document.getElementById('peluciasItem');
    var submenuPelucias = document.getElementById('submenu-pelucias');

    submenuPelucias.style.display = 'none';

    peluciasItem.addEventListener('mouseenter', function () {
      submenuPelucias.style.display = 'block';
    });

    peluciasItem.addEventListener('mouseleave', function () {
      submenuPelucias.style.display = 'none';
    });

    var bonecosItem = document.getElementById('bonecosItem');
    var submenuBonecos = document.getElementById('submenu-bonecos');

    submenuBonecos.style.display = 'none';

    bonecosItem.addEventListener('mouseenter', function () {
      submenuBonecos.style.display = 'block';
    });

    bonecosItem.addEventListener('mouseleave', function () {
      submenuBonecos.style.display = 'none';
    });

    const linkCarrinho = document.querySelector('.submenu-carrinho a[href="/produto4"]');
    const linkEscavadeira = document.querySelector('.submenu-carrinho a[href="/produto6"]');
    const linkGalinha = document.querySelector('.submenu-pelucias a[href="/produto2"]');
    const linkOvelha = document.querySelector('.submenu-pelucias a[href="/produto1"]');
    const linkDino = document.querySelector('.submenu-bonecos a[href="/produto3"]');
    const linkFerramentas = document.querySelector('.submenu-bonecos a[href="/produto5"]');

    linkCarrinho.addEventListener("click", () => {
      handleSubMenuLinkClick('/produto4');
    });
    
    linkEscavadeira.addEventListener("click", () => {
      handleSubMenuLinkClick('/produto6');
    });
    
    linkGalinha.addEventListener("click", () => {
      handleSubMenuLinkClick('/produto2');
    });
    
    linkOvelha.addEventListener("click", () => {
      handleSubMenuLinkClick('/produto1');
    });
    
    linkDino.addEventListener("click", () => {
      handleSubMenuLinkClick('/produto3');
    });
    
    linkFerramentas.addEventListener("click", () => {
      handleSubMenuLinkClick('/produto5');
    });
    
  }, 
  []);
  

  return (
    <div id="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/home">
              <AiOutlineHome /> Home
            </Link>
          </li>
          <li id="categoriasItem">
            <a href="#">
              <AiOutlineUnorderedList /> Categorias <BsArrowRight />
            </a>
            <ul className="cor">
              <li className="cor" id="carrinhosItem">
                <a href="#">Carrinhos <BsArrowRight /></a>
                <ul className="submenu-carrinho" id="submenu-carrinho">
                  <li className="produto">
                  <Link to="/produto4">Quadriciclo</Link>
                  </li>
                  <li className="produto">
                    <Link to="/produto6">Escavadeira</Link>
                  </li>
                </ul>
              </li>
              <li className="cor" id="peluciasItem">
                <a href="#">Pelúcias <BsArrowRight /></a>
                <ul className="submenu-pelucias" id="submenu-pelucias">
                  <li className="produto">
                    <Link to="/produto1">Ovelha</Link>
                  </li>
                  <li className="produto">
                    <Link to="/produto2">Galinha</Link>
                  </li>
                </ul>
              </li>
              <li className="cor" id="bonecosItem">
                <a href="#">Bonecos <BsArrowRight /></a>
                <ul className="submenu-bonecos" id="submenu-bonecos">
                  <li className="produto">
                    <Link to="/produto3">DINO T-REX</Link>
                  </li>
                  <li className="produto">
                    <Link to="/produto5">Conjunto Ferramentas</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li id="administracaoTab" style={{ display: 'none' }}>
            <Link to="/administracao">
              <AiOutlineTool /> Administração
            </Link>
          </li>
          <li>
            <Link to="/sobreNos">
              <AiOutlineTeam /> Sobre a Equipe
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

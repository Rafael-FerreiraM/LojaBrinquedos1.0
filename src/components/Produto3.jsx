import React, { useState, useEffect } from 'react';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import dinoImage from '../assets/img/dino_2.png';
import Swal from 'sweetalert2';

const Produto3 = () => {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('storedItemsAdicionados')) || [];
    setIsAdded(storedItems.includes('produto3'));
  }, []);

  const addToCart = () => {
    if (isAdded) {
      Swal.fire({
        icon: 'error',
        title: 'Produto já foi adicionado',
        text: 'Este produto já foi adicionado ao carrinho =(',
      });
    } else {
      const storedItems = JSON.parse(localStorage.getItem('storedItemsAdicionados')) || [];
      storedItems.push('produto3');
      localStorage.setItem('storedItemsAdicionados', JSON.stringify(storedItems));

      const updatedCartCount = storedItems.length;
      localStorage.setItem('cartCount', updatedCartCount);

      Swal.fire({
        icon: 'success',
        title: 'Produto adicionado ao carrinho!',
        text: 'Seu produto foi adicionado com sucesso ao carrinho.',
      });

      setIsAdded(true);
    }
  };

  return (
    <main>
      Cód.: 1377872
      <div className="container">
        <h1 style={{ fontSize: '24px' }}>Dino T-REX</h1>
        <div className="row justify-content-center">
          <div className="col-md-4 mt-2">
            <img
              src={dinoImage}
              alt="Pelúcia Ovelha"
              className="card-img img-fluid"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="col-sm-12 col-md-8 mt-2">
            <div className="card" style={{ width: '80%', height: 'auto' }}>
              <div className="card-body">
                <h3>Detalhes do produto:</h3>
                <p>
                  Dinossauro Diver Dinos da Planet Kids.
                  Venha Viver Uma Aventura em Um Mundo Onde o Dinossauros Habitavam, Uma Época Onde o Predador Mais Forte Sobrevivia.
                  Curta e Brinque com Esse T-Rex Extinto. o Dinossauro Mede Aproximadamente 25cm de Altura.
                </p>
              </div>
              <div className="card-body bg-light text-center">
                <div className="mb-2">
                  <h6 className="font-weight-semibold mb-2">
                    <a href="#" className="text-default mb-2" data-abc="true">
                      DINO - T-REX
                    </a>
                  </h6>
                  <a href="#" className="text-muted" data-abc="true">
                    <span style={{ textDecoration: 'line-through' }}>R$ 505.00</span>
                  </a>
                </div>
                <h3 className="mb-0 font-weight-semibold">R$ 469.90</h3>
                <div>
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                </div>
                <div className="text-muted mb-3">19 Avaliações</div>
                <button
                  type="button"
                  className="btn bg-cart"
                  id="carrinhoBtn"
                  data-product-id="ovelha"
                  onClick={addToCart}
                >
                  <FaShoppingCart className="mr-2" /> Adicionar ao Carrinho
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Produto3;

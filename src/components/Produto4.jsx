import React, { useState, useEffect } from 'react';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import quadriciculoImage from '../assets/img/carrinho_passeio_2.jpeg';
import Swal from 'sweetalert2';

const Produto4 = () => {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('storedItemsAdicionados')) || [];
    setIsAdded(storedItems.includes('produto4'));
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
      storedItems.push('produto4');
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
      Cód.: 1568123
      <div className="container">
        <h1 style={{ fontSize: '24px' }}>Quadriciclo</h1>
        <div className="row justify-content-center">
          <div className="col-md-4 mt-2">
            <img
              src={quadriciculoImage}
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
                  Um produto com duas funções, prático e moderno para o adulto e divertido para as crianças!
                  FUNÇÃO PASSEIO: O adulto utiliza a haste (direcionável) para conduzir o Smart Quad. Basta colocar o cercado de proteção e o apoio dos pés.
                  FUNÇÃO PEDAL: Permite à criança pedalar livremente como um carro a pedal. Basta remover a haste, o cercado de proteção e o apoio dos pés. Guidão Com lente e luz de LED. Suporte Para garrafa de água, mamadeira ou squeeze (no cercado).
                  Novo sistema de tração Cardan para maior conforto e agilidade ao pedalar. Rodas com anéis de proteção. Apoios removíveis para os pés. Idade: +3 anos. Peso máximo suportado: 35kg.
                  Número do Registro Inmetro: 003840/2021 OCP: 0061.
                </p>
              </div>
              <div className="card-body bg-light text-center">
                <div className="mb-2">
                  <h6 className="font-weight-semibold mb-2">
                    <a href="#" className="text-default mb-2" data-abc="true">
                      Quadriciclo
                    </a>
                  </h6>
                  <a href="#" className="text-muted" data-abc="true">
                    <span style={{ textDecoration: 'line-through' }}>R$ 632.28</span>
                  </a>
                </div>
                <h3 className="mb-0 font-weight-semibold">R$ 600.00</h3>
                <div>
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                </div>
                <div className="text-muted mb-3">49 Avaliações</div>
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

export default Produto4;

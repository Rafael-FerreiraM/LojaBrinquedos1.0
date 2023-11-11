import React, { useState, useEffect } from 'react';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import escavadeiraImage from '../assets/img/escavadeira_3.png';
import Swal from 'sweetalert2';

const Produto6 = () => {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('storedItemsAdicionados')) || [];
    setIsAdded(storedItems.includes('produto6'));
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
      storedItems.push('produto6');
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
      Cód.: 1164257
      <div className="container">
        <h1 style={{ fontSize: '24px' }}>Escavadeira Montável</h1>
        <div className="row justify-content-center">
          <div className="col-md-4 mt-2">
            <img
              src={escavadeiraImage}
              alt="Produto6"
              className="card-img img-fluid"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="col-sm-12 col-md-8 mt-2">
            <div className="card" style={{ width: '80%', height: 'auto' }}>
              <div className="card-body">
                <h3>Detalhes do produto:</h3>
                <p>
                  Seu menino vai adorar brincar com o Mini Veículo Escavadeira da Roma Jensen.
                  Ele irá se sentir um verdadeiro motorista de trator. O mini veículo possui assento confortável, base com movimento, apoio para os pés, alça para engatar e rebocar, porta objetos embaixo do assento e braço articulado.
                  A criança usa as manivelas e o brinquedo faz movimentos similares a uma escavadeira de verdade.
                  Incrível! Uma brincadeira diferente e divertida que as crianças irão adorar.
                  Idade Apropriada: 6 anos ou mais.
                </p>
              </div>
              <div className="card-body bg-light text-center">
                <div className="mb-2">
                  <h6 className="font-weight-semibold mb-2">
                    <a href="/produto6" className="text-default mb-2" data-abc="true">
                      Escavadeira
                    </a>
                  </h6>
                  <a href="/produto6" className="text-muted" data-abc="true">
                    <span style={{ textDecoration: 'line-through' }}>R$ 290.35</span>
                  </a>
                </div>
                <h3 className="mb-0 font-weight-semibold">R$ 274.00</h3>
                <div>
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                </div>
                <div className="text-muted mb-3">32 Avaliações</div>
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

export default Produto6;

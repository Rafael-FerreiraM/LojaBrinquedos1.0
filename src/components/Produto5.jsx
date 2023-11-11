import React, { useState, useEffect } from 'react';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import ferramentasImage from '../assets/img/martelo_3.png';
import Swal from 'sweetalert2';

const Produto5 = () => {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('storedItemsAdicionados')) || [];
    setIsAdded(storedItems.includes('produto5'));
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
      storedItems.push('produto5');
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
      Cód.: 1426189
      <div className="container">
        <h1 style={{ fontSize: '24px' }}>Conjunto Ferramentas</h1>
        <div className="row justify-content-center">
          <div className="col-md-4 mt-2">
            <img
              src={ferramentasImage}
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
                  Com o kit de ferramentas, a criança pode brincar com as ferramentas utilizando a imaginação!
                  A brincadeira é uma reprodução da realidade, o que ajuda no desenvolvimento das crianças.
                  Idade Apropriada: 3 à 6 anos.
                </p>
              </div>
              <div className="card-body bg-light text-center">
                <div className="mb-2">
                  <h6 className="font-weight-semibold mb-2">
                    <a href="#" className="text-default mb-2" data-abc="true">
                      Conjunto Ferramentas
                    </a>
                  </h6>
                  <a href="#" className="text-muted" data-abc="true">
                    <span style={{ textDecoration: 'line-through' }}>R$ 102.67</span>
                  </a>
                </div>
                <h3 className="mb-0 font-weight-semibold">R$ 89.00</h3>
                <div>
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                </div>
                <div className="text-muted mb-3">21 Avaliações</div>
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

export default Produto5;

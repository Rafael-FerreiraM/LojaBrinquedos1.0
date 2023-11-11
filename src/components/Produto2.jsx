import React, { useState, useEffect } from 'react';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import galinhaImage from '../assets/img/galinha_pintada_1.png';
import Swal from 'sweetalert2';

const Produto2 = () => {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('storedItemsAdicionados')) || [];
    setIsAdded(storedItems.includes('produto2'));
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
      storedItems.push('produto2');
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
      Cód.: 1267871
      <div className="container">
        <h1 style={{ fontSize: '24px' }}>Galinha Pintadinha</h1>
        <div className="row justify-content-center">
          <div className="col-md-4 mt-2">
            <img
              src={galinhaImage}
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
                  Galinha em formato de bola, com crista em tecido.
                  Ao tocar ela faz barulhinho de amassado. Encaixe as 5 formas geométricas, associando as formas e tire pelo fundo da Galinha.
                  Fundo, passa mão com material macio.
                  Brinquedo que estimula o sentido da criança.
                  Idade Recomendada 1 a 2 anos

                  Materiais:

                  Plástico - Corpo e figuras (PEAD-Polietileno de Alta Densidade) tampa (PVC) crista tecido de pelúcia.
                  Personagens Galinha Pintadinha.
                </p>
              </div>
              <div className="card-body bg-light text-center">
                <div className="mb-2">
                  <h6 className="font-weight-semibold mb-2">
                    <a href="#" className="text-default mb-2" data-abc="true">
                      Galinha Pintadinha
                    </a>
                  </h6>
                  <a href="#" className="text-muted" data-abc="true">
                    <span style={{ textDecoration: 'line-through' }}>R$ 92.00</span>
                  </a>
                </div>
                <h3 className="mb-0 font-weight-semibold">R$ 79.90</h3>
                <div>
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                </div>
                <div className="text-muted mb-3">27 Avaliações</div>
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

export default Produto2;

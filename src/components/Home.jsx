 /* eslint-disable */
 /* global Landbot */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 
import '../assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../assets/fonts/font-awesome-4.7.0/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/loja.css';

<script SameSite="None; Secure" src="https://cdn.landbot.io/landbot-3/landbot-3.0.0.js"></script>
  

class Home extends React.Component {
  componentDidMount() {
    window.addEventListener('mouseover', initLandbot, { once: true });
window.addEventListener('touchstart', initLandbot, { once: true });
var myLandbot;
function initLandbot() {
  if (!myLandbot) {
    var s = document.createElement('script');s.type = 'text/javascript';s.async = true;
    s.addEventListener('load', function() {
      var myLandbot = new Landbot.Livechat({
        configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-1729508-JMSC85EVJ52AYTRB/index.json',
      });
    });
    s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
  }
}
    const comprarBtn = document.getElementById("comprarBtn");
    const comprarBtn2 = document.getElementById("comprarBtn2");
    const comprarBtn3 = document.getElementById("comprarBtn3");
    const comprarBtn4 = document.getElementById("comprarBtn4");
    const comprarBtn5 = document.getElementById("comprarBtn5");
    const comprarBtn6 = document.getElementById("comprarBtn6");

    comprarBtn.addEventListener("click", () => {
      window.location.href = "/produto1";
    });

    comprarBtn2.addEventListener("click", () => {
      window.location.href = "/produto2";
    });

    comprarBtn3.addEventListener("click", () => {
      window.location.href = "/produto3";
    });

    comprarBtn4.addEventListener("click", () => {
      window.location.href = "/produto4";
    });

    comprarBtn5.addEventListener("click", () => {
      window.location.href = "/produto5";
    });

    comprarBtn6.addEventListener("click", () => {
      window.location.href = "/produto6";
    });
  }

  render() {
    return (
      <main>
        <div className="scrollable-section">
          <h1 className="animated-text" style={{ textAlign: 'center' }}>
            Brinquedos em destaque
          </h1>
          <hr />
          <div className="top-section row">
            {/* Card 1 */}
            <div className="col-md-6 mt-2">
              <div className="card">
                <div className="card-body">
                  <div className="card-img-actions">
                    <img className="card-img img-fluid"
                      src={require('../assets/img/ovelhinha_1.png'
                     )}
                      alt="Ovelha"
                      
                    />
                  </div>
                </div>
                <div className="card-body bg-light text-center">
                  <div className="mb-2">
                    <h6 className="font-weight-semibold mb-2">
                      <a href="/ovelha" className="text-default mb-2" data-abc="true">
                        Ovelha Pelúcia
                      </a>
                    </h6>
                    <a href="/ovelha" className="text-muted" data-abc="true">
                      Pelúcias
                    </a>
                  </div>
                  <h3 className="mb-0 font-weight-semibold">R$ 199.00</h3>
                  <div>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                  </div>
                  <div className="text-muted mb-3">25 Avaliações</div>
                  <button type="button" className="btn bg-cart" id="comprarBtn">
                    <i className="fa fa-cart-plus mr-2"></i> Ver Produto
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-6 mt-2">
              <div className="card">
                <div className="card-body">
                  <div className="card-img-actions">
                  <img className="card-img img-fluid"
                      src={require('../assets/img/galinha_pintada_1.png'
                     )}
                      alt="Galinha"
                      
                    />
                  </div>
                </div>
                <div className="card-body bg-light text-center">
                  <div className="mb-2">
                    <h6 className="font-weight-semibold mb-2">
                      <a href="/galinha" className="text-default mb-2" data-abc="true">
                        Galinha Pintadinha
                      </a>
                    </h6>
                    <a href="/galinha" className="text-muted" data-abc="true">
                      Pelúcias
                    </a>
                  </div>
                  <h3 className="mb-0 font-weight-semibold">R$ 79.90</h3>
                  <div>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                  </div>
                  <div className="text-muted mb-3">27 Avaliações</div>
                  <button type="button" className="btn bg-cart" id="comprarBtn2">
                    <i className="fa fa-cart-plus mr-2"></i> Ver Produto
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-6 mt-2">
              <div className="card">
                <div className="card-body">
                  <div className="card-img-actions">
                  <img className="card-img img-fluid"
                      src={require('../assets/img/dino_2.png'
                     )}
                      alt="Dino"
                      
                    />
                  </div>
                </div>
                <div className="card-body bg-light text-center">
                  <div className="mb-2">
                    <h6 className="font-weight-semibold mb-2">
                      <a href="/dino" className="text-default mb-2" data-abc="true">
                        Dino T-REX
                      </a>
                    </h6>
                    <a href="/dino" className="text-muted" data-abc="true">
                      Bonecos
                    </a>
                  </div>
                  <h3 className="mb-0 font-weight-semibold">R$ 469.00</h3>
                  <div>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                  </div>
                  <div className="text-muted mb-3">19 Avaliações</div>
                  <button type="button" className="btn bg-cart" id="comprarBtn3">
                    <i className="fa fa-cart-plus mr-2"></i> Ver Produto
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-6 mt-2">
              <div className="card ">
                <div className="card-body">
                  <div className="card-img-actions">
                  <img className="card-img img-fluid"
                      src={require('../assets/img/carrinho_passeio_2.jpeg'
                     )}
                      alt="Carrinho"
                      
                    />
                  </div>
                </div>
                <div className="card-body bg-light text-center">
                  <div className="mb-2">
                    <h6 className="font-weight-semibold mb-2">
                      <a href="/quadriciculo" className="text-default mb-2" data-abc="true">
                        Quadriciclo
                      </a>
                    </h6>
                    <a href="/quadriciculo" className="text-muted" data-abc="true">
                      Carrinhos
                    </a>
                  </div>
                  <h3 className="mb-0 font-weight-semibold">R$ 600.00</h3>
                  <div>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                  </div>
                  <div className="text-muted mb-3">49 Avaliações</div>
                  <button type="button" className="btn bg-cart" id="comprarBtn4">
                    <i className="fa fa-cart-plus mr-2"></i> Ver Produto
                  </button>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-md-6 mt-2">
              <div className="card">
                <div className="card-body">
                  <div className="card-img-actions">
                  <img className="card-img img-fluid"
                      src={require('../assets/img/martelo_3.png'
                     )}
                      alt="Ferramentas"
                      
                    />
                  </div>
                </div>
                <div className="card-body bg-light text-center">
                  <div className="mb-2">
                    <h6 className="font-weight-semibold mb-2">
                      <a href="/martelo" className="text-default mb-2" data-abc="true">
                        Conjunto de Ferramentas
                      </a>
                    </h6>
                    <a href="/martelo" className="text-muted" data-abc="true">
                      Bonecos
                    </a>
                  </div>
                  <h3 className="mb-0 font-weight-semibold">R$ 89.00</h3>
                  <div>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                  </div>
                  <div className="text-muted mb-3">21 Avaliações</div>
                  <button type="button" className="btn bg-cart" id="comprarBtn5">
                    <i className="fa fa-cart-plus mr-2"></i> Ver Produto
                  </button>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-md-6 mt-2">
              <div className="card ">
                <div className="card-body">
                  <div className="card-img-actions">
                  <img className="card-img img-fluid"
                      src={require('../assets/img/escavadeira_3.png'
                     )}
                      alt="Escavadeira"
                      
                    />
                  </div>
                </div>
                <div className="card-body bg-light text-center">

                  <div className="mb-2">
                    <h6 className="font-weight-semibold mb-2">
          
                      <a href="/escavadeira" className="text-default mb-2" data-abc="true">
                        Escavadeira
                      </a>
                    </h6>
                    <a href="/escavadeira" className="text-muted" data-abc="true">
                      Carrinhos
                    </a>
                  </div>
                  <h3 className="mb-0 font-weight-semibold">R$ 274.00</h3>
                  <div>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                    <i className="fa fa-star star"></i>
                  </div>
                  <div className="text-muted mb-3">32 Avaliações</div>
                  <button type="button" className="btn bg-cart" id="comprarBtn6">
                    <i className="fa fa-cart-plus mr-2"></i> Ver Produto
                    
                  </button>
                  
                  
                </div>
              </div>
            </div>
          </div>
          <div id="myLandbot" style={{ width: '100%', height: '500px' }}></div>
        </div>

      </main>
    );
  }
}

export default Home;

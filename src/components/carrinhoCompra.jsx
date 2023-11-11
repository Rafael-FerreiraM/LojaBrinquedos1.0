import React, { Component } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2'; // Importe o SweetAlert2
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCreditCard,
  faFileInvoice,
  faDollar,
  faArrowLeft,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import imageBrinquedo1 from '../assets/img/escavadeira_3.png';
import imageBrinquedo2 from '../assets/img/martelo_3.png';
import imageBrinquedo3 from '../assets/img/galinha_pintada_1.png';
import imageBrinquedo4 from '../assets/img/dino_2.png';
import imageBrinquedo5 from '../assets/img/ovelhinha_1.png';
import imageBrinquedo6 from '../assets/img/carrinho_passeio_2.jpeg';

const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #f9f9f9;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const ItemContainer = styled.div`
  flex: 1;
  margin-right: 20px;
  padding: 10px;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 20px;

  img {
    max-width: 100px;
    margin-right: 20px;
    border-radius: 8px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  p {
    margin: 0;
    font-weight: 600;
  }
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const PagamentoContainer = styled.div`
  margin-top: 90px;
  flex-direction: column;
  flex: 1;
  display: flex;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
`;

const PaymentLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor};
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  flex-direction: column;

  .icon {
    margin-right: 10px;
  }
`;

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background-color: blue;
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  width: 20%;

  .icon {
    margin-right: 10px;
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
  margin-top: 20px;

  .subtotal {
    margin-bottom: 10px;
  }
`;

const CupomInput = styled.input`
  background-color: pink;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
`;

const CupomLink = styled(Link)`
  margin-left: 10px;
  font-size: 16px;
`;

const AddressLabel = styled.label`
  font-weight: 600;
`;

const AddressText = styled.div`
  margin-top: 5px;
`;
const AddressContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;


const AddressInput = styled.input`
  background-color: #f9f9f9;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100px;
`;

const SearchButton = styled.button`
  background-color: #0074B7;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;
  padding: 5px 10px;
`;
const AddressInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;
class CarrinhoCompra extends Component {
  state = {
    items: [
      { id: 'produto6', name: "Escavadeira", price: 274.00, visible: false, image: imageBrinquedo1 },
      { id: 'produto5', name: "Conjunto de Ferramentas", price: 89.00, visible: false, image: imageBrinquedo2 },
      { id: 'produto2', name: "Galinha Pintadinha", price: 79.90, visible: false, image: imageBrinquedo3 },
      { id: 'produto3', name: "Dino T-REX", price: 469.00, visible: false, image: imageBrinquedo4 },
      { id: 'produto1', name: "Ovelha da Masha", price: 199.00, visible: false, image: imageBrinquedo5 },
      { id: 'produto4', name: "Quadriciclo", price: 600.00, visible: false, image: imageBrinquedo6 }
    ],
    cupom: '',
    subtotal: '',
    cep: '',
    address: '',
  };

  calculateSubtotal = () => {
    return this.state.items
      .filter((item) => item.visible)
      .reduce((total, item) => total + item.price, 0);
  };

  applyCupom = () => {
    const { cupom } = this.state;
    let subtotal = this.calculateSubtotal();

    if (cupom === 'DIADASCRIANCAS') {
      const discount = subtotal * 0.2;
      subtotal -= discount;
    }

    this.setState({ subtotal: subtotal.toFixed(2) });
  };

  fetchAddress = () => {
    const { cep } = this.state;

    if (/^\d{5}-\d{3}$/.test(cep)) {
      fetch(`https://viacep.com.br/ws/${cep.replace('-', '')}/json/`)
        .then((response) => response.json())
        .then((data) => {
          if (!data.erro) {
            const address = `${data.logradouro}, ${data.bairro}, ${data.localidade}/${data.uf}`;
            this.setState({ address });
          } else {
            console.error('CEP não encontrado');
          }
        })
        .catch((error) => {
          console.error('Erro ao buscar o endereço:', error);
        });
    } else {
      console.error('CEP inválido');
    }
  };

  componentDidMount() {
    const storedItems = JSON.parse(localStorage.getItem('storedItemsAdicionados')) || [];
    const updatedItems = this.state.items.map((item) => ({
      ...item,
      visible: storedItems.includes(item.id),
    }));
    this.setState({ items: updatedItems });
  }

  toggleItemVisibility = (productId) => {
    // Use o SweetAlert2 para mostrar a confirmação
    Swal.fire({
      title: 'Remover Produto',
      text: 'Deseja remover o produto do carrinho?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedItems = this.state.items.map((item) => ({
          ...item,
          visible: item.id === productId ? !item.visible : item.visible,
        }));
        this.setState({ items: updatedItems }, () => {
          const storedItems = updatedItems
            .filter((item) => item.visible)
            .map((item) => item.id);
          localStorage.setItem('storedItemsAdicionados', JSON.stringify(storedItems));
        });
      }
    });
  };

  render() {
    return (
      <CheckoutContainer>
        <ItemContainer>
          <BackButton to="/home">
            <FontAwesomeIcon icon={faArrowLeft} className="icon" />
            Voltar
          </BackButton>
          <h2>Itens no Carrinho</h2>
          {this.state.items.map((item) => (
            item.visible && (
              <Item key={item.id}>
                <img src={item.image} alt={`Brinquedo ${item.id}`} />
                <div>
                  <p>{item.name}</p>
                  <p>R${item.price.toFixed(2)}</p>
                </div>
                <RemoveButton onClick={() => this.toggleItemVisibility(item.id)}>
                  <FontAwesomeIcon icon={faTimesCircle} />
                </RemoveButton>
              </Item>
            )
          ))}
        </ItemContainer>
        <PagamentoContainer>
          <h2>Detalhes de pagamento:</h2>
          <AddressContainer>
            <AddressLabel>CEP:</AddressLabel>
            <AddressInputContainer>
              <AddressInput
                type="text"
                value={this.state.cep}
                onChange={(e) => this.setState({ cep: e.target.value })}
              />
              <SearchButton onClick={this.fetchAddress}>Buscar Endereço</SearchButton>
            </AddressInputContainer>
            {this.state.address && (
              <div>
                <AddressLabel>Endereço:</AddressLabel>
                <AddressText>{this.state.address}</AddressText>
              </div>
            )}
          </AddressContainer>
          <Total>
            <div>
              <label>Cupom: </label>
              <CupomInput
                type="text"
                value={this.state.cupom}
                onChange={(e) => this.setState({ cupom: e.target.value })}
              />
              <button onClick={this.applyCupom}>Aplicar Cupom</button>
              <CupomLink to="/cupom">Ver Cupons</CupomLink>
              <div className="subtotal">Total: R${this.calculateSubtotal().toFixed(2)}</div>
            </div>
          </Total>
          <PaymentLink to="/cartao" backgroundColor="#0074B7">
            <FontAwesomeIcon icon={faCreditCard} className="icon" />
            Pagar com Cartão
          </PaymentLink>
          <PaymentLink to="/boleto" backgroundColor="#FF6347">
            <FontAwesomeIcon icon={faFileInvoice} className="icon" />
            Pagar com Boleto
          </PaymentLink>
          <PaymentLink to="/pix" backgroundColor="#00A300">
            <FontAwesomeIcon icon={faDollar} className="icon" />
            Pagar com Pix
          </PaymentLink>
        </PagamentoContainer>
      </CheckoutContainer>
    );
  }
}

export default CarrinhoCompra;

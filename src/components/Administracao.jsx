import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { BiPencil, BiTrash } from 'react-icons/bi'; 

function Administracao() {
    const buttonStyle = {
        marginRight: '8px', // Adicione o espaçamento desejado
      };
  const [brinquedos, setBrinquedos] = useState([
    { id: 1, descricao: 'Ovelha Masha', categoria: 'Pelúcias', valor: 'R$199.00' },
    { id: 2, descricao: 'Galinha Pintadinha', categoria: 'Pelúcias', valor: 'R$79.90' },
    { id: 3, descricao: 'Dino T-REX', categoria: 'Bonecos', valor: 'R$469.00' },
    { id: 4, descricao: 'Quadricicúlo', categoria: 'Carrinhos', valor: 'R$600.00' },
    { id: 5, descricao: 'Conjunto Ferramentas', categoria: 'Bonecos', valor: 'R$89.00' },
    { id: 6, descricao: 'Escavadeira', categoria: 'Carrinhos', valor: 'R$274.00' },
  ]);

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showLimitAlert, setShowLimitAlert] = useState(false);
  const [selectedBrinquedoId, setSelectedBrinquedoId] = useState(null);

  const excluirRegistro = (id) => {
    setSelectedBrinquedoId(id);
    setShowDeleteConfirmation(true);
  };

  const confirmExcluirRegistro = () => {
    //IMPLEMENTAR JSP
    if (selectedBrinquedoId) {
      fetch(`/sua-rota-de-exclusao/${selectedBrinquedoId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (response.ok) {
            // Atualiza o estado para refletir a exclusão
            const novoBrinquedos = brinquedos.filter(
              (brinquedo) => brinquedo.id !== selectedBrinquedoId
            );
            setBrinquedos(novoBrinquedos);
          }
          setShowDeleteConfirmation(false);
        })
        .catch((error) => {
          console.error('Erro ao excluir:', error);
        });
      }
    if (selectedBrinquedoId) {
      const novoBrinquedos = brinquedos.filter((brinquedo) => brinquedo.id !== selectedBrinquedoId);
      setBrinquedos(novoBrinquedos);

      

      setShowDeleteConfirmation(false);
    }
  };

  const cancelExcluirRegistro = () => {
    setSelectedBrinquedoId(null);
    setShowDeleteConfirmation(false);
  };

  const redirectToNovoBrinquedo = () => {
    if (brinquedos.length >= 6) {
      setShowLimitAlert(true);
    } else {
   
      window.location.href = '/cadastrarBrinquedo';
    }
  };

  const confirmLimitAlert = () => {
    setShowLimitAlert(false);
  };

  return (
    <main className="pagina-administracao">
      <h1> Catálogo de Brinquedos :: Administração</h1>
      <hr />
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {brinquedos.map((brinquedo) => (
            <tr key={brinquedo.id}>
              <td>{brinquedo.descricao}</td>
              <td>{brinquedo.categoria}</td>
              <td>{brinquedo.valor}</td>
              <td>
                <a href="/editarBrinquedo" className="btn btn-primary" style={buttonStyle} id="editarButton">
                  <BiPencil /> Editar
                </a>
                <button
                  className="btn btn-danger"
                  style={buttonStyle} // Adicione o estilo aos botões de Excluir
                  onClick={() => excluirRegistro(brinquedo.id)}
                >
                  <BiTrash /> Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="button"
        className="btn btn-success"
        id="novoBrinquedoBtn"
        onClick={redirectToNovoBrinquedo}
      >
        Novo Brinquedo
      </button>
      {showDeleteConfirmation && (
        <SwalConfirmDelete confirmExcluirRegistro={confirmExcluirRegistro} cancelExcluirRegistro={cancelExcluirRegistro} />
      )}
      {showLimitAlert && (
        <SwalLimitAlert confirmLimitAlert={confirmLimitAlert} />
      )}
    </main>
  );
}

function SwalConfirmDelete({ confirmExcluirRegistro, cancelExcluirRegistro }) {
  Swal.fire({
    icon: 'warning',
    title: 'Tem certeza que deseja excluir?',
    showCancelButton: true,
    confirmButtonText: 'Sim',
    cancelButtonText: 'Não',
  }).then((result) => {
    if (result.isConfirmed) {
      confirmExcluirRegistro();
    } else {
      cancelExcluirRegistro();
    }
  });

  return null;
}


function SwalLimitAlert({ confirmLimitAlert }) {
  Swal.fire({
    icon: 'warning',
    title: 'Aviso',
    text: 'Só é permitido conter 6 brinquedos na loja.',
    confirmButtonText: 'OK',
  }).then(() => {
    confirmLimitAlert();
  });

  return null;
}

export default Administracao;
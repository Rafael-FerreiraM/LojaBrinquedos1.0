import React, { useState } from 'react';

function EditarBrinquedo() {
    const [formData, setFormData] = useState({
        codigo: '',
        descricao: '',
        categoria: '',
        marca: '',
        imagem: null,
        valor: '',
        detalhes: '',
      });
      const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    
      const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        const newValue = type === 'file' ? files[0] : value;
    
        setFormData({
          ...formData,
          [name]: newValue,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const url = 'seu-arquivo-jsp.jsp'; // Substitua pelo URL do arquivo JSP
    
        const formDataToSend = new FormData();
        for (const key in formData) {
          if (key === 'imagem') {
            formDataToSend.append(key, formData[key]);
          } else {
            formDataToSend.append(key, formData[key]);
          }
        }
    
        fetch(url, {
          method: 'POST',
          body: formDataToSend,
        })
          .then((response) => response.json())
          .then((data) => {
            // Trate a resposta da solicitação se necessário
            setIsFormSubmitted(true); 
          })
          .catch((error) => {
            // Trate erros se necessário
          });
      };
  return (
    <main>
      <h1>Catálogo de Brinquedos :: Editar Brinquedo</h1>
      <hr />
      {isFormSubmitted ? (
        <div className="alert alert-success">
          Formulário enviado com sucesso!
        </div>
      ) : null}
      {/* Formulário */}
      <form id="novoBrinquedoForm" encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="codigo" className="form-label">
              Código:
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="codigo"
              name="codigo"
              style={{ maxWidth: '100px' }}
              readOnly
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="descricao" className="form-label">
              Descrição:
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="descricao"
              name="descricao"
              style={{ maxWidth: '350px' }}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="categoria" className="form-label">
              Categoria:
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="categoria"
              name="categoria"
              style={{ maxWidth: '200px' }}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="marca" className="form-label">
              Marca:
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="marca"
              name="marca"
              style={{ maxWidth: '200px' }}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="imagem" className="form-label">
              Imagem:
            </label>
            <input
              type="file"
              className="form-control form-control-sm"
              id="imagem"
              name="imagem"
              style={{ maxWidth: '400px' }}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="valor" className="form-label">
              Valor:
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="valor"
              name="valor"
              style={{ maxWidth: '200px' }}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="detalhes" className="form-label">
            Detalhes:
          </label>
          <textarea
            className="form-control"
            id="detalhes"
            name="detalhes"
            rows="4"
            style={{ maxWidth: '700px' }}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-success ml-3 mr-3">
          Salvar Edição
        </button>
      </form>

     
    </main>
  );
}

export default EditarBrinquedo;

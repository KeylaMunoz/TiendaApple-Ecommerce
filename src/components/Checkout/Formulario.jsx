import './formulario.css'

const Formulario = ({datosForm, handleChangeInput, handleSubmitForm}) => {
  return (
  <div>
    <p className='titulo-orden'>Completa con tus datos</p>
    <div className="contenedor-formulario">
      <form onSubmit={handleSubmitForm}> 
        <label>Nombre:</label>
        <input type="text" name="nombre" value={datosForm.nombre} onChange={handleChangeInput} />

        <label>Telefono:</label>
        <input type="number" name="telefono" value={datosForm.telefono} onChange={handleChangeInput}/>
        
        <label>Email:</label>
        <input type="email" name="email" value={datosForm.email} onChange={handleChangeInput}/>

        <label>Confirma tu Email:</label>
        <input type="email" name="confirmarEmail" value={datosForm.confirmarEmail} onChange={handleChangeInput}/>


        <button className="submit" type='submit'>Confirmar orden</button>
      </form>
    </div>
  </div>
  )
}

export default Formulario

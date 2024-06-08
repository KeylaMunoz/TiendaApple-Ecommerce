import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="contenedor-footer">
            
        <div className='footer1'>
                <a className='link' href="">Política de Privacidad</a>
                <a className='link' href="">Centro de Ayuda</a>
                <a className='link' href="#about">Configuración</a>
                <a className='link' href="#home">Blog</a>
            </div>
            <div className='footer2'>
                <p>&copy; 2024 Apple. Todos los derechos reservados.</p>
                <p>Última actualización: 5 de junio de 2024</p>
                <p>Versión 1.2.0</p>
            </div>
        </div>
    </footer>

  )
}

export default Footer

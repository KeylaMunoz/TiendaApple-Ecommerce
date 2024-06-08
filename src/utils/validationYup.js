import { mixed, object, string, ref } from "yup";

let userEsquema = object ({
    nombre: string().required("Nombre es requerido"),
    telefono: mixed().required("Teléfono es requerido"),
    email: string().email("Email no tiene el formato correcto con @").required("Email es requerido"),
    confirmarEmail: string().oneOf([ref('email'), null], 'Los campos no coinciden').required('Confirmar Email es requerido')
})

const validacionForm = async(datosForm) => {
    try{
        await userEsquema.validate(datosForm)
        return { status: "exitoso" }
    } catch (error) {
        return { status: "error", message: error.message }
    }
}

export default validacionForm
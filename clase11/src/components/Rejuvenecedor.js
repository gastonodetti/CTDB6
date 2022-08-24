import { useState } from 'react'
import Swal from 'sweetalert2'


const Rejuvenecedor = () => {

    const [data, setData] = useState({
        nombre: '',
        edad: 0
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        validateName()
        validateAge()
    
        validateAge() && validateName() ? 
       Swal.fire({
        title: `Hola ${data.nombre}! `,
        text: `Tu nueva edad es ${calculateNewAge(data.edad)}`,
        icon: 'info',
        confirmButtonText: 'Ok'
       }) :
       Swal.fire({
        title: 'Error!',
        text: 'El nombre debe tener minimo 2 caracteres y la edad debe ser mayor a cero',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }

    const validateName = () => {
        return data.nombre.length > 1
    }

    const validateAge = () => {
        return data.edad > 0
    }

    const calculateNewAge = (age) => {
        return age - 10
    }

    const handleChange = (eventTarget) =>{
        if (eventTarget.name === 'nombre') {
            setData({
                nombre: eventTarget.value,
                edad: data.edad
            })
        }
        if (eventTarget.name === 'edad') {
            setData({
                nombre: data.nombre,
                edad: eventTarget.value
            })
        }
    }

    return (
        <div>
            <form>
                <label>Nombre</label>
                <input onChange={(event) => handleChange(event.target)} name='nombre' type='text'/>
                <label>Edad</label>
                <input onChange={(event) => handleChange(event.target)} name='edad' type='number' min="0.1"/>
                <input type='submit' onClick={handleSubmit}  value='Enviar' />
            </form>
        </div>
    )
}

export default Rejuvenecedor
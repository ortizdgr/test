import { useState } from "react"
import Alert from "./Alert";


const Formulario = ({ datos, setDatosB, dataFiltro, setDataFiltro, alert, setAlert }) => {
  const [formularioData, setFormularioData] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: ''
    })

  const validarFormulario = (e) => {
    e.preventDefault();

    const { nombre, correo, edad, cargo, telefono } = formularioData;
    const validarInput = !nombre || !correo || !edad || !cargo || !telefono;
    const formatoEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    const validarEmail = !formatoEmail.test(correo)

      if (validarInput) {

        setAlert({
          error: true,
          msg: 'Complete los campos',
          color: 'danger',
        })

        return
        }

        else {
          setAlert({
            error: false,
            msg: 'Colaborador agregado exitosamente',
            color: 'success',
          });
        }

        if (validarEmail) {
          setAlert({
            error: true,
            msg: 'email incorrecto',
            color: 'danger'
          })
          
          return
        }

        setDatosB([...datos, { ...formularioData, id: 8 }])
        setDataFiltro([...dataFiltro, { ...formularioData, id: 8 }])

        setFormularioData({
            nombre: '',
            correo: '',
            edad: '',
            cargo: '',
            telefono: ''

        });
    }

    const handlerChange = (e) => {
        setFormularioData({
            ...formularioData, [e.target.name]: e.target.value
        })
    }

  return (
    <>
      <div id="contenedor">
        <div id="central">
          <div id="login">
            <div className="titulo">
              AGREGAR NUEVO COLABORADOR
            </div>
          <form
            id="loginform"
            onSubmit={validarFormulario}>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              onChange={handlerChange}
              value={formularioData.nombre} 
            />
            <input
              type="email"
              name="correo"
              placeholder="Email"
              onChange={handlerChange}
              value={formularioData.correo} 
            />
            <input
              type="text"
              name="edad"
              placeholder="Edad"
              onChange={handlerChange}
              value={formularioData.edad} 
            />
            <input
              type="text"
              name="cargo"
              placeholder="Cargo"
              onChange={handlerChange}
              value={formularioData.cargo} 
            />
            <input
              type="text"
              name="telefono"
              placeholder="Telefono"
              onChange={handlerChange}
              value={formularioData.telefono} 
            />
            <button
              type="submit"
              name="Ingresar">
              Ingresar
            </button>
          </form>
          {alert.msg && <Alert color={alert.color} messagge={alert.msg} ></Alert>}
          </div>
        </div>
      </div>
    </>
    )
}

export default Formulario
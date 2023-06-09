import { useState } from "react"
import useProyectos from "../hooks/useProyectos"
import Alerta from "./Alerta"

const FormularioProyecto = () => {

  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [fechaEntrega, setFechaEntrega] = useState('')
  const [cliente, setCliente] = useState('')

  const { mostrarAlerta, alerta, submitProyecto } = useProyectos()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if ([nombre, descripcion, fechaEntrega, cliente].includes('')) {
      mostrarAlerta({
        msg: 'Todos los campos so Obligatorios',
        error: true
      })
      return
    }
    // Pasar los datos hacia el provider
    await submitProyecto({
      nombre, descripcion, fechaEntrega, cliente
    })

    setNombre('')
    setDescripcion('')
    setFechaEntrega('')
    setCliente('')

  }

  const { msg } = alerta

  return (
    <form onSubmit={handleSubmit} className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow">

      {msg && <Alerta alerta={alerta} />}

      <div className="mb-5">
        <label htmlFor="nombre"
          className="text-gray-700 uppercase font-bold text-sm">Nombre Proyecto</label>

        <input
          type="text"
          name="nombre"
          id="nombre"
          className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Nombre del proyecto"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />

      </div>

      <div className="mb-5">
        <label htmlFor="descripcion"
          className="text-gray-700 uppercase font-bold text-sm">Descripción </label>

        <textarea
          name="descripcion"
          id="descripcion"
          className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Descripcion del proyecto"
          value={descripcion}
          onChange={e => setDescripcion(e.target.value)}
        />

      </div>

      <div className="mb-5">
        <label htmlFor="fecha-entrega"
          className="text-gray-700 uppercase font-bold text-sm">Fecha de Entrega</label>

        <input
          type="date"
          name="fecha-entrega"
          id="fecha-entrega"
          className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={fechaEntrega}
          onChange={e => setFechaEntrega(e.target.value)}
        />

      </div>

      <div className="mb-5">
        <label htmlFor="cliente"
          className="text-gray-700 uppercase font-bold text-sm">Cliente</label>

        <input
          type="text"
          name="cliente"
          id="cliente"
          className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Cliente del proyecto"
          value={cliente}
          onChange={e => setCliente(e.target.value)}
        />

      </div>

      <input type="submit" value='Crear Proyecto' className="bg-sky-600 w-full p-3 uppercase font-bold text-white rounded cursor-pointer hover:bg-sky-700 transition-all" />
    </form>
  )
}

export default FormularioProyecto
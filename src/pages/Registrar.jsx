import { Link } from "react-router-dom"

const Registrar = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-5xl capitalize">Crea tu cuenta y administra tus
        <span className="text-slate-700"> proyectos</span>
      </h1>

      <form action="" className="my-10 bg-white shadow rounded-lg px-10 py-5">
        <div className="my-5 ">
          <label htmlFor="nombre" className="uppercase text-gray-600 block text-xl font-bold">Nombre:</label>
          <input
            id="nombre"
            type="text"
            placeholder="Tu nombre"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <div className="my-5 ">
          <label htmlFor="email" className="uppercase text-gray-600 block text-xl font-bold">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <div className="my-5 ">
          <label htmlFor="password" className="uppercase text-gray-600 block text-xl font-bold">Contraseña</label>
          <input
            id="password"
            type="password"
            placeholder="Contraseña de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <div className="my-5 ">
          <label htmlFor="password2" className="uppercase text-gray-600 block text-xl font-bold">Repite tu Contraseña</label>
          <input
            id="password2"
            type="password"
            placeholder="Repite tu contraseña"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <input
          type="submit"
          value="Crear Cuenta"
          className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>

      <nav className="lg:flex lg justify-between">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/"
        >¿Ya tienes una cuenta? Inicia Sesión</Link>

        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/olvide-password"
        >Olvide mi contraseña</Link>
      </nav>

    </>
  )
}

export default Registrar
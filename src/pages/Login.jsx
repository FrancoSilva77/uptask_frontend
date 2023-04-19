import { Link } from "react-router-dom"

export const Login = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-5xl capitalize">Inicia Sesión y administra tus
        <span className="text-slate-700"> proyectos</span>
      </h1>

      <form action="" className="my-10 bg-white shadow rounded-lg px-10 py-5">
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
          <label htmlFor="password" className="uppercase text-gray-600 block text-xl font-bold">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Contraseña de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <input
          type="submit"
          value="Iniciar Sesión"
          className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>

      <nav className="lg:flex lg justify-between">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/registrar"
        >¿No tienes una cuenta? Registrate</Link>

        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/olvide-password"
        >Olvide mi contraseña</Link>
      </nav>

    </>
  )
}

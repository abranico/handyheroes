const Register = () => {
  return (
        <>
        <header className=" mx-14 items-center p-6">
          <nav className="flex justify-between">
            <a className="flex items-center cursor-pointer hover:opacity-60">

                <img src="logo.png" alt="HandyHeroes Logo" className="w-8 rounded-full" />
                <h1 className="text-2xl font-bold text-blue-900 ml-2">HandyHeroes</h1>

            </a>
            <div className="flex gap-5 items-center">
            <a href="" className="text-gray-500 hover:opacity-60">¿Ya eres usuario?</a>
            <button className="border border-black px-5 py-1 rounded hover:opacity-60 ">Iniciar sesión</button>
            </div>
          </nav>

        </header>
        <main className="mt-6 max-w-lg mx-auto">
        <h2 className="font-bold text-3xl text-gray-600 text-center ">Ingresa tu Información Básica</h2>
        <form className="mt-12 w-full">
        <div className="mb-4 w-full">
            <input type="text" placeholder="Nombre de Usuario" className="appearance-none border border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-gray-500  text-gray-700" />
        </div>
        <div className="mb-4 flex gap-3">
            <input type="text" placeholder="Nombre" className="appearance-none border border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-gray-500  text-gray-700" />
            <input type="text" placeholder="Apellido" className="appearance-none border border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-gray-500  text-gray-700" />
        </div>
        <div className="mb-4 w-full">
            <input type="email" placeholder="Correo Electrónico" className="appearance-none border border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-gray-500  text-gray-700" />
        </div>
        <div className="mb-4 w-full">
            <input type="password" placeholder="Contraseña" className="appearance-none border border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-gray-500  text-gray-700" />
        </div>
        <div className="mb-4 w-full">
            <input type="password" placeholder="Repetir Contraseña" className="appearance-none border border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-gray-500  text-gray-700" />
        </div>
        <div>
        <button
           className="bg-blue-500 w-full text-white px-6 py-3 rounded-md mr-2 transition duration-300 hover:bg-blue-600 font-bold">SIGUIENTE</button>
        </div>

    </form>
        </main>
        </>
  )
}

export default Register

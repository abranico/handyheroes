import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <div className="h-screen flex flex-col">
      <header className="flex justify-between mx-14 items-center p-6">
        <div className="flex items-center">
          <img
            src="logo.png"
            alt="HandyHeroes Logo"
            className="w-8 rounded-full"
          />
          <h1 className="text-2xl font-bold text-blue-900 ml-2">HandyHeroes</h1>
        </div>
        <Link to="/login" className="bg-blue-500 text-white px-10 py-2 rounded-lg hover:bg-blue-600 font-bold">
          Unirse
        </Link>
      </header>

      <main className="flex items-start justify-center mx-14 p-6 mb-20 ">
        <div className="w-full flex items-center justify-around">
        <div className="flex flex-col gap-7">
          <h2 className="text-4xl font-bold text-blue-900">
            Uniendo Oficios y Hogares.
          </h2>
          <p className="text-gray-700 mt-4 max-w-lg">
            Conectando a quienes necesitan ayuda en el hogar con expertos
            dispuestos a brindarla: HandyHeroes, donde se encuentran la demanda
            y la oferta de servicios domÃ©sticos.
          </p>
          <div className="mt-6">
            <Link to="/login" className="bg-blue-500 text-white px-6 py-3 rounded-md mr-2 transition duration-300 hover:bg-blue-600 font-bold">
              BUSCAR PROFESIONAL
            </Link>
            <Link to="/login" className="bg-purple-500 text-white px-6 py-3 rounded-md ml-2 transition duration-300 hover:bg-purple-600 font-bold">
              OFRECER SERVICIO
            </Link>
          </div>
        </div>
        <div className="mt-10">
          <img
            src="logo.png"
            alt="Handy Illustration"
            className="max-w-80 h-auto rounded-3xl"
          />
        </div>
        </div>
      </main>

      <footer className="bg-blue-900 text-white text-center py-10 h-full ">
        <div className="flex justify-center space-x-4">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-facebook"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-x"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-instagram"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M16.5 7.5l0 .01" />
            </svg>
          </a>
        </div>
        <p className="mt-4">&copy; Copyright 2024 - HandyHeroes</p>
      </footer>
    </div>
  )
}

export default Landing

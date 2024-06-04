import { useState } from 'react'

import BasicData from './components/basicData/BasicData'
import ChooseRol from './components/chooseRol/ChooseRol'

const Register = () => {
  const [basicData, setBasicData] = useState(false)
  const [rol, setRol] = useState(null)

  const handleCompleteBasicData = () => {
    setBasicData(!basicData)
  }

  const handleSetRol = ($rol) => {
    if (rol === $rol) return setRol(null)
    setRol($rol)
  }

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

        {
            !basicData
              ? <BasicData onCompleteBasicData={handleCompleteBasicData}/>
              : <ChooseRol onCompleteBasicData={handleCompleteBasicData} onSetRol={handleSetRol} rol={rol} />
        }

        </>
  )
}

export default Register

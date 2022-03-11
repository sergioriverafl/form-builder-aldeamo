import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (

    <React.Fragment>
      <div className="container mx-auto">

        <div className='flex flex-col gap-4'>

          <div className='flex items-center justify-between gap-2'>
            <h1 className='font-semibold text-xl'>Inicio</h1>

            <Link to="/form-builder/" className='px-4 py-2 bg-indigo-500 font-semibold text-white rounded-md'>Crear formulario</Link>
          </div>

        </div>
        
      </div>
    </React.Fragment>

  );
}

export default Home;

'use client';
import { PacmanLoader } from 'react-spinners';

type Props = {

};

const Loader = (props: Props) => {
  return (
    <div className='h-[70vh] flex flex-col justify-center items-center'>
        <p className='text-[33px] text-green-600 mb-12 mt-14'>Loading...</p>
        <PacmanLoader size={70} color='green' className='ml-[-175px]'/>
    </div>
  )
}

export default Loader;
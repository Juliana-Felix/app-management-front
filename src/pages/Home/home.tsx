import {  useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


export default function Home() {
  const isDarkMode = useSelector((state: RootState) => state.settings.isDarkMode);

  return ( 
      <div className="flex h-5/6">
        <div className="w-1/5">Div 1</div>
        <div className={`w-3/6 rounded-3xl ${isDarkMode ? 'bg-indigo-500 text-zinc-50' : 'bg-violet-200 text-black'} `}>Div 2</div>
        <div className="w-4/12">
          <p className='mt-5 ml-5 text-xl'>Usuários</p>
          <hr/>
        </div>
      </div>
  )
}
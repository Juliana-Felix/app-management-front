import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Card from '../../components/card';
import Signin from '../signup';
import Login from '../signin';


export default function Home() {
  const isDarkMode = useSelector((state: RootState) => state.settings.isDarkMode);

  return (
    <div className="flex h-5/6">
      <Signin></Signin>
      <div className="w-1/12">Div 1</div>
      <div className={`w-3/5 rounded-3xl ${isDarkMode ? 'bg-indigo-500 text-zinc-50' : 'bg-violet-200 text-black'} `}>
        <p className='mt-5 ml-5 text-xl'>Reuniões</p>
        <Card></Card>
      </div>
      <div className="w-4/12">
        <p className='mt-5 ml-5 text-xl'>Usuários</p>
        <hr />
        <Login></Login>
      </div>
    </div>
  )
}
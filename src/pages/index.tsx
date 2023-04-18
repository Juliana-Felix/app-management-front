import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../redux/slices/settings/settingSlice';
import { RootState } from '../redux/store';
import Home from './Home/home';

function Pages() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.settings.isDarkMode);

  function handleClick() {
    dispatch(toggleDarkMode());
  }

  return (
    <div className={`h-screen ${isDarkMode ? 'bg-black text-zinc-50' : 'bg-white text-black'}`}>
      <button onClick={handleClick}>Toggle Dark Mode</button>
      <h1>oioi</h1>
      <Home></Home>
    </div>
  );
}

export default Pages;
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
      <div className='flex items-center'>
        <button onClick={handleClick}>Toggle Dark Mode</button>
        <div className="inline-flex rounded-full bg-white py-2 px-4">
          <input type="text" placeholder="Pesquisar" className="bg-transparent outline-none" />
          <button type="submit" className="outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1213 14.1213C14.5118 13.7308 14.5118 13.0976 14.1213 12.7071L10.4142 9L14.1213 5.29289C14.5118 4.90237 14.5118 4.26915 14.1213 3.87868C13.7308 3.48816 13.0976 3.48816 12.7071 3.87868L9 7.58579L5.29289 3.87868C4.90237 3.48816 4.26915 3.48816 3.87868 3.87868C3.48816 4.26915 3.48816 4.90237 3.87868 5.29289L7.58579 9L3.87868 12.7071C3.48816 13.0976 3.48816 13.7308 3.87868 14.1213C4.06987 14.3125 4.32717 14.4066 4.58449 14.4066C4.84179 14.4066 5.0991 14.3125 5.29289 14.1213L9 10.4142L12.7071 14.1213C12.9009 14.3125 13.1582 14.4066 13.4155 14.4066C13.6728 14.4066 13.9301 14.3125 14.1213 14.1213Z" fill="#9CA3AF" />
            </svg>
          </button>
        </div>
      </div>
      <h1>oioi</h1>
      <Home></Home>
    </div>
  );
}

export default Pages;
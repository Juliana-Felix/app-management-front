import axios from "axios";
import { useState } from "react";
import { api } from "../service/api.js";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store.js";


export default function Card() {

  let isAuthorized = useSelector((state: RootState) => state.user.authorized);

  const config = {
    headers: { Authorization: `Bearer ${isAuthorized.access_token}` }
  };

  const [formData, setFormData] = useState({
    name: '',
    year: '',
    cast: '',
    genre: '',
    classification: '',
    director: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário

    try {
      const res = await api.post("/movies", { ...formData }, config);
      console.log('deu bom')
    } catch (err) {
      console.log(config)
      console.log(err)
      console.log(formData);
      console.log(isAuthorized)
    }
  };

  return (
    <div className="w-full max-w-xs">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="year">
            Year
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="year"
            name="year"
            type="text"
            placeholder="Year"
            value={formData.year}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="cast">
            Cast
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cast"
            name="cast"
            type="text"
            placeholder="Cast"
            value={formData.cast}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="genre">
            Genre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="genre"
            name="genre"
            type="text"
            placeholder="Genre"
            value={formData.genre}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="classification">
            Classification
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="classification"
            name="classification"
            type="text"
            placeholder="Classification"
            value={formData.classification}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="director">
            director
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="director"
            name="director"
            type="text"
            placeholder="director"
            value={formData.director}
            onChange={handleChange}
          />
        </div>
        <button>send</button>
      </form>

    </div>
  )
}
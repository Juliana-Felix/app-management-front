import axios from "axios";
import { useState } from "react";
import { api } from "../service/api.js";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store.js";
import { toggleAuthorized } from "../redux/slices/user/tokenSlice.js";

export default function Login() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    try {
      const res = await api.post("/auth", { ...formData });
      dispatch(toggleAuthorized(res.data)); // Despacha a ação para atualizar o estado com o valor de res.data
      // handleClick();
      console.log(res.data)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full max-w-xs">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="text"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cast"
            name="password"
            type="text"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button>send</button>
      </form>

    </div>
  )
}
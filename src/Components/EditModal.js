import React, { useState } from "react";
import axios from "axios";

function EditModal({ selectedPerson, closeEditModal }) {
  const [formData, setFormData] = useState({
    id: selectedPerson.id,
    name: selectedPerson.name,
    email: selectedPerson.email,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(process.env.REACT_APP_API_URL, formData);
      console.log(response.data); // Manejar la respuesta del backend
      closeEditModal(); // Cerrar el formulario flotante
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div
        class="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 backdrop-blur-sm"
        id="modal"
      >
        <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
          <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
            <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
              Editar persona
            </h1>
            <label
              for="name"
              class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Nombre
            </label>
            <input
              id="name"
              name="name"
              class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder={selectedPerson?.name || "Nombre"}
              value={formData.name}
              onChange={handleChange}
            />
            <label
              for="name"
              class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder={selectedPerson?.email || "Email"}
              value={formData.email}
              onChange={handleChange}
            />
            <div class="flex items-center justify-start w-full">
              <button
                class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
                onClick={handleSubmit}
              >
                Editar
              </button>
              <button
                class="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                onClick={() => closeEditModal()}
              >
                Cancelar
              </button>
            </div>
            <button
              class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
              onClick={() => closeEditModal()}
              aria-label="close modal"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-x"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal;

import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonTableItem from "../Components/PersonTableItem";
import EditModal from "../Components/EditModal";
import CreateModal from "../Components/CreateModal";

function HomePage() {
  const [data, setData] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const config = {
    headers: {
      Accept: "application/json", // Establecer el tipo de contenido que el servidor debe devolver
    },
  };

  useEffect(() => {
    fetchData();
  }, []);

  function closeEditModal() {
    setIsEditModalOpen(false);
    setSelectedPerson(null);
  }

  function openEditModal(selectedItem) {
    setIsEditModalOpen(true);
    setSelectedPerson(selectedItem);
  }

  function closeCreateModal() {
    setIsCreateModalOpen(false);
  }

  function openCreateModal() {
    setIsCreateModalOpen(true);
  }

  const fetchData = async () => {
    try {
      const requestInterceptor = axios.interceptors.request.use((config) => {
        // Log the request data
        console.log("Request:", config);
        console.log("Request URL:", config.url);
        console.log("Request Method:", config.method);
        console.log("Request Headers:", config.headers);

        // You must return the config object after logging it
        return config;
      });
      const response = await axios.get(process.env.API_URL, config);
      console.log(response);
      setData(response.data);
      setData([
        { id: 1, name: "John Doe", email: "johndoe@example.com" },
        { id: 2, name: "Jane Smith", email: "janesmith@example.com" },
        { id: 3, name: "Bob Johnson", email: "bobjohnson@example.com" },
      ]);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-screen">
      <div className="w-full h-20 p-4 text-white bg-slate-900">
        <h1 className="text-2xl font-bold">Laboratorio 1</h1>
        <p className="text-lg">Computación Distribuida y en la Nube</p>
      </div>
      <div>
        <div className="flex justify-between w-full m-5">
          <h1 className="text-xl font-bold">Personas</h1>
          <div
            className="flex flex-col content-center justify-center w-48 h-12 mr-10 font-bold text-center text-white bg-green-500 rounded-2xl text-md hover:bg-green-900"
            onClick={() => openCreateModal()}
          >
            Añadir Persona
          </div>
          <div
            className="flex flex-col content-center justify-center w-48 h-12 mr-10 font-bold text-center text-white bg-green-500 rounded-2xl text-md hover:bg-green-900"
            onClick={() => fetchData()}
          >
            Recargar
          </div>
        </div>
        <div className="m-5 overflow-hidden border border-gray-200 rounded-lg shadow-md">
          <table className="w-full text-sm text-left text-gray-500 bg-white border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Name
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-medium text-gray-900"
                ></th>
              </tr>
            </thead>
            <tbody className="border-t border-gray-100 divide-y divide-gray-100">
              {data?.map((item) => (
                <PersonTableItem
                  id={item.id}
                  item={item}
                  openEditModal={openEditModal}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full font-mono text-center">Por: Los Sebases x3</div>
      </div>
      {isEditModalOpen && (
        <EditModal
          selectedPerson={selectedPerson}
          closeEditModal={closeEditModal}
        />
      )}
      {isCreateModalOpen && <CreateModal closeCreateModal={closeCreateModal} />}
    </div>
  );
}

export default HomePage;

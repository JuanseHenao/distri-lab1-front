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
      const response = await axios.get("http://localhost:5000/");
      setData(response.data);
      /* setData([
        { id: 1, name: "John Doe", email: "johndoe@example.com" },
        { id: 2, name: "Jane Smith", email: "janesmith@example.com" },
        { id: 3, name: "Bob Johnson", email: "bobjohnson@example.com" },
      ]);
      console.log(data); */
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
            class="h-12 w-48 rounded-2xl bg-green-500 text-md font-bold text-white mr-10 text-center flex justify-center content-center flex-col hover:bg-green-900"
            onClick={() => openCreateModal()}
          >
            Añadir Persona
          </div>
        </div>
        <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
          <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Name
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Email
                </th>
                <th
                  scope="col"
                  class="px-6 py-4 font-medium text-gray-900"
                ></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 border-t border-gray-100">
              {data.map((item) => (
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

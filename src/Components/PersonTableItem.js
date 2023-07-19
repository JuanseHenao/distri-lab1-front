import React from "react";

function PersonTableItem({ item, openEditModal }) {
  let chiguiArray = [
    "https://pbs.twimg.com/media/CsvGcK9WcAAvESu.jpg",
    "https://i.pinimg.com/736x/83/dd/e4/83dde45e11c8995fb0d0beca35dd8c31.jpg",
    "https://i.pinimg.com/originals/3f/15/24/3f1524fd76525a00e1ec070f010c42a4.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoNUbebPhUKn4wepcuEN67VcFgKlX1nLjTg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4F8dVwHbNu6GSq6rgmD0Xv8qE0Qv4ZOwyvw&usqp=CAU",
    "https://preview.redd.it/well-dressed-capybara-v0-72fwh7xfuq591.jpg?width=535&format=pjpg&auto=webp&s=d04ddae4ff5a154ae19cb0a71dc11f107bbdab45",
    "https://pbs.twimg.com/media/FeLptFYWAAMgvwj.jpg",
  ];

  return (
    <tr class="hover:bg-gray-50">
      <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
        <div class="relative h-10 w-10">
          <img
            class="h-full w-full rounded-full object-cover object-center"
            src={chiguiArray[Math.floor(Math.random() * chiguiArray.length)]}
          />
          <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
        </div>
        <div class="text-sm flex">
          <div class="font-medium text-gray-700 flex-col justify-center flex">
            {item?.name}
          </div>
        </div>
      </th>
      <td>
        <div class="text-gray-400">{item?.email}</div>
      </td>
      <td class="px-6 py-4">
        <div class="flex justify-end gap-4">
          {/*           <a x-data="{ tooltip: 'Delete' }" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
              x-tooltip="tooltip"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </a> */}
          <div
            x-data="{ tooltip: 'Edite' }"
            onClick={() => openEditModal(item)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
              x-tooltip="tooltip"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default PersonTableItem;

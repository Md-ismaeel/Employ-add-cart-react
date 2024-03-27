import React, { useContext, useState } from 'react'
import { UserContext } from "../Context/Context";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Employ = () => {
  const { employ, team, setTeam } = useContext(UserContext);


  const addEmp = (item) => {
    console.log("checkingData", item);
    setTeam([...team, item])
    toast.success('Employee added successfully!');
  }

  return (
    <div className='mediaCls w-2/6 min-h-20 bg-gray-100 border'>
      <div className='w-full'>
        <h1 className='text-center text-2xl font-semibold mt-2 mb-2 border py-1'>Employee</h1>
      </div>

      <div className='scroll-bar h-96 flex flex-col gap-2'>
        {employ.map((item) => (

          <li key={item.id + 'ism'} className='list-none flex justify-start items-center gap-6 py-2 px-4 bg-slate-200'>
            <h1 className='w-2/5 text-xl'>{item.first_name}</h1>
            <p className='w-1/4'>{item.age}</p>
            {team.some(e => e.id === item.id) ? (
              <button className={`w-1/3 bg-slate-300 font-semibold text-red-500 py-1 active:bg-slate-900 rounded-sm`}>Disabled</button>
            ) : (
              <button className={`w-1/3 bg-slate-700 font-semibold text-yellow-50 py-1 active:bg-slate-900 rounded-sm`} onClick={() => addEmp(item)}>Add</button>
            )}
          </li>
        ))}
      </div>
    </div>

  )
}

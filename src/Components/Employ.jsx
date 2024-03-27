import React, { useContext, useState } from 'react'
import { UserContext } from "../Context/Context"

export const Employ = () => {
  const { employ, setEmploy, team, setTeam, btnDisabled, setBtnDisabled } = useContext(UserContext);


  const addEmp = (item) => {
    console.log("checkingData", item);
    setTeam([...team, item])


    let temp = employ.map((e) => {
      if (e.id === item.id) {
        e.isDisabled = true;
        return e;
      }
      return e;
    })
    setEmploy(temp)
    // console.log(temp);
  }

  return (
    <div className='mediaCls w-2/6 min-h-20 bg-gray-100 border'>
      <div className='w-full'>
        <h1 className='text-center text-2xl font-semibold mt-2 mb-2'>Employee</h1>
      </div>
      <div className='scroll-bar h-96 flex flex-col gap-2'>
        {employ && employ.map((item) => (
          <li key={item.id + 'ism'} className='list-none flex justify-start items-center gap-6 py-2 px-4 bg-slate-200'>

            <h1 className='w-2/5 text-xl'>{item.first_name}</h1>

            <p className='w-1/4'>{item.age}</p>

            <button className='w-1/3 bg-slate-700 text-yellow-50'
              disabled={item.hasOwnProperty('isDisabled')}
              onClick={() => addEmp(item)}>
              {btnDisabled === false ? 'Add' : 'Disabled'}
            </button>

          </li>
        ))}
      </div>

    </div>
  )
}

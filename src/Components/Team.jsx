import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from "../Context/Context"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Team = () => {

    const { team, setTeam } = useContext(UserContext);
    const [average, setAverage] = useState(0);


    const remove = (item) => {

        let newData = team.filter((e) => (item.id !== e.id))

        let sorted = newData.sort((a, b) => (a.age - b.age))
        setTeam(sorted)
        toast.warn('Employee removed successfully!');
    }

    useEffect(() => {

        if (team.length > 0) {

            let reducedVal = team.reduce((acc, currVal) => {
                return acc = acc + currVal.age;
            }, 0)
            console.log(reducedVal);
            let averageAge = Math.round(reducedVal / team.length);
            setAverage(averageAge)
        } else {
            setAverage(0)
        }

    }, [team])

    return (

        <div className='mediaCls w-2/6 min-h-20 bg-gray-100 border'>
            <div className='w-full'>
                <h1 className='text-center text-2xl font-semibold mt-2 mb-2 border py-2'>Team</h1>
            </div>
            <div className='scroll-bar h-80 flex flex-col gap-2'>
                {team.length > 0 ? team.map((item) => (
                    <li key={item.id} className='list-none flex justify-start items-center gap-6 py-2 px-4 bg-slate-200'>

                        <h1 className='w-2/5 text-xl'>{item.first_name}</h1>

                        <p className='w-1/4'>{item.age}</p>

                        <button className={`w-1/3 bg-slate-700 text-white font-semibold py-1 active:bg-slate-900 rounded-sm`} onClick={() => remove(item)}>Remove</button>

                    </li>
                ))
                    : <p className='text-center text-xl flex justify-center items-center mt-10 text-teal-500'>Employ Not Added Yet!!</p>}
            </div>
            <div className='w-full flex justify-center items-center py-2 px-4 gap-5 text-xl bg-slate-600 text-white '>
                <h1 className='text-center'>Average Age :</h1>
                <span className='text-center'>{average}</span>
            </div>
        </div>
    )
}

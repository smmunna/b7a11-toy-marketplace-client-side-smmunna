import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyTable from './ToyTable';
import './ToyTable.css'

const AllToy = () => {
    const datas = useLoaderData()
    const [mytoysData, setmytoysData] = useState(datas)

    const handleSearchSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const searchText = form.searchText.value;
        fetch(`https://b7a11-toy-marketplace-server-side-smmunna.vercel.app/toys/search?name=${searchText}`)
            .then(res => res.json())
            .then(data => setmytoysData(data))
    }
    return (
        <div className='px-5 md:px-20 my-3'>
            <h3 className='text-center text-2xl font-semibold py-4'>All Toy's</h3>
            <hr />
            <div className='py-4'>
                <form onSubmit={handleSearchSubmit}>
                    <input type="text" name='searchText' className='toy-search p-2' placeholder='Search by name' />
                    <button className='mysearchbtn ml-2'>Search</button>
                </form>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>View</th>
                            <th colSpan={2} className='text-center'>Options</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            mytoysData.length > 0 ?
                                <>
                                    {
                                        mytoysData.map((data, index) => (
                                            <ToyTable
                                                key={data._id}
                                                data={data}
                                                index={index}
                                            />
                                        ))
                                    }
                                </>
                                :
                                <>
                                    <div className='text-2xl text-red-700 my-5'>No data found !</div>
                                </>
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AllToy;

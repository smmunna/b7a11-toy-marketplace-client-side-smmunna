import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyTable from './ToyTable';
import './ToyTable.css'

const AllToy = () => {
    const datas = useLoaderData()

    const handleSearchSubmit = event => {
        event.preventDefault()
    }
    return (
        <div className='px-5 md:px-20 my-3'>
            <h3 className='text-center text-2xl font-semibold py-4'>All Toy's</h3>
            <hr />
            <div className='py-4'>
                <form onSubmit={handleSearchSubmit}>
                    <input type="text" className='toy-search p-2' placeholder='search by name' />
                    <button className='btn btn-info ml-2'>Search</button>
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
                            datas.map((data, index) => (
                                <ToyTable
                                    data={data}
                                    index={index}
                                />
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AllToy;

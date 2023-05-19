import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyTable from './ToyTable';
import './ToyTable.css'
import { Helmet } from "react-helmet";
import Loaderimg from '../../assets/images/loading.gif'

const AllToy = () => {
    const datas = useLoaderData()
    const [mytoysData, setmytoysData] = useState(datas)
    const [loading, setLoading] = useState(true)

    const handleSearchSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const searchText = form.searchText.value;
        fetch(`https://b7a11-toy-marketplace-server-side-smmunna.vercel.app/toys/search?name=${searchText}`)
            .then(res => res.json())
            .then(data => {
                setmytoysData(data)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetch('http://localhost:5000/toys/totalProducts')
            .then(res => res.json())
            .then(data => setTotalProducts(data.totalProducts))
    }, [])
    const [totalproducts, setTotalProducts] = useState(null)
    const [itemsPerPage, setItemsPerPage] = useState(5)
    const [currentpage, setCurrentpage] = useState(0);
    const totalPages = Math.ceil(totalproducts / itemsPerPage)
    const pageNumbers = [...Array(totalPages).keys()]

    // Dropdown options
    const options = [5, 10, 20]
    function handleSelectChange(event) {
        setItemsPerPage(parseInt(event.target.value))
        setCurrentpage(0)
    }

    useEffect(() => {
        fetch(`https://b7a11-toy-marketplace-server-side-smmunna.vercel.app/toys?page=${currentpage}&limit=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => {
                setmytoysData(data)
                setLoading(false)
            })
    }, [currentpage, itemsPerPage])

    if (loading) {
        return <div className='flex justify-center items-center py-14'>
            <div>
                <img src={Loaderimg} width={120} alt="" />
            </div>
        </div>
    }

    if (mytoysData.length <= 0) {
        return <div className='text-2xl font-semibold text-center text-red-600 py-10'>No data found......</div>
    }

    return (
        <div className='px-5 md:px-20 my-3'>
            <Helmet>
                <title>All Toys | Learning Lighthouse</title>
            </Helmet>
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
                            {/* <th></th> */}
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>View</th>
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

            {/* Page Numbers will be here */}
            <div>
                <div className='btn-group flex justify-center py-5'>
                    {
                        pageNumbers.map(number => <button
                            style={{ marginRight: '12px' }}
                            className={currentpage == number ? 'btn' : 'btn btn-active'}
                            key={number}
                            onClick={() => setCurrentpage(number)}
                        >{number + 1}</button>)
                    }
                    {/* Options value */}
                    <select value={itemsPerPage} className='select select-bordered' onChange={handleSelectChange}>
                        {
                            options.map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </div>
    );
}

export default AllToy;

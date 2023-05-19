import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import EngShop from './EngShop';

const Shop = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [engineering, setEngineering] = useState([])
    const [math, setMath] = useState([])
    const [science, setScience] = useState([])

    useEffect(() => {
        engData(); // Fetch engineering data when the component mounts
    }, []);

    const engData = () => {
        fetch(`https://b7a11-toy-marketplace-server-side-smmunna.vercel.app/toys/category?cate=engineering`)
            .then(res => res.json())
            .then(data => setEngineering(data))
    }

    const mathData = () => {
        fetch(`https://b7a11-toy-marketplace-server-side-smmunna.vercel.app/toys/category?cate=math`)
            .then(res => res.json())
            .then(data => setMath(data))
    }
    const scienceData = () => {
        fetch(`https://b7a11-toy-marketplace-server-side-smmunna.vercel.app/toys/category?cate=science`)
            .then(res => res.json())
            .then(data => setScience(data))
    }

    return (
        <div className='px-6 py-5 md:px-20 md:py-5'>
            <h3 className='text-center text-4xl font-semibold'>Shop by Category</h3>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <div className='flex justify-center mt-5'>
                        <Tab onClick={engData}>Engineering</Tab>
                        <Tab onClick={scienceData}>Science</Tab>
                        <Tab onClick={mathData}>Math</Tab>
                    </div>
                </TabList>

                {/* For Engineering */}
                <TabPanel>

                    {
                        engineering.length > 3 ?
                            <>
                                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5'>
                                    {
                                        engineering.slice(0, 3).map(engdata => <EngShop
                                            key={engdata._id}
                                            engdata={engdata}
                                        />)
                                    }

                                </div>
                                <div className='text-center my-5'>
                                    <button className='btn btn-secondary'>See More</button>
                                </div>
                            </>
                            :
                            <>
                                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5'>
                                    {
                                        engineering.map(engdata => <EngShop
                                            key={engdata._id}
                                            engdata={engdata}
                                        />)
                                    }

                                </div>
                            </>
                    }

                </TabPanel>

                {/* For Science */}
                <TabPanel>

                    {
                        engineering.length > 3 ?
                            <>
                                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5'>
                                    {
                                        science.slice(0, 3).map(engdata => <EngShop
                                            key={engdata._id}
                                            engdata={engdata}
                                        />)
                                    }

                                </div>
                                <div className='text-center my-5'>
                                    <button className='btn btn-secondary'>See More</button>
                                </div>
                            </>
                            :
                            <>
                                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5'>
                                    {
                                        science.map(engdata => <EngShop
                                            key={engdata._id}
                                            engdata={engdata}
                                        />)
                                    }

                                </div>
                            </>
                    }

                </TabPanel>

                {/* For Math */}
                <TabPanel>

                    {
                        math.length > 3 ?
                            <>
                                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
                                    {
                                        math.slice(0, 3).map(engdata => <EngShop
                                            key={engdata._id}
                                            engdata={engdata}
                                        />)
                                    }

                                </div>
                                <div className='text-center my-5'>
                                    <button className='btn btn-secondary'>See More</button>
                                </div>
                            </>
                            :
                            <>
                                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
                                    {
                                        math.map(engdata => <EngShop
                                            key={engdata._id}
                                            engdata={engdata}
                                        />)
                                    }

                                </div>
                            </>
                    }

                </TabPanel>
            </Tabs>
        </div>
    );
}

export default Shop;

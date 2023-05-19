import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../provider/AuthProvider';

const AddToy = () => {

    const{user} =useContext(AuthContext)

    const handleToyAddSubmit = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const sellername = form.sellername.value
        const selleremail = form.selleremail.value
        const category = form.category.value
        const price = parseFloat(form.price.value)
        const rating = parseFloat(form.rating.value)
        const quantity = form.quantity.value
        const img = form.img.value
        const description = form.description.value

        const toyInfo = { name, sellername, selleremail, category, price, rating, quantity, img, description }

        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.info("Toy Added Successfully.");
                    form.reset()
                }
            })
    }
    return (
        <div>
            <h3 className='text-center text-2xl font-semibold py-5'>Add a Toy</h3>
            <hr />
            <div className='grid justify-center py-4'>
                <form onSubmit={handleToyAddSubmit}>
                    <div className="card-body  shadow-2xl bg-slate-100 ">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder=" Enter toys name" required className="py-2 lg:w-96" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input type="text" name='sellername' placeholder=" Seller Name" defaultValue={user?.displayName} disabled required className="p-2 bg-slate-300" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input type="text" name='selleremail' placeholder=" Seller Email"  defaultValue={user?.email} disabled required className="p-2 bg-slate-300" />
                                </div>
                                {/* Category */}
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <select className="select w-80 lg:w-96" name='category'>
                                    <option disabled selected>Choose Category</option>
                                    <option value="science">Science</option>
                                    <option value="math">Math</option>
                                    <option value="engineering">Engineering</option>
                                </select>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name='price' placeholder=" Toys Price" required className="py-2" />
                                </div>
                            </div>
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <select className="select " name='rating'>
                                        <option disabled selected>Give the Rate</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={4.5}>4.5</option>
                                        <option value={5}>5</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <select className="select " name='quantity'>
                                        <option disabled selected>Choose quantity</option>
                                        <option value="Available">Available</option>
                                        <option value="Not Available">Not Available</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" name='img' placeholder=" Enter your photo url" required className="py-2" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input type="text" name='description' placeholder=" Enter your photo url" required className="py-2" />
                                </div>
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-info w-full">Click to Save</button>
                        </div>
                        <div>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default AddToy;

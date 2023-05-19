import React from 'react';
import './UpdateToy.css';

const UpdateToy = ({ mytoy }) => {
    const { price, quantity, description } = mytoy
    return (
        <div>
            {/* Updating the content */}
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <div className='px-5'>
                        <form>
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <label htmlFor="">Price:</label> <br />
                            <input type="number" name='price' placeholder="Give the price" defaultValue={price} className="mb-3 modal-input mt-3 w-full" /> <br />
                            <label htmlFor="">Description:</label> <br />
                            <input type="text" name='description' placeholder="Description" defaultValue={description} className="modal-input mt-3  w-full " /> <br />
                            <br />
                            <label htmlFor="">Quantity: </label> <br />
                            <select name="quantity" className='select mt-3 w-full'>
                                <option value="Available">Available</option>
                                <option value="Not Available">Not Available</option>
                            </select>
                            <br />
                            <button className='btn btn-accent my-3'>Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateToy;

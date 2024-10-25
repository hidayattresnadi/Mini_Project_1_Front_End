import { useState } from "react";

function OrderTable({ foods, customers, saveOrder }) {
    const [quantities, setQuantities] = useState(
        foods.map(() => 0) // Default semua quantity 0
    );
    // Fungsi untuk mengubah quantity dari item tertentu
    const handleQuantityChange = (index, value) => {
        const newQuantities = [...quantities];
        newQuantities[index] = Math.max(0, value); // Minimal quantity adalah 0
        setQuantities(newQuantities);
    };

    const [selectedCustomers, setSelectedCustomers] = useState('');

    const handleSubmit = () => {
        const ordersByCustomer = {
            foods :[],
            customer : selectedCustomers,
            totalPrice : 0
        };
        foods.forEach((food,index)=>{
            const quantity = quantities[index];
            if(quantity > 0) {
                food['quantity'] = quantity;
                food['totalFoodPrice'] = quantity * food.price
                ordersByCustomer['totalPrice'] += food['totalFoodPrice'] 
                ordersByCustomer['foods'].push(food);
            }
        })
        if(ordersByCustomer['foods'].length === 0){
            alert('Quantity cannot be 0');
            return;
        }
        if(selectedCustomers === ''){
            alert('Please select Customer Name');
            return;
        }
        saveOrder(ordersByCustomer);
    };


    return (
        <>
            <div className="d-flex flex-column align-items-center" style={{ marginTop: '80px' }} id="order-food" >
                <div style={{ width: "90%", maxWidth: "1200px" }}>
                    <h1 className="text-center mb-4">Order Here</h1>
                    <div className="mb-3">
                        <label className="form-label">Select Your Name</label>
                        <select 
                            required
                            className="form-select"
                            value={selectedCustomers}
                            onChange={(e) => setSelectedCustomers(e.target.value)}
                        >
                            <option value='' disabled>Select Your Name</option>
                            {customers.map((customer, index) => (
                                <option key={index} value={customer.name}>
                                    {customer.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="table-responsive mt-5">
                        <table className="table table-borderless text-center">
                            <thead className="table-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Category</th>
                                    <th>Rating</th>
                                    <th>Is Available</th>
                                    <th>Add Order Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {foods.filter((food)=>food.isAvailable)
                                .map((food, index) => (
                                    <tr key={index}>
                                        <td>{food.name}</td>
                                        <td>{food.price}</td>
                                        <td>{food.category}</td>
                                        <td>{food.rating}</td>
                                        <td>Available</td>
                                        <td>
                                            <input
                                                type="number"
                                                value={quantities[index]}
                                                min="0"
                                                onChange={(e) =>
                                                    handleQuantityChange(index, parseInt(e.target.value))
                                                }
                                                className="form-control"
                                                style={{ width: '80px', margin: '0 auto' }}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <button
                            className="btn btn-primary w-25"
                            onClick={handleSubmit}
                        >
                            Add New Order
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderTable
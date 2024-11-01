import { useState, useEffect } from "react";
import { errorSwal } from "../helper";

function OrderTable({ foods, customers, categories, saveOrder }) {
    const [quantities, setQuantities] = useState(
        foods.map(() => 0) // Default semua quantity 0
    );

    useEffect(() => {
        setQuantities(foods.map(() => 0));
    }, [foods]);

    // Fungsi untuk mengubah quantity dari item tertentu
    const handleQuantityChange = (index, value) => {
        const newQuantities = [...quantities];
        newQuantities[index] = Math.max(0, value); // Minimal quantity adalah 0
        setQuantities(newQuantities);
    };

    const [selectedCustomers, setSelectedCustomers] = useState('');
    const [selectedFoodCategory, setSelectedFoodCategory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredFoods = foods
        .filter(food => food.isAvailable)
        .filter(food =>
            selectedFoodCategory === "All Food Category" || 
            selectedFoodCategory === "" || 
            food.category === selectedFoodCategory
        )
        .filter(food => 
            searchQuery ? food.name.toLowerCase().includes(searchQuery.toLowerCase()) : true
        );

    const handleSubmit = (event) => {
        event.preventDefault();

        const ordersByCustomer = {
            foods: [],
            customer: selectedCustomers,
            totalPrice: 0,
            status: 'Order Placed'
        };
        
        foods.forEach((food, index) => {
            const quantity = quantities[index];
            if (quantity > 0) {
                food['quantity'] = quantity;
                food['totalFoodPrice'] = quantity * food.price;
                ordersByCustomer['totalPrice'] += food['totalFoodPrice'];
                ordersByCustomer['foods'].push(food);
            }
        });

        if (ordersByCustomer['foods'].length === 0) {
            errorSwal('Quantity cannot be 0');
            return;
        }
        if (selectedCustomers === '') {
            errorSwal('Please select Customer Name');
            return;
        }
        
        saveOrder(ordersByCustomer);
        setSelectedCustomers('');
        setQuantities(foods.map(() => 0));
        setSearchQuery('');
        setSelectedFoodCategory('');
    };

    return (
        <div className="d-flex flex-column align-items-center" style={{ marginTop: '80px' }} id="order-food">
            <div className="card" style={{ width: "90%", maxWidth: "1200px" }}>
                <div className="card-header bg-dark text-white text-center">
                    <h1 className="mb-0">Order Here</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="p-4"> {/* Add padding to the form */}
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
                                    <option key={index} value={customer.customerName}>
                                        {customer.customerName}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Search Food</label>
                            <input
                                type="text"
                                value={searchQuery}
                                className="form-control"
                                id="name"
                                aria-describedby="nameHelp"
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Filter by Category</label>
                            <select
                                className="form-select"
                                value={selectedFoodCategory}
                                onChange={(e) => setSelectedFoodCategory(e.target.value)}
                            >
                                <option value='' disabled>Select Food Category</option>
                                <option value='All Food Category'>All Food Category</option>
                                {categories.map((category, index) => (
                                    <option key={index} value={category.name}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="table-responsive mt-3">
                    <h1 className="mb-4 text-center">List of Available Menu</h1>
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
                                {filteredFoods.map((food, index) => (
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
                    <div className="d-flex justify-content-center mt-3 mb-4"> {/* Add margin-bottom for spacing */}
                        <button
                            type="submit" // Change to type="submit" for the button
                            className="btn btn-primary w-25"
                        >
                            Add New Order
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default OrderTable;

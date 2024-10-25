import { useState } from "react";

const Form = ({ saveFood, categories }) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        category: '',
        rating: '',
        isAvailable: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveFood(formData);
        setFormData({
            name: '',
            price: '',
            category: '',
            rating: '',
            isAvailable: ''
        });
    };
    return (
        <div className="d-flex flex-column align-items-center" style={{ marginTop: '80px' }}>
            <div className="card" style={{ width: "90%", maxWidth: "600px" }}>
                <div className="card-header bg-dark text-white text-center">
                    <h1 className="mb-0">Form to Add Food</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input required minLength={2} maxLength={100} type="text" className="form-control" id="name" aria-describedby="nameHelp" onChange={handleInputChange} value={formData.name} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input min={0.01} max={100000} step="0.01" type="number" className="form-control" id="price" onChange={handleInputChange} value={formData.price} />
                        </div>
                        <label className="form-label">Food Category</label>
                        <select required className="form-select mb-3" id="category" onChange={handleInputChange} value={formData.category}>
                            <option value="" disabled>Please choose food category</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category.name}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        <div className="mb-3">
                            <label htmlFor="rating" className="form-label">Rating</label>
                            <input min={0} max={5} type="number" className="form-control" id="rating" onChange={handleInputChange} value={formData.rating} />
                        </div>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="isAvailable"
                                onChange={(e) => setFormData({ ...formData, isAvailable: e.target.checked })}
                                checked={formData.isAvailable}
                            />
                            <label className="form-check-label" htmlFor="isAvailable">Is Available</label>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3 w-100">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
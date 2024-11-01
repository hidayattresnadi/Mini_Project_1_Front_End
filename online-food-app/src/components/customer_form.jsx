import { useEffect, useState, useRef } from "react";
import { errorSwal } from "../helper";

const CustomerForm = ({ addCustomer, editCustomer, editingCustomer, isFormOpen, setIsFormOpen }) => {
    const [formData, setFormData] = useState({
        customerName: '',
        email: '',
        phoneNumber: '',
        address: ''
    });

    
    const nameInputRef = useRef(null);

    useEffect(() => {
        if (editingCustomer) {
            setFormData({
                customerName: editingCustomer.customerName,
                email: editingCustomer.email,
                phoneNumber: editingCustomer.phoneNumber,
                address: editingCustomer.address,
            });
        }
        else {
            setFormData({
                customerName: '',
                email: '',
                phoneNumber: '',
                address: ''
            });
        }
    }, [editingCustomer]);

    useEffect(() => {
        if (isFormOpen && nameInputRef.current) {
            nameInputRef.current.focus();
        }
    }, [isFormOpen]); 

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.phoneNumber.length < 10 || formData.phoneNumber.length >15) {
            errorSwal('Phone Number is not valid')
            return;
        }
        if(editingCustomer){
            editCustomer(formData);
        }
        else {
            addCustomer(formData);
        }
        setFormData({
            customerName: '',
            email: '',
            phoneNumber: '',
            address: ''
        });
        setIsFormOpen(false);
    };

    const openForm = () => {
        setIsFormOpen(true);
    };

    return (
        <div className="d-flex flex-column align-items-center" style={{ marginTop: '80px' }}>
            <div className="card" style={{ width: "90%", maxWidth: "600px" }}>
                <div className="card-header bg-dark text-white text-center">
                    <h1 className="mb-0">{editingCustomer ? 'Form to Edit Customer' : 'Form to Add Customer'}</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="customerName" className="form-label">Name</label>
                            <input ref={nameInputRef} required minLength={2} maxLength={100} type="text" className="form-control" id="customerName" aria-describedby="nameHelp" onChange={handleInputChange} value={formData.customerName} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input placeholder="example@gmail.com" type="email" required className="form-control" id="email" onChange={handleInputChange} value={formData.email} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <input pattern="^\+62\d{8,13}$" placeholder="+62XXXXXXXXXX"  type="text" className="form-control" id="phoneNumber" onChange={handleInputChange} value={formData.phoneNumber} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input maxLength={200} type="text" className="form-control" id="address" onChange={handleInputChange} value={formData.address} />
                        </div>
                        <button onClick={openForm} type="submit" className="btn btn-primary mt-3 w-100">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CustomerForm;
function CustomerTable({ customers, handleDeleteCustomer, handleEditCustomer  }) {
    return (
        <>
            <div className="d-flex flex-column align-items-center" style={{ marginTop: '80px' }} >
                <div style={{ width: "90%", maxWidth: "1200px" }}>
                    <h1 className="text-center mb-4">List of Customers</h1>
                    <div className="table-responsive">
                        <table className="table table-bordered text-center">
                            <thead className="table-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Address</th>
                                    <th>Edit Customer</th>
                                    <th>Delete Customer</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map((customer, index) => (
                                    <tr key={index}>
                                        <td>{customer.customerName}</td>
                                        <td>{customer.email}</td>
                                        <td>{customer.phoneNumber}</td>
                                        <td>{customer.address}</td>
                                        <td><button onClick={() => handleEditCustomer(index) } className="btn btn-primary"><i className="fas fa-pencil-alt"></i></button></td>
                                        <td><button onClick={() => handleDeleteCustomer(index) } className="btn btn-danger"> <i className="fas fa-trash-alt"></i></button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerTable
function CustomerTable({ customers  }) {
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
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map((customer, index) => (
                                    <tr key={index}>
                                        <td>{customer.name}</td>
                                        <td>{customer.email}</td>
                                        <td>{customer.phoneNumber}</td>
                                        <td>{customer.address}</td>
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
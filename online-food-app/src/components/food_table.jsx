function Table({ foods  }) {
    return (
        <>
            <div className="d-flex flex-column align-items-center" style={{marginTop:'100px'}}>
                <div style={{ width: "90%", maxWidth: "1200px" }}>
                    <h1 className="text-center mb-4">List of Foods</h1>
                    <div className="table-responsive">
                        <table className="table table-bordered text-center">
                            <thead className="table-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Category</th>
                                    <th>Rating</th>
                                    <th>Is Available</th>
                                </tr>
                            </thead>
                            <tbody>
                                {foods.map((food, index) => (
                                    <tr key={index}>
                                        <td>{food.name}</td>
                                        <td>{food.price}</td>
                                        <td>{food.category}</td>
                                        <td>{food.rating}</td>
                                        <td>{food.isAvailable ? 'Available' : 'Not Available'}</td>
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

export default Table
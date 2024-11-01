function Table({ foods, handleDeleteFood, handleEditFood  }) {
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
                                    <th>Edit Food</th>
                                    <th>Delete Food</th>
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
                                        <td><button onClick={() => handleEditFood(index) } className="btn btn-primary"><i className="fas fa-pencil-alt"></i></button></td>
                                        <td><button onClick={() => handleDeleteFood(index) } className="btn btn-danger"> <i className="fas fa-trash-alt"></i></button></td>
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
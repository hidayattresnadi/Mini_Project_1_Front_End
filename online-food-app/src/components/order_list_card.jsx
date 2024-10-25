
function OrderList({ orders }) {
    let rupiah = Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });
    
    return (
        <>
            <div className="container" style={{marginTop:'120px'}}>
                {orders.length > 0 ? <h1 className="text-center">List Of Orders</h1> : ''}
                <div className="row mt-5">
                    {orders.map((order, index) => (
                        <div key={index} className="col-md-4 col-sm-6 mb-4">
                            <div className="card h-100">
                                <div className="card-header bg-black text-white">
                                    <h5 className="card-title">Order {index + 1}</h5>
                                </div>
                                <div className="card-body">
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        Customer: {order.customer}
                                    </h6>
                                    <ul className="list-group list-group-flush">
                                        {order.foods.map((food, idx) => (
                                            <li key={idx} className="list-group-item">
                                                <strong>{food.name}</strong>
                                                <p>Price: {rupiah.format(food.price)}</p>
                                                <p>Quantity: {food.quantity}</p>
                                                <p>Total Food Price: {rupiah.format(food.totalFoodPrice)}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="card-footer text-end">
                                    <p className="fw-bold">Total Price: {rupiah.format(order.totalPrice)}</p>
                                    {/* <a href="#" className="btn btn-outline-primary w-100">
                                        View Details
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default OrderList
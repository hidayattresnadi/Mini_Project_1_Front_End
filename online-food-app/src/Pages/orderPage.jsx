import OrderTable from "../components/food_order_table";
import OrderList from "../components/order_list_card";

function OrderPage({foods, customers, saveOrder, categories, orders, getOrderStatus}) {
    return (
        <>
          <OrderTable foods={foods} customers={customers} saveOrder={saveOrder} categories={categories} />
          <OrderList orders={orders} getOrderStatus={getOrderStatus} />
        </>
    )
}

export default OrderPage;
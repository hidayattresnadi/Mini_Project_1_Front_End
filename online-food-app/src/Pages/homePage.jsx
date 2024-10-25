import Header from '../components/header'
import FoodTable from '../components/food_table'
import CustomerTable from '../components/customer_table'
import OrderTable from '../components/food_order_table'
import FoodForm from '../components/food_form'
import CustomerForm from '../components/customer_form'
import OrderList from '../components/order_list_card'
import Footer from '../components/footer';
import { useState } from 'react';

function HomePage() {
  const [foods, setFoods] = useState([
    { name: 'Burger', price: 20000, category: 'Food', rating: 4, isAvailable: true },
    { name: 'Orange Juice', price: 21000, category: 'Beverage', rating: 4, isAvailable: true },
    { name: 'Ice Cream Sundae', price: 11000, category: 'Desert', rating: 4, isAvailable: true }
  ]);
  const [customers, setCustomers] = useState([
    { name: 'Dayat', email: 'hahaha@gmail.com', phoneNumber: '082192391319', address: 'Bekasi' },
    { name: 'John Doe', email: 'hahaha2@gmail.com', phoneNumber: '082192391318', address: 'Jakarta' },
    { name: 'Moriarty', email: 'hahaha3@gmail.com', phoneNumber: '082192391317', address: 'Bogor' }
  ]);
  const [categories] = useState([
    { name: 'Food' },
    { name: 'Beverage' },
    { name: 'Desert' }
  ]);
  const [orders, setOrders] = useState([]);
  const saveFood = (food) => {
    setFoods([...foods, food]);
  }
  const saveCustomer = (customer) => {
    setCustomers([...customers, customer]);
  }

  const saveOrder = (order) => {
    setOrders([...orders, order]);
  }
  return (
    <>
      <Header />
      <FoodTable foods={foods} />
      <FoodForm categories={categories} saveFood={saveFood} />
      <CustomerTable customers={customers} />
      <CustomerForm saveCustomer={saveCustomer} />
      <OrderTable foods={foods} customers={customers} saveOrder={saveOrder} />
      <OrderList orders={orders} />
      <Footer />
    </>
  )
};


export default HomePage;

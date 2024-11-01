import Header from '../components/header'
import FoodTable from '../components/food_table'
import CustomerTable from '../components/customer_table'
import OrderTable from '../components/food_order_table'
import FoodForm from '../components/food_form'
import CustomerForm from '../components/customer_form'
import OrderList from '../components/order_list_card'
import Footer from '../components/footer';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { successSwal } from '../helper'

function HomePage() {
  const [foods, setFoods] = useState([
    { name: 'Burger', price: 20000, category: 'Food', rating: 4, isAvailable: true },
    { name: 'Orange Juice', price: 21000, category: 'Beverage', rating: 4, isAvailable: true },
    { name: 'Ice Cream Sundae Strawberry', price: 11000, category: 'Desert', rating: 4, isAvailable: true },
    { name: 'Burger Big Mac', price: 20000, category: 'Food', rating: 4, isAvailable: true },
    { name: 'Orange Lime Juice', price: 21000, category: 'Beverage', rating: 4, isAvailable: true },
    { name: 'Ice Cream Sundae Chocolate', price: 11000, category: 'Desert', rating: 4, isAvailable: true }
  ]);

  const [selectedFoodIndex, setSelectedFoodIndex] = useState(null);

  const [editingFood, setEditingFood] = useState(null);

  const [customers, setCustomers] = useState([
    { customerName: 'Dayat', email: 'hahaha@gmail.com', phoneNumber: '082192391319', address: 'Bekasi' },
    { customerName: 'John Doe', email: 'hahaha2@gmail.com', phoneNumber: '082192391318', address: 'Jakarta' },
    { customerName: 'Moriarty', email: 'hahaha3@gmail.com', phoneNumber: '082192391317', address: 'Bogor' }
  ]);

  const [selectedCustomerIndex, setSelectedCustomerIndex] = useState(null);

  const [editingCustomer, setEditingCustomer] = useState(null);

  const [categories] = useState([
    { name: 'Food' },
    { name: 'Beverage' },
    { name: 'Desert' }
  ]);

  const [orders, setOrders] = useState([]);

  const [isFormFoodOpen, setIsFormFoodOpen] = useState(false);

  const addFood = (food) => {
    setFoods([...foods, food]);
    successSwal('Food Added successfully');
  }

  const handleEditFood = (index) => {
    setIsFormFoodOpen(false);
    setSelectedFoodIndex(index);
    const foodToEdit = foods[index];
    setEditingFood(foodToEdit);
    setTimeout(() => {
      setIsFormFoodOpen(true);
    }, 100);
  }

  const editFood = (updatedFood) => {
    const updatedFoods = [...foods];
    updatedFoods[selectedFoodIndex] = updatedFood;
    setFoods(updatedFoods);
    successSwal('Food Edited successfully');
    setEditingFood(null);
    setSelectedFoodIndex(null);
  }

  const handleDeleteFood = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedFoods = foods.filter((_, i) => i !== index);
        setFoods(updatedFoods);
        setSelectedFoodIndex(null);
        setEditingFood(null);

        successSwal('Food Deleted successfully')
      }
    });
  };

  const [isFormOpen, setIsFormOpen] = useState(false);

  const addCustomer = (customer) => {
    setCustomers([...customers, customer]);
    successSwal('Customer Added successfully');
  }

  const handleDeleteCustomer = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCustomers = customers.filter((_, i) => i !== index);
        setCustomers(updatedCustomers);
        setSelectedCustomerIndex(null);
        setEditingCustomer(null);

        successSwal('Customer Deleted successfully');
      }
    });
  };

  const handleEditCustomer = (index) => {
    setIsFormOpen(false);
    setSelectedCustomerIndex(index);
    const customerToEdit = customers[index];
    setEditingCustomer(customerToEdit);
    setTimeout(() => {
      setIsFormOpen(true);
    }, 100);
  };

  const editCustomer = (updatedCustomer) => {
    const updatedCustomers = [...customers];
    updatedCustomers[selectedCustomerIndex] = updatedCustomer;
    setCustomers(updatedCustomers);
    successSwal('Customer Edited successfully');
    setSelectedCustomerIndex(null);
    setEditingCustomer(null);
  };

  const saveOrder = (order) => {
    setOrders([...orders, order]);
    successSwal('Order Added successfully');
  };

  const updateOrderStatus = (selectedOrderIndex, status) => {
    const updatedOrders = [...orders];
    updatedOrders[selectedOrderIndex]['status'] = status;
    setOrders(updatedOrders);
  };

  async function getOrderStatus(index) {
    const statusOptions = [
      "Preparing",
      "Ready for Pickup",
      "Out For Delivery",
      "Delivered",
      "Cancelled"
    ];

    const { value: selectedIndex } = await Swal.fire({
      title: "Select Order Status",
      input: "select",
      inputOptions: statusOptions.reduce((options, status, i) => {
        options[i] = status;  // Use index as key and status as value
        return options;
      }, {}),
      inputPlaceholder: "Select an order status",
      showCancelButton: true,
    });

    if (selectedIndex !== undefined) {
      const orderStatus = statusOptions[selectedIndex]; // Map index back to status string
      if (orderStatus === 'Cancelled') {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, cancel it!"
        }).then((result) => {
          if (result.isConfirmed) {
            updateOrderStatus(index, orderStatus);
            successSwal(`Order status successfully updated to selected: ${orderStatus}`);
            return orderStatus;
          }
        });
      }
      else {
        updateOrderStatus(index, orderStatus);
        successSwal(`Order status successfully updated to selected: ${orderStatus}`);
        return orderStatus;
      }

    }
    return null;
  };

  return (
    <>
      <Header />
      <FoodTable foods={foods} handleDeleteFood={handleDeleteFood} handleEditFood={handleEditFood} />
      <FoodForm categories={categories} addFood={addFood} editFood={editFood} editingFood={editingFood} isFormFoodOpen={isFormFoodOpen} setIsFormFoodOpen={setIsFormFoodOpen} />
      <CustomerTable customers={customers} handleDeleteCustomer={handleDeleteCustomer} handleEditCustomer={handleEditCustomer} />
      <CustomerForm addCustomer={addCustomer} editCustomer={editCustomer} editingCustomer={editingCustomer} isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <OrderTable foods={foods} customers={customers} saveOrder={saveOrder} categories={categories} />
      <OrderList orders={orders} getOrderStatus={getOrderStatus} />
      <Footer />
    </>
  )
};


export default HomePage;

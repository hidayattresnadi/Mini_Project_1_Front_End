import FoodTable from '../components/food_table'
import FoodForm from '../components/food_form'

function HomePage({ foods, handleDeleteFood, handleEditFood, categories, addFood, editFood, editingFood, isFormFoodOpen, setIsFormFoodOpen }) {
  return (
    <>
      <FoodTable foods={foods} handleDeleteFood={handleDeleteFood} handleEditFood={handleEditFood} />
      <FoodForm categories={categories} addFood={addFood} editFood={editFood} editingFood={editingFood} isFormFoodOpen={isFormFoodOpen} setIsFormFoodOpen={setIsFormFoodOpen} />
    </>
  )
};


export default HomePage;

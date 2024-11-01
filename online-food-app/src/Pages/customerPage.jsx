import CustomerForm from "../components/customer_form";
import CustomerTable from "../components/customer_table";

function CustomerPage({customers, handleDeleteCustomer, handleEditCustomer, addCustomer, editCustomer, editingCustomer, isFormOpen, setIsFormOpen}) {
    return (
        <>
            <CustomerTable customers={customers} handleDeleteCustomer={handleDeleteCustomer} handleEditCustomer={handleEditCustomer} />
            <CustomerForm addCustomer={addCustomer} editCustomer={editCustomer} editingCustomer={editingCustomer} isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        </>
    )
}

export default CustomerPage;
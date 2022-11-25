import React from 'react';
import AddAProduct from './AddAProduct/AddAProduct';
import MyProducts from './MyProducts/MyProducts';

const Dashboard = () => {
    return (
        <div>
            <AddAProduct></AddAProduct>
            <MyProducts></MyProducts>
        </div>
    );
};

export default Dashboard;
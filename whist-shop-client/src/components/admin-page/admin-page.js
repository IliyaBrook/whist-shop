import React from 'react';
import './admin-page.scss';
import ModalAddProduct from "./modal-add-product/modal-add-product";
import AdminProducts from "./adminProducts/admin-products";

const AdminPage = () => {
    return (
        <div className="admin-content-wrapper">
            <div className="add-item-wrapper">
                <ModalAddProduct/>
            </div>
            <div className="admin-products-wrapper">
                <AdminProducts/>
            </div>
        </div>
    );
};

export default AdminPage;
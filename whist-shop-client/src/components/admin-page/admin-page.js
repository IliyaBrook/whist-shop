import React from 'react';
import './admin-page.scss';
import ModalAddItem from "./modal-add-item/modal-add-item";

const AdminPage = () => {
    return (
        <div className="admin-content-wrapper">
            <div className="add-item-wrapper">
                <ModalAddItem/>
            </div>
        </div>
    );
};

export default AdminPage;
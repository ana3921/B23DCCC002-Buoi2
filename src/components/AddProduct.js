import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const newProduct = { id: Date.now(), name, price: parseInt(price) };
    dispatch(addProduct(newProduct));
    navigate('/');
  };

  return (
    <div className="form-container">
      <h2>Thêm Hàng Hóa</h2>
      <input
        type="text"
        placeholder="Tên hàng hóa"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Giá hàng hóa"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleSubmit}>Thêm hàng hóa</button>
      <button className="back-btn" onClick={() => navigate('/')}>Quay Lại</button>
    </div>
  );
};

export default AddProduct;

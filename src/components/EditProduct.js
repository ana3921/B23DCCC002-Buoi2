import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editProduct } from '../redux/actions';

const EditProduct = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  const product = products.find((p) => p.id === parseInt(id));
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(editProduct({ id: product.id, name, price: parseInt(price) }));
    navigate('/');
  };

  return (
    <div className="form-container">
      <h2>Chỉnh Sửa Hàng Hóa</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleSubmit}>Lưu Thay Đổi</button>
      <button className="back-btn" onClick={() => navigate('/')}>Quay Lại</button>
    </div>
  );
};

export default EditProduct;

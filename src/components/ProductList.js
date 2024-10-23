import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../redux/actions';

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="container">
      <h2>Danh sách hàng hóa</h2>
      <div className="controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Tìm kiếm hàng hóa..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="add-product-link">
          <Link to="/add-product">
            <button className="add-product-btn">Thêm hàng hóa</button>
          </Link>
        </div>
      </div>

      {currentProducts.length > 0 ? (
        <ul className="product-list">
          {currentProducts.map((product) => (
            <li key={product.id} className="product-item">
              <div className="product-details">
                <span className="product-name">{product.name}</span>
                <span className="product-price"> - {product.price} VND</span>
              </div>
              <div className="product-actions">
                <Link to={`/edit-product/${product.id}`}>
                  <button className="edit-btn">Chỉnh Sửa</button>
                </Link>
                <button onClick={() => handleDelete(product.id)} className="delete-btn">Xóa</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-products">Không tìm thấy hàng hóa nào!</p>
      )}

      {}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Trang trước
        </button>
        <span>Trang {currentPage} / {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Trang sau
        </button>
      </div>
    </div>
  );
};

export default ProductList;

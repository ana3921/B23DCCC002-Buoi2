export const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    payload: product,
  });
  
  export const editProduct = (product) => ({
    type: 'EDIT_PRODUCT',
    payload: product,
  });
  
  export const deleteProduct = (id) => ({
    type: 'DELETE_PRODUCT',
    payload: id,
  });
  
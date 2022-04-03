import axios from 'axios';

// const post_url = 'http://localhost:5000/posts';
// export const fetchPosts = () => axios.get(post_url);
// export const createPost = (newPost) => axios.post(post_url, newPost);
// export const likePost = (id) => axios.patch(`${post_url}/${id}/likePost`);
// export const updatePost = (id, updatedPost) => axios.patch(`${post_url}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${post_url}/${id}`);

const login_url = 'http://localhost:5000/users';
export const ProcessLogin = (userObj) => axios.post(login_url, userObj);


const product_url = 'http://localhost:5000/product';
export const FindAllProducts = (columnName,sortDirection,columnType) => axios.get(product_url+'?columnName='+columnName+'&sortDirection='+sortDirection+'&columnType='+columnType);
export const FindProductsByBarcode = (searchText) => axios.get(product_url+'/FindProductsByBarcode?searchText='+searchText);
export const SortByColumn = (columnName,sortDirection,columnType) => axios.get(product_url+'/SortByColumn?columnName='+columnName+'&sortDirection='+sortDirection+'&columnType='+columnType);
export const ChangePage = (Pagination,columnName,sortDirection,columnType) => axios.get(product_url+'/ChangePage?'+ new URLSearchParams(Pagination).toString()+'&columnName='+columnName+'&sortDirection='+sortDirection+'&columnType='+columnType);
export const uploadWarehouseProductCSV = (warehouseProductObj) => axios.post(product_url + '/InsertAndUpdateWarehouseProducts', warehouseProductObj);
export const uploadStoreProductCSV = (storeProductObj) => axios.post(product_url + '/InsertAndUpdateStoreProducts', storeProductObj);

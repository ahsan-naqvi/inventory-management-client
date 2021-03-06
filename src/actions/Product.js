// import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

//#region Get Actions 

export const FindAllProducts = (columnName,sortDirection,columnType) => async (dispatch) => {
  try {
    const { data } = await api.FindAllProducts(columnName,sortDirection,columnType);
    console.log("Action: ", data);

    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const FindProductsByBarcode = (searchText) => async (dispatch) => {
  try {
    const { data } = await api.FindProductsByBarcode(searchText);
    console.log("Action: ", data);

    dispatch({ type: 'FETCH_BY_BARCODE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const SortByColumn = (columnName,sortDirection,columnType) => async (dispatch) => {
  try {
    const { data } = await api.SortByColumn(columnName,sortDirection,columnType);
    console.log("Sort Action: ", data);

    dispatch({ type: 'SORT_BY_COLUMN', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const ChangePage = (Pagination,columnName,sortDirection,columnType) => async (dispatch) => {
  try {
    const { data } = await api.ChangePage(Pagination,columnName,sortDirection,columnType);
    console.log("Pagination Action: ", data);

    dispatch({ type: 'FETCH_BY_PAGINATION', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// #endregion

// #region Upload Actions 

export const uploadWarehouseProductCSV = (ProductObject) => async (dispatch) => {
  try {
    const { data } = await api.uploadWarehouseProductCSV(ProductObject);

    dispatch({ type: 'UPLOAD_WAREHOUSE_CSV', payload: data });
    window.location.reload();
  } catch (error) {
    console.log(error.message);
  }
};

export const uploadStoreProductCSV = (ProductObject) => async (dispatch) => {
  try {
    const { data } = await api.uploadStoreProductCSV(ProductObject);

    dispatch({ type: 'UPLOAD_STORE_CSV', payload: data });
    window.location.reload();
  } catch (error) {
    console.log(error.message);
  }
};


// #endregion
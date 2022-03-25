
const initialState = {
	ProductList: [],
	TotalRecords: 0
};

export default (state = initialState, action) => {
    let data = [];
    let _TotalRecords = 0;
    switch (action.type) {
      case 'FETCH_ALL':
        data = action.payload.ProductList;
        _TotalRecords = action.payload.TotalRecord;
        console.log('data: ', data)
        return {
          ...state,
          ProductList: data,
          TotalRecords: _TotalRecords
        };
      case 'FETCH_BY_BARCODE':
        data = action.payload.ProductList;
        console.log("FETCH_BY_BARCODE: ", data);
        return {
          ...state,
          ProductList: data
        };
      case 'SORT_BY_COLUMN':
        data = action.payload.ProductList;
        console.log("SORT_BY_COLUMN: ", data);
        return {
          ...state,
          ProductList: data
        };
      case 'FETCH_BY_PAGINATION':
        data = action.payload.ProductList;
        console.log("FETCH_BY_PAGINATION: ", data);
        return {
          ...state,
          ProductList: data
        };
      case 'UPLOAD_WAREHOUSE_CSV':
        data = action.payload.ProductList;
        console.log("Reducer: " + data);
        return state;
      case 'UPLOAD_STORE_CSV':
        data = action.payload.ProductList;
        console.log("Reducer: " + data);
        return state;
      default:
        return state;
    }
  };
  
  

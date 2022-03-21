export default (ProductList = [], action) => {
    let data=[];
    let TotalRecords = 0;
    switch (action.type) {
      case 'FETCH_ALL':
        data = action.payload.ProductList;
        TotalRecords = action.payload.TotalRecord;
        console.log("Reducer: ", action.payload);
        return data;// return {data, TotalRecords};
      case 'FETCH_BY_BARCODE':
        data = action.payload;
        console.log("FETCH_BY_BARCODE: ", data);
        return data;
      case 'SORT_BY_COLUMN':
        data = action.payload;
        console.log("SORT_BY_COLUMN: ", data);
        return data;
      case 'FETCH_BY_PAGINATION':
        data = action.payload;
        console.log("FETCH_BY_PAGINATION: ", data);
        return data;
      case 'UPLOAD_WAREHOUSE_CSV':
        data = action.payload;
        console.log("Reducer: " + data);
        return ProductList;
      case 'UPLOAD_STORE_CSV':
        data = action.payload;
        console.log("Reducer: " + data);
        return ProductList;
      default:
        return ProductList;
    }
  };
  
  

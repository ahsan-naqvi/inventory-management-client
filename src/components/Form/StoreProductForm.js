import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Paper, Input, Button, Icon, ButtonLabel } from './Styled';
import { uploadStoreProductCSV } from '../../actions/Product';
import Loader from '../Loader';

const StoreProductForm = (props) => {
  const [CSVFile, setCSVFile] = useState();
  const [csvArray, setcsvArray] = useState([]);
  const [loading, setLoading] = useState(false);

  //   const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();


  const processCSV = (str, delim = ',') => {
    const headers = str.slice(0, str.indexOf('\n')).trim().split(delim);
    const rows = str.slice(str.indexOf('\n') + 1).split('\n').map(x => x.trim());

    const newArray = rows.map(row => {
      const values = row.split(delim);
      const eachObject = headers.reduce((obj, header, i) => {
        obj[header] = values[i];
        return obj;
      }, {});
      return eachObject;
    });

    setcsvArray(newArray);
  }

  useEffect(() => {
    if(csvArray.length > 0){   
        dispatch(uploadStoreProductCSV(csvArray));
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
},[csvArray]);

  const onSubmit = (e) => {
    setLoading(true);

    const file = CSVFile;
    const reader = new FileReader();

    reader.onload = (e) => {
      const text = e.target.result;
      processCSV(text);
    }

    reader.readAsText(file);

  };

  return (
    <Paper data-layout="row" data-layout-align="center center" auto data-flex="45">
      <Input
        type="file"
        accept='.csv'
        name="csvFile"
        id="csvFile"
        onChange={(e) => setCSVFile(e.target.files[0])}
        fullWidth
      />
      {loading && <Loader />}
      <Button
        small
        onClick={(e) => {
          e.preventDefault();
          if (CSVFile) { onSubmit(e); }
        }}
        disabled={CSVFile ? false : true}
      >
        <div data-layout="row" data-layout-align="center center">
          <Icon>file_upload</Icon>
          <ButtonLabel>Store CSV</ButtonLabel>
        </div>
      </Button>
    </Paper>
  );
};

export default StoreProductForm;

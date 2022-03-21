import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { FindProductsByBarcode } from '../../actions/Product';
import { Paper, Input, Button, Icon, ButtonLabel } from '../Form/Styled';

const Search = () => {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');
    // const productData = useSelector((state) => state.ProductList);

    const btnSearchClickHandler = (e) => {
        e.preventDefault();        
        dispatch(FindProductsByBarcode(searchText));
    }


    return (
        <Paper autoComplete="off" id="divSearch" data-layout="row" data-layout-align="center center" data-flex="100" auto>
            <Input fullWidth id="txtSearch" type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search with Barcode" />
            <Button small onClick={btnSearchClickHandler}>
                <div data-layout="row" data-layout-align="center center">
                    <Icon>search</Icon>
                    <ButtonLabel>Search</ButtonLabel>
                </div>
            </Button>
        </Paper>
    );
};

export default Search;
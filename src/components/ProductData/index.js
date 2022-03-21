import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { FindAllProducts, SortByColumn, ChangePage } from '../../actions/Product';
import { TableHolder, TableHeader, TableBody, Row, Column, Button, Icon, ButtonLabel, PaginationHolder } from './Styled';

const header = [
    { name: 'Product Name', key: 'Name', type: 'string' },
    { name: 'Barcode', key: 'Barcode', type: 'string' },
    { name: 'Store Quantity', key: 'StoreQty', type: 'number' },
    { name: 'Warehouse Quantity', key: 'WarehouseQty', type: 'number' },
    { name: 'Total Quantity', key: 'TotalQty', type: 'number' },
    { name: 'Classification', key: 'Classification', type: 'string' },
]

const ProductData = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(FindAllProducts());
    },[]);

    const [Pagination, setPagination] = useState({ size: 10, page: 1 });
    const [ColumnDirection, setColumnDirection] = useState('ASC');
    const [sortByColumnName, setsortByColumnName] = useState('');

    // const orderDirection = useSelector((state) => state.ColumnDirection; //useSelector((state) => sortByField.ColumnDirection);
    // console.log(orderDirection)

    const ProductList = useSelector((state) => state.ProductList);
    // console.log('state: ',useSelector((state) => state));

    const sortProductList = (columnName) => {
        setsortByColumnName(columnName);
        let sortDirection = ColumnDirection === 'ASC' ? 'DESC' : 'ASC';
        let columnType = header.find(x => x.key === columnName).type;
        dispatch(SortByColumn(columnName, sortDirection, columnType));
        setColumnDirection(sortDirection);

    }

    useEffect(() => {
        if(ProductList.length > 0){
            dispatch(ChangePage(Pagination));
        }
    },[Pagination]);

    const btnPrevPageClickHandler = () => {
        setPagination({
            size: 10,
            page: Pagination.page > 1 ? Pagination.page - 1 : Pagination.page
        });
    }

    const btnNextPageClickHandler = () => {
        setPagination({
            size: 10,
            page: Pagination.page >= 1 ? Pagination.page + 1 : Pagination.page
        });        
    };

    const jsxProductList = (ProductList.length > 0) ? ProductList.map(Product => {
        return (
                <Row key={Product._id}>
                    <Column left>{Product.Name}</Column>
                    <Column>{Product.BarCode}</Column>
                    <Column>{Product.StoreQty}</Column>
                    <Column>{Product.WarehouseQty}</Column>
                    <Column>{Product.TotalQty}</Column>
                    <Column>{Product.Classification}</Column>
                </Row>
        )
    }) : (<Row><Column><span>No Records Yet.</span></Column></Row>);

    return [
        <TableHolder key="table" data-flex="100" >
            <TableHeader>
                <Row>
                    {header.map((h) =>
                        <Column key={h.key}>
                            <Button fullWidth type="button" onClick={() => { sortProductList(h.key); }} active={sortByColumnName === h.key}>
                                <ButtonLabel>{h.name}</ButtonLabel>
                                {sortByColumnName === h.key ?
                                    <Icon direction={ColumnDirection}>arrow_right_alt</Icon>
                                    : <Icon>import_export</Icon>
                                }
                            </Button>
                        </Column>
                    )}
                </Row>
            </TableHeader>
            <TableBody>
            {jsxProductList}
            </TableBody>
        </TableHolder>,
        <PaginationHolder key="pagination">
            <Button id="btnPrevPage" type="button" onClick={btnPrevPageClickHandler} disabled={Pagination.page === 1}>
                <Icon>keyboard_arrow_left</Icon>
                <ButtonLabel>PREV</ButtonLabel>
            </Button>
            <Button id="btnNextPage" type="button" onClick={btnNextPageClickHandler}>
                <ButtonLabel>NEXT</ButtonLabel>
                <Icon>keyboard_arrow_right</Icon>
            </Button>
            {/* <label> {Pagination.size} ------ {Pagination.page} </label> */}
        </PaginationHolder>
    ];
};

export default ProductData;
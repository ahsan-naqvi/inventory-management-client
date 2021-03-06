import React, { useEffect, useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { FindAllProducts, SortByColumn, ChangePage } from '../../actions/Product';
import Loader from "../Loader";
import { TableHolder, TableHeader, TableBody, Row, Column, Button, Icon, ButtonLabel, PaginationHolder, PagesLabel, NoDataHolder } from './Styled';

const header = [
    { name: 'Product Name', key: 'Name', type: 'string' },
    { name: 'Barcode', key: 'Barcode', type: 'number' },
    { name: 'Store Quantity', key: 'StoreQty', type: 'number' },
    { name: 'Warehouse Quantity', key: 'WarehouseQty', type: 'number' },
    { name: 'Total Quantity', key: 'TotalQty', type: 'number' },
    { name: 'Classification', key: 'Classification', type: 'string' },
]

const ProductData = () => {

    const [Pagination, setPagination] = useState({ size: 10, page: 1 });
    const [ColumnDirection, setColumnDirection] = useState('ASC');
    const [sortByColumnName, setsortByColumnName] = useState(header.find(x => x.key === 'Barcode').name);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    useEffect(async () => {
        
        dispatch(FindAllProducts('Barcode', 'ASC', 'number'));
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const ProductList = useSelector((state) => state.state.ProductList);
    const TotalRecords = useSelector((state) => state.state.TotalRecords);

    const sortProductList = (columnName) => {
        setsortByColumnName(columnName); 
        let { sortDirection, columnType } = _GetSortDirectionAndColumnType(ColumnDirection, columnName);
        dispatch(SortByColumn(columnName, sortDirection, columnType));
        setColumnDirection(sortDirection);
        setPagination({...Pagination,
            page: 1
        });
    }

    //Change Page Render Method
    useEffect(() => {
        if (ProductList.length > 0) {    
            // if(ColumnDirection !== undefined && sortByColumnName !== undefined){        
                let { columnType } = _GetSortDirectionAndColumnType(ColumnDirection, sortByColumnName);
            
                dispatch(ChangePage(Pagination,sortByColumnName, ColumnDirection, columnType));
            // }
        }
    }, [Pagination]);

    const btnPrevPageClickHandler = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        setPagination({
            size: 10,
            page: Pagination.page > 1 ? Pagination.page - 1 : Pagination.page
        });
    }

    const btnNextPageClickHandler = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        setPagination({
            size: 10,
            page: Pagination.page >= 1 ? Pagination.page + 1 : Pagination.page
        });
    };

    const jsxProductList = (ProductList.length > 0) && ProductList.map(Product => {
        return (
            <Row key={Product._id}>
                <Column left>{Product.BarCode}</Column>
                <Column left>{Product.Name}</Column>
                <Column>{Product.StoreQty}</Column>
                <Column>{Product.WarehouseQty}</Column>
                <Column>{Product.TotalQty}</Column>
                <Column>{Product.Classification}</Column>
            </Row>
        )
    });

    return [
        loading ? <Loader key="loader" /> :
        TotalRecords > 0 ?
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
            </TableHolder> :
            TotalRecords == 0 && <NoDataHolder key="noData"><Icon>error_outline</Icon> No Data Found</NoDataHolder>,
            TotalRecords > 0 && 
            <PaginationHolder key="pagination">
                <Button id="btnPrevPage" type="button" onClick={btnPrevPageClickHandler} disabled={Pagination.page === 1}>
                    <Icon>keyboard_arrow_left</Icon>
                    <ButtonLabel>PREV</ButtonLabel>
                </Button>
                <PagesLabel> Showing {Pagination.page} of {Math.ceil(TotalRecords / Pagination.size)} pages</PagesLabel>
                <Button id="btnNextPage" type="button" onClick={btnNextPageClickHandler} disabled={Pagination.page === Math.ceil(TotalRecords / Pagination.size)}>
                    <ButtonLabel>NEXT</ButtonLabel>
                    <Icon>keyboard_arrow_right</Icon>
                </Button>
            </PaginationHolder>
    ];
};

export default ProductData;

const _GetSortDirectionAndColumnType = (ColumnDirection, columnName) => {
    let sortDirection = ColumnDirection === 'ASC' ? 'DESC' : 'ASC';
    let columnType = header.find(x => x.key === columnName).type;
    return { sortDirection, columnType };
}

import './product-list.css';
import { Column, DataGrid, GroupPanel, HeaderFilter, Pager, Paging, SearchPanel } from 'devextreme-react/data-grid';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://demo6801398.mockable.io/products')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products);
            })
            .catch((err) => {
                console.error('Error fetching products:', err);
            });
    }, []);

    function titleCellRender(data) {
        return <Link to={`/product/details/${data.data.id}`}>{data.value}</Link>;
    }

    return (
        <section className='product-list'>
            <DataGrid
                dataSource={products}
                keyExpr="id"
                showBorders={true}
                allowColumnResizing={true}
                allowColumnReordering={true}
                columnAutoWidth={true}
            >
                <GroupPanel visible={true} />
                <HeaderFilter visible={true} />
                <SearchPanel visible={true} width={240} placeholder="Search..." />
                <Paging defaultPageSize={10} />
                <Pager
                    visible={true}
                    allowedPageSizes={[10, 25, 50, 100]}
                    displayMode='full'
                    showPageSizeSelector={true}
                    showInfo={true}
                    showNavigationButtons={true} />
                <Column dataField="titulo" caption="Titulo" cellRender={titleCellRender}></Column>
                <Column dataField="autor" caption="Autor" ></Column>
                <Column dataField="tipo" caption="Tipo" ></Column>
                <Column dataField="descrição" caption="Descrição" ></Column>
                <Column dataField="pid" caption="PID" ></Column>
            </DataGrid>
        </section>
    );
};

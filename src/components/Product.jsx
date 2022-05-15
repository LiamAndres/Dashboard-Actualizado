import React, { Component } from 'react';
import ProductList from './ProductList';



class Product extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }

    }



    async componentDidMount(){        


        const response = await fetch('/api/productos');
        const productsData = await response.json();

   


        const contProductos = productsData.productos.map(producto=>({
            'id': producto.id,
            'name': producto.name,
            'description': producto.description,
            'detail': '../images/img'+ (producto.id)+".jpg"
        }))

        console.log(contProductos);


        this.setState({
            products: contProductos
        });
        



        
    }

    render() {
        return(
            <>
                {/*<!-- PRODUCTS LIST -->*/}
                <h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
                
                {/*<!-- DataTales Example -->*/}
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>Nombre</th>
                                        <th>Descripción</th>
                                        <th>Detalle</th>
                                    </tr>
                                </thead>
                                {/* <tfoot>
                                    <tr>
                                        <th>id</th>
                                        <th>Referencia</th>
                                        <th>Fabricante</th>
                                        <th>Descripcion</th>
                                        <th>Precio</th>
                                        <th>Stock</th>
                                    </tr>
                                </tfoot> */}
                                <tbody>
                                {
                                    this.state.products.map((product, index)=>{
                                      return <ProductList {...product} key={index}/>
                                  })
                                  
                                  }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>            
            </>
        )

    }

    
}
export default Product;
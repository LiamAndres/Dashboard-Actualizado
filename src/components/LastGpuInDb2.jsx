import React, { Component } from "react";




class LastGpuInDb extends Component {
    constructor(){
        super();
        this.state = {
            lastProduct:[]
        }
    }
    
    async componentDidMount(){
        const response = await fetch('/api/productos');
        const productsData = await response.json();
        const nlastProduct = productsData.count - 1;

        const responseDetail = await fetch('/api/productos/'+ nlastProduct);
        const lastProductData = await responseDetail.json();
        const imgProduct = lastProductData.urlImagenProducto;

        let contLastProduct = productsData.productos[nlastProduct];
        contLastProduct.urlImagen = imgProduct;


        this.setState({
            lastProduct: contLastProduct
        });
        

    }

    render() {
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">{this.state.lastProduct.name}</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "40rem"}} src={this.state.lastProduct.urlImagen} alt="Last GPU in Data Base"/>
                        </div>
                        <p>{this.state.lastProduct.description}</p>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View GPU detail</a>
                    </div>
                </div>
            </div>
        );}
    }

export default LastGpuInDb;
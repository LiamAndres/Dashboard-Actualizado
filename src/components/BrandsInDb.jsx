import React, { Component } from 'react';
import Brands  from './Brands';
import SmallCard from './SmallCard';



class BrandsInDb extends Component {
    constructor (){
        super()
        this.state = {
            brandList : []
        }
    }

    async componentDidMount() {
        const response = await fetch('/api/productos');
        const productsData = await response.json();
        const resumenProductsBrands = productsData.countByCategory;

        const contents = Object.keys(resumenProductsBrands).map(key=>({
                title: key, 
                quantity:resumenProductsBrands[key],
                borderColor: 'grey',
                iconName: 'fa-square'
                }
            ));


        this.setState({
            brandList: contents
        })
    }


    render(){
        return (
            <>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Products by Brand in Data Base</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {
                                    this.state.brandList.map((brand,index)=>{
                                        return  <SmallCard  {...brand}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>            
            </>
        );
    
    }
   
}
export default BrandsInDb;
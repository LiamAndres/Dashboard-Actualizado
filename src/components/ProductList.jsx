import React from "react";

function ProductList({id, name, description, detail}) {


    return (
        <>        
        <tr>
            <th>{id}</th>
            <th>{name}</th>
            <th>{description}</th>
            <th><img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "20rem"}} src={detail} alt=" GPU "/></th>
        </tr>
    
    </>
    
    );

}


export default ProductList;
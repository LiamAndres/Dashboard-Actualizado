import React, { Component } from "react";
import SmallCard from "./SmallCard";





class ContentRowGpu extends Component {

    
    constructor(){
        super();
        this.state = {
            contents:[]
        }
    }

    async componentDidMount(){
        const response = await fetch('/api/productos');
        const productsData = await response.json();
        
        const responseUsers = await fetch('/api/usuarios');
        const usersData = await responseUsers.json();

        const contents =[
            {
                title:'GPU IN DATA BASE',
                quantity: productsData.count,
                borderColor: 'primary',
                iconName: 'fa-play',
            },
            {
                title:'TOTAL BRANDS',
                quantity: Object.keys(productsData.countByCategory).length,
                borderColor: 'success',
                iconName: 'fa-registered'
            },
            {
                title:'USERS QUANTITY',
                quantity: usersData.count,
                borderColor: 'warning',
                iconName: 'fa-user'
            }
        ];
        
        this.setState({
            contents: contents
        }
);
    }


    render(){
    return (
      <div className="row">
        {this.state.contents.map((content, index)=>{
            return <SmallCard {...content} key={index}/>
        })}	
	  </div>  
    );

}
}



export default ContentRowGpu;
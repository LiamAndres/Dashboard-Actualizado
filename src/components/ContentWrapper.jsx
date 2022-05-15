import React from "react";
import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";
import Product from "./Product";

function ContentWrapper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <TopBar></TopBar>
                <ContentRowTop></ContentRowTop>
                <Product></Product>
            </div>
            
            <Footer className="sticky-footer bg-white"></Footer>
        </div>
    );
}

export default ContentWrapper;

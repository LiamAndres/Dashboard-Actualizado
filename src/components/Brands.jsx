import React from "react";


function Brands() {
    return (
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Brands in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                                <div className="card-body">
                                    NVIDIA
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                                <div className="card-body">
                                    Intel
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                                <div className="card-body">
                                    AMD
                                </div>
                            </div>
                        </div>						
                        
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Brands;
import React from "react";
import ContentRowGpu from "./ContentRowGpu";
import LastGpuInDb2 from "./LastGpuInDb2";
import BrandsInDb from "./BrandsInDb";

function ContentRowTop(){
    return(
        <div >
            <div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 clasName="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
                    <ContentRowGpu />					
					<div className="row">
                        <LastGpuInDb2 />
						<BrandsInDb />						
					</div>
				</div>        				
        </div>
    )
}

export default ContentRowTop;

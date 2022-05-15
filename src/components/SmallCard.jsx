import PropTypes from "prop-types";

function SmallCard({borderColor, quantity, title, iconName}){
    return(
        <div className="col-md-4 mb-4">
            <div className={`card border-left-${borderColor} shadow h-100 py-2`}> 
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${borderColor} text-uppercase mb-1`}>{title}
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{quantity}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas ${iconName} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

SmallCard.defaultProps ={
    title: 'No title',
    quantity: 0
}

SmallCard.propTypes = {
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    borderColor: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired
    
};

{/* <div className="col-md-4 mb-4">
							<div className="card border-left-primary shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">GPU in Data Base</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">32</div>
										</div>
										<div className="col-auto">
											<i className="fas fa-play fa-2x text-gray-300"></i>											
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 mb-4">
							<div className="card border-left-success shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Total brands</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">3</div>
										</div>
										<div className="col-auto">
											<i className="fas fa-registered fa-2x text-gray-300"></i>
											
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 mb-4">
							<div className="card border-left-warning shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Users quantity
											</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">29</div>
										</div>
										<div className="col-auto">
											<i className="fas fa-user fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>   */}

export default SmallCard;
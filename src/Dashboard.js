import React, { useState } from 'react';
import './Dashboard.css';

function Dashboard() {
    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

    const changeStyle1 = () => {
        if (style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1");
        }
        else{
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };
    
    return (
        <div>
            <body id="page-top">

                {/*  <!-- Page Wrapper --> */}
                <div id="wrapper">

                    {/*  <!-- Sidebar --> */}
                    <ul className={style} id="accordionSidebar">

                        {/*  <!-- Sidebar - Brand --> */}
                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                            <div className="sidebar-brand-icon">

                                <i className="fas fa-fw fa-tachometer-alt"></i>
                            </div>
                            <div className="sidebar-brand-text mx-3">Dashboard</div>
                            
                        </a>
                        {/*  <!-- Nav Item - Dashboard --> */}
                        <li className="nav-item active">
                            <a className="nav-link" href="index.html">
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                <span>Dashboard</span></a>
                        </li>

                        {/*  <!-- Nav Item - Pages Collapse Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapseTwo"
                                aria-expanded="true" aria-controls="collapseTwo">
                                <i className="fas fa-fw fa-cog"></i>
                                <span>Products</span>
                            </a>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <a className="collapse-item" href="buttons.html">Buttons</a>
                                    <a className="collapse-item" href="cards.html">Cards</a>
                                </div>
                            </div>
                        </li>

                        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapseUtilities"
                                aria-expanded="true" aria-controls="collapseUtilities">
                                <i className="fas fa-fw fa-wrench"></i>
                                <span>Customers</span>
                            </a>
                            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                                data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <a className="collapse-item" href="utilities-color.html">Colors</a>
                                    <a className="collapse-item" href="utilities-border.html">Borders</a>
                                    <a className="collapse-item" href="utilities-animation.html">Animations</a>
                                    <a className="collapse-item" href="utilities-other.html">Other</a>
                                </div>
                            </div>
                        </li>

                        {/*  <!-- Nav Item - Pages Collapse Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapsePages"
                                aria-expanded="true" aria-controls="collapsePages">
                                <i className="fas fa-fw fa-folder"></i>
                                <span>Income</span>
                            </a>
                            <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <a className="collapse-item" href="login.html">Login</a>
                                    <a className="collapse-item" href="register.html">Register</a>
                                    <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                                    <div className="collapse-divider"></div>
                                    <a className="collapse-item" href="404.html">404 Page</a>
                                    <a className="collapse-item" href="blank.html">Blank Page</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="/" data-toggle="collapse" 
                                aria-expanded="true">
                                <i className="fas fa-fw fa-chart-area"></i>
                                <span>Promote</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="/" data-toggle="collapse"
                                aria-expanded="true">
                                <i className="fas fa-fw fa-table"></i>
                                <span>Help</span>
                            </a>
                        </li>

                        {/*  <!-- Sidebar Message --> */}
                        <div className="sidecolor d-none d-lg-flex mt-15">
                        <div className="card1">
                                            <div className="card-body1">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                    <i className="fas fa-comments text-gray-300"></i>
                                                    </div>
                                                    <div className="col-auto">
                                                     <div className="text-xs font-weight-bold text-light">
                                                            Evano</div>
                                                            <div className="mb-0  text-grey">Project Manager</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                        </div>

                    </ul>
                    {/*  <!-- End of Sidebar --> */}

                    {/*  <!-- Content Wrapper --> */}
                    <div id="content-wrapper" className="d-flex flex-column">

                        {/*  <!-- Main Content --> */}
                        <div id="content">

                            {/*  <!-- Topbar --> */}
                            <nav className="navbar navbar-expand navbar-light topbar mb-4 static-top">

                                {/*  <!-- Sidebar Toggle (Topbar) --> */}
                                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={changeStyle1}>
                                    <i className="fa fa-bars"></i>
                                </button>

                                <ul className="navbar-nav mr-auto ml-md-3 my-2 my-md-0 mw-100">

                                        <li><h6 className="d-none d-sm-inline-block"> Hello Shahrukh</h6></li>
                                        </ul>
                                <div className="form-group has-search">
                                <span className="fa fa-search form-control-feedback"></span>
                                <input type="text" className="form-control" placeholder="Search"/>
                            </div>

                            </nav>
                            <div className="container-fluid">
                                
                                <div className="row">

                                    {/*  <!-- Earnings (Monthly) Card Example --> */}
                                    <div className="col-xl-3 col-md-6 mb-4">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col">
                                                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="text-xs font-weight-bold text-primary mb-1">
                                                            Earning </div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">$198k</div>
                                                        <div className="h6 mb-0 font-weight-bold text-gray-800">
                                                            <span style={{ color: 'green' }}>37.8%</span> this month
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*  <!-- Earnings (Monthly) Card Example --> */}
                                    <div className="col-xl-3 col-md-6 mb-4">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    
                                                    <div className="col mr-2">
                                                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="text-xs font-weight-bold text-success mb-1">
                                                            Orders</div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">$2.4k</div>
                                                        <div className="h6 mb-0 font-weight-bold text-gray-800"><span style={{ color: 'red' }}>2%</span> this month</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  <!-- Earnings (Monthly) Card Example --> */}
                                    <div className="col-xl-3 col-md-6 mb-4">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                
                                                <div className="col mr-2">
                                                        <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="text-xs font-weight-bold text-info mb-1">Balance
                                                        </div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">$2.4k</div>
                                                        <div className="h6 mb-0 font-weight-bold text-gray-800"><span style={{ color: 'red' }}>2%</span> this month</div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  <!-- Pending Requests Card Example --> */}
                                    <div className="col-xl-3 col-md-6 mb-4">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                                                    </div>
                                                    <div className="col-auto">
                                                        
                                                    <div className="text-xs font-weight-bold text-warning mb-1">
                                                            Total Sales</div>
                                                            <div className="h5 mb-0 font-weight-bold text-gray-800">$89k</div>
                                                        <div className="h6 mb-0 font-weight-bold text-gray-800"><span style={{ color: 'green' }}>11%</span> this week</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*  <!-- Content Row --> */}

                                <div className="row">

                                    {/*   <!-- Area Chart --> */}
                                    <div className="col-xl-8 col-lg-7">
                                        <div className="card shadow mb-4">
                                            {/*  <!-- Card Header - Dropdown --> */}
                                            <div
                                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <div >
                                                <h6 className="m-0 font-weight-bold text-primary">Overview</h6>
                                                <div className="m-0 text-grey">Monthly Overview</div>
                                                </div>
                                                
                                                <div className="dropdown arrow d-flex flex-row">
                                                <div className="text-grey">Quaterly</div>
                                                    <a className="dropdown-toggle" href="/" role="button" aria-expanded="false">
                                                    </a>
                                                    
                                                </div>
                                            </div>
                                            {/*  <!-- Card Body --> */}
                                            <div className="card-body">
                                                <div className="chart-area">
                                                    {/* <canvas id="myAreaChart"></canvas> */}
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  <!-- Pie Chart --> */}
                                    <div className="col-xl-4 col-lg-5">
                                        <div className="card shadow mb-4">
                                            {/*  <!-- Card Header - Dropdown --> */}
                                            <div
                                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <div>
                                                <h6 className="m-0 font-weight-bold text-primary">Customers</h6>
                                                <div className="text-grey">Customers that buy products</div>
                                                </div>
                                            </div>
                                            {/*  <!-- Card Body --> */}
                                            <div className="card-body">
                                                <div className="chart-pie pt-4 pb-2">
                                                    <canvas id="myPieChart"></canvas>
                                                </div>
                                                <div className="mt-4 text-center small">
                                                    <span className="mr-2">
                                                    </span>
                                                
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                        <div className="card shadow mb-4">
                                            <div className="card-header d-flex py-3">
                                                <div className="mr-auto p-2">
                                                <h6 className="m-0 font-weight-bold text-primary">Product Sell</h6>
                                                </div>
                                                <div className="form-group has-search  p-2">
                                <span className="fa fa-search form-control-feedback"></span>
                                <input type="text" className="form-control" placeholder="Search"/>
                            </div>
                                                <div className="dropdown arrow p-2 d-flex mt-2">
                                                <div className="text-grey">Last 30 days</div>
                                                    <a className="dropdown-toggle ml-1" href="/" role="button" aria-expanded="false">
                                                    </a>
                                                    
                                                </div>

                                            </div>
                                            <div className="card-body">
                                                <h4 className="small font-weight-bold">Server Migration <span
                                                    className="float-right">20%</span></h4>
                                                <div className="progress mb-4">
                                                    <div className="progress-bar bg-danger a2" role="progressbar" ></div>
                                                </div>
                                                <h4 className="small font-weight-bold">Sales Tracking <span
                                                    className="float-right">40%</span></h4>
                                                <div className="progress mb-4">
                                                    <div className="progress-bar bg-warning a3" role="progressbar" ></div>
                                                </div>
                                                <h4 className="small font-weight-bold">Customer Database <span
                                                    className="float-right">60%</span></h4>
                                                <div className="progress mb-4">
                                                    <div className="progress-bar a7" role="progressbar"></div>
                                                </div>
                                                <h4 className="small font-weight-bold">Payout Details <span
                                                    className="float-right">80%</span></h4>
                                                <div className="progress mb-4">
                                                    <div className="progress-bar bg-info a4" role="progressbar" ></div>
                                                </div>
                                                <h4 className="small font-weight-bold">Account Setup <span
                                                    className="float-right">Complete!</span></h4>
                                                <div className="progress">
                                                    <div className="progress-bar bg-success a5" role="progressbar" ></div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                </div>

                            </div>

                        </div>

                        <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright &copy; Rupali Barnwal 2023</span>
                                </div>
                            </div>
                        </footer>

                    </div>

                </div>

                

            </body>
        </div>
    )
}

export default Dashboard;

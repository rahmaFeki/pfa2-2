import React from 'react';
function NavBar() {
  return (
    <div id="header_top" className="header_top">
        <div className="container">
            <div className="hleft">
                <a className="header-brand" href="index.html"><i className="fa fa-graduation-cap brand-logo"></i></a>
                <div className="dropdown">
                    <a  className="nav-link icon menu_toggle"><i className="fe fe-align-center"></i></a>
                 
                   
                </div>
            </div>
            <div className="hright">
                <a  className="nav-link icon right_tab"><i className="fe fe-align-right"></i></a>
                <a href="login.html" className="nav-link icon settingbar"><i className="fe fe-power"></i></a>                
            </div>
        </div>
    </div>
  );
}

export default NavBar;
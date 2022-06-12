import React from 'react'

export default function Master() {
  return (
    <div className="App">
      {/*--Page Wrapper */}
      <div id="wrapper">
        {/*--Sidebar  */}

        {/*--End of Sidebar  */}
        {/*--Content Wrapper  */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/*--Main Content  */}
          <div id="content">
            {/*--Topbar  */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              {/*--Sidebar Toggle (Topbar)  */}
            </nav>
            {/*--End of Topbar  */}
            {/*--Begin Page Content  */}
            <div className="container-fluid">
              {/*--Page Heading  */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              </div>
              <Dashboard/>
            </div>
            {/*-- /.container-fluid  */}
        </div>
          {/*--End of Main Content  */}
          {/*--Footer  */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Your Website 2021</span>
              </div>
            </div>
          </footer>
          {/*--End of Footer  */}
        </div>
        {/*--End of Content Wrapper  */}
      </div>
      {/*--End of Page Wrapper  */}
    </div>

  )
}

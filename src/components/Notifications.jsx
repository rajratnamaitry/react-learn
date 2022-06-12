import React, { Component } from 'react';

class Notifications extends Component {
  render() {
    return (
      <div id="page-wrapper">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">Notifications</h1>
          </div>
          {/* <!-- /.col-lg-12 --> */}
        </div>
        {/* <!-- /.row --> */}
        <div className="row">
          <div className="col-lg-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                Alert Styles
              </div>
              {/* <!-- /.panel-heading --> */}
              <div className="panel-body">
                <div className="alert alert-success">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a  className="alert-link">Alert Link</a>.
                </div>
                <div className="alert alert-info">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a  className="alert-link">Alert Link</a>.
                </div>
                <div className="alert alert-warning">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a  className="alert-link">Alert Link</a>.
                </div>
                <div className="alert alert-danger">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a  className="alert-link">Alert Link</a>.
                </div>
              </div>
              {/* <!-- .panel-body --> */}
            </div>
            {/* <!-- /.panel --> */}
          </div>
          {/* <!-- /.col-lg-6 --> */}
          <div className="col-lg-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                Dismissable Alerts
              </div>
              {/* <!-- /.panel-heading --> */}
              <div className="panel-body">
                <div className="alert alert-success alert-dismissable">
                  <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a  className="alert-link">Alert Link</a>.
                </div>
                <div className="alert alert-info alert-dismissable">
                  <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a  className="alert-link">Alert Link</a>.
                </div>
                <div className="alert alert-warning alert-dismissable">
                  <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a  className="alert-link">Alert Link</a>.
                </div>
                <div className="alert alert-danger alert-dismissable">
                  <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a  className="alert-link">Alert Link</a>.
                </div>
              </div>
              {/* <!-- .panel-body --> */}
            </div>
            {/* <!-- /.panel --> */}
          </div>
          {/* <!-- /.col-lg-6 --> */}
        </div>
        {/* <!-- /.row --> */}
        <div className="row">
          <div className="col-lg-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                Modals
              </div>
              {/* <!-- /.panel-heading --> */}
              <div className="panel-body">
                {/* <!-- Button trigger modal --> */}
                <button className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                  Launch Demo Modal
                </button>
                {/* <!-- Modal --> */}
                <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title" id="myModalLabel">Modal title</h4>
                      </div>
                      <div className="modal-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                    {/* <!-- /.modal-content --> */}
                  </div>
                  {/* <!-- /.modal-dialog --> */}
                </div>
                {/* <!-- /.modal --> */}
              </div>
              {/* <!-- .panel-body --> */}
            </div>
            {/* <!-- /.panel --> */}
          </div>
          {/* <!-- /.col-lg-6 --> */}
          <div className="col-lg-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                Tooltips and Popovers
              </div>
              {/* <!-- /.panel-heading --> */}
              <div className="panel-body">
                <h4>Tooltip Demo</h4>
                <div className="tooltip-demo">
                  <button type="button" className="btn btn-default" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</button>
                  <button type="button" className="btn btn-default" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>
                  <button type="button" className="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
                  <button type="button" className="btn btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>
                </div>
                <br />
                <h4>Clickable Popover Demo</h4>
                <div className="tooltip-demo">
                  <button type="button" className="btn btn-default" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                    Popover on left
                  </button>
                  <button type="button" className="btn btn-default" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                    Popover on top
                  </button>
                  <button type="button" className="btn btn-default" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                    Popover on bottom
                  </button>
                  <button type="button" className="btn btn-default" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                    Popover on right
                  </button>
                </div>
              </div>
              {/* <!-- ./panel-body --> */}
            </div>
            {/* <!-- /.panel --> */}
          </div>
          {/* <!-- /.col-lg-6 --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
    );
  }
}

export default Notifications;
import React, { Component } from "react";
import { connect } from "react-redux";
import { dashboard } from "../../actions/dashboardActions";

class Dashboard extends Component {
  componentDidMount() {
    const data = {
      type: "tests"
    };
    console.log(data);
    this.props.dashboard(data);
  }
  render() {
    return (
    <div><h1>dashboard</h1> </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dashboard: state.dashboard
});

export default connect(
  mapStateToProps,
  { dashboard }
)(Dashboard);

import React, { Component } from "react";
import { connect } from "react-redux";
import {
Chart,
Geom,
Axis,
Tooltip,
Legend,
} from "bizcharts";
import DataSet from "@antv/data-set";
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
    const datas=[
      {
        "donor_code": "110101",
        "donor_edes": "GoN",
        "exp_gon70": 374847697.5327,
        "exp_grant70": 0,
        "exp_loan70": 0,
        "exp_gon71": 467656798.67024,
        "exp_grant71": 0,
        "exp_loan71": 0,
        "exp_gon72": 528243302.45994,
        "exp_grant72": 0,
        "exp_loan72": 0,
        "exp_gon73": 737406330.64193,
        "exp_grant73": 0,
        "exp_loan73": 0,
        "exp_gon74": 955728401.21432,
        "exp_grant74": 0,
        "exp_loan74": 0,
        "exp_gon75": 601138606.1898,
        "exp_grant75": 1590100000.292,
        "exp_loan75": 0,
        "total_expenditure": 4263749901396.82
      },
      {
        "donor_code": "210101",
        "donor_edes": "ADB - General",
        "exp_gon70": 0,
        "exp_grant70": 5246574.42483,
        "exp_loan70": 6261063.74069,
        "exp_gon71": 0,
        "exp_grant71": 5380981.51002,
        "exp_loan71": 10031946.39329,
        "exp_gon72": 0,
        "exp_grant72": 6109098.02663,
        "exp_loan72": 14996014.13812,
        "exp_gon73": 0,
        "exp_grant73": 7408251.42499,
        "exp_loan73": 16863985.25497,
        "exp_gon74": 0,
        "exp_grant74": 5517915.05906,
        "exp_loan74": 25322776.64463,
        "exp_gon75": 19.5825,
        "exp_grant75": 1183457.12764,
        "exp_loan75": 14119533.63134,
        "total_expenditure": 132383103552.16
      },
      {
        "donor_code": "210102",
        "donor_edes": "JFPR",
        "exp_gon70": 0,
        "exp_grant70": 0,
        "exp_loan70": 0,
        "exp_gon71": 0,
        "exp_grant71": 123219.558,
        "exp_loan71": 0,
        "exp_gon72": 0,
        "exp_grant72": 77267.963,
        "exp_loan72": 0,
        "exp_gon73": 0,
        "exp_grant73": 0,
        "exp_loan73": 0,
        "exp_gon74": 0,
        "exp_grant74": 325395.78332,
        "exp_loan74": 0,
        "exp_gon75": 0,
        "exp_grant75": 325816.45539,
        "exp_loan75": 0,
        "total_expenditure": 857080061.71
      },
      {
        "donor_code": "210103",
        "donor_edes": "ADB- Pool Fund",
        "exp_gon70": 0,
        "exp_grant70": 0,
        "exp_loan70": 0,
        "exp_gon71": 0,
        "exp_grant71": 623428.92521,
        "exp_loan71": 0,
        "exp_gon72": 0,
        "exp_grant72": 0,
        "exp_loan72": 283158.69622,
        "exp_gon73": 0,
        "exp_grant73": 111592.34598,
        "exp_loan73": 0,
        "exp_gon74": 0,
        "exp_grant74": 96104.61548,
        "exp_loan74": 0,
        "exp_gon75": 0,
        "exp_grant75": 9169.188,
        "exp_loan75": 0,
        "total_expenditure": 1123453770.89
      },
      {
        "donor_code": "210301",
        "donor_edesc": "IDA - General",
        "exp_gon70": 0,
        "exp_grant70": 9607099.78887,
        "exp_loan70": 7456736.91153,
        "exp_gon71": 0,
        "exp_grant71": 5906844.81786,
        "exp_loan71": 5864201.69496,
        "exp_gon72": 0,
        "exp_grant72": 7084526.88498,
        "exp_loan72": 11680935.07387,
        "exp_gon73": 0,
        "exp_grant73": 8707592.81546,
        "exp_loan73": 25512446.44257,
        "exp_gon74": 0,
        "exp_grant74": 4866012.80218,
        "exp_loan74": 47482389.2813,
        "exp_gon75": 0,
        "exp_grant75": 707469.96173,
        "exp_loan75": 27747154.2013,
        "total_expenditure": 185212350957.53
      },
      {
        "donor_code": "210302",
        "donor_edesc": "WB - GEF",
        "exp_gon70": 0,
        "exp_grant70": 0,
        "exp_loan70": 0,
        "exp_gon71": 0,
        "exp_grant71": 88581.64255,
        "exp_loan71": 2625193.32643,
        "exp_gon72": 0,
        "exp_grant72": 67136.61026,
        "exp_loan72": 1615192.41632,
        "exp_gon73": 0,
        "exp_grant73": 2340.23,
        "exp_loan73": 0,
        "exp_gon74": 0,
        "exp_grant74": 0,
        "exp_loan74": 0,
        "exp_gon75": 0,
        "exp_grant75": 0,
        "exp_loan75": 0,
        "total_expenditure": 4398444225.56
      }
      
    ]
    const ds = new DataSet();
    const dv = ds.createView().source(datas);
    dv.transform({
    type: "fold",
    fields: ["exp_gon70","exp_grant70","exp_loan70","exp_gon71","exp_grant71","exp_loan71","exp_gon72","exp_grant72","exp_loan72","exp_gon73","exp_grant73","exp_loan73","exp_gon74","exp_grant74","exp_loan74","exp_gon75","exp_grant75","exp_loan75"],
    // 展开字段集
    key: "type",
    // key字段
    value: "value" // value字段
  });
    return (
      <div>
      <Chart height={400} data={dv} forceFit>
        <Legend />
        <Axis
          name="label"
          label={{
            offset: 12
          }}
        />
        <Axis name="value" position={"left"} />
        <Tooltip />
        <Geom
          type="interval"
          position="donor_edes*value"
          color={"type"}
          adjust={[
            {
              type: "dodge",
              marginRatio: 1 / 32
            }
          ]}
        />
      </Chart>
    </div>
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

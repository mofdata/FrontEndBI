import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  getExpenditure,
  setLoading,
  resetLoading
} from "../../actions/dashboardActions";
import { ResponsiveBar } from "@nivo/bar";

const datas = [
  
  {
    donor_code: "210919",
    donor_edesc: "IOM",
    exp_gon70: 0,
    exp_grant70: 4698.569,
    exp_loan70: 0,
    exp_gon71: 0,
    exp_grant71: 6077,
    exp_loan71: 0,
    exp_gon72: 0,
    exp_grant72: 0,
    exp_loan72: 0,
    exp_gon73: 0,
    exp_grant73: 0,
    exp_loan73: 0,
    exp_gon74: 0,
    exp_grant74: 0,
    exp_loan74: 0,
    exp_gon75: 0,
    exp_grant75: 0,
    exp_loan75: 0,
    total_expenditure: 10775569
  }
];

const Dashboard = (props) => {
  // const [data] = useState();
  const {
    getExpenditure,
    expenditure,
    loading,
    setLoading,
    resetLoading,
    error
  } = props;
  // console.log(props);
  useEffect(() => {
    setLoading();
    getExpenditure()
      .then(() => resetLoading())
      .catch((err) => {
        console.log(err);
        resetLoading();
      });
  }, []);
  // const [loading, setloading] = useState(loading)
  // const kahsjdhf = () => {
  //   setLoading(false)
  // }
  // const datass=expenditure;
  console.log(expenditure)
  if(loading){
    return <p>loading</p>
  }
  return (
    <div style={{height: 400}}>
    {/* {console.log(data)} */}
      {/* { loading && <p>loading</p> } */}
      <ResponsiveBar
        data={expenditure}
        keys={[
          "exp_gon70",
          "exp_grant70",
          "exp_gon71",
          "exp_grant71",
          "exp_loan71",
          "exp_gon72",
          "exp_grant72",
          "exp_loan72",
          "exp_gon73",
          "exp_grant73",
          "exp_loan73",
          "exp_gon74",
          "exp_grant74",
          "exp_loan74",
          "exp_gon75",
          "exp_grant75",
          "exp_loan75"
        ]}
        indexBy="donor_edesc"
        margin={{ top: 80, right: 130, bottom: 50, left: 90 }}
        padding={0.3}
        groupMode="grouped"
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        fill={[
          {
            match: {
              id: "fries"
            },
            id: "dots"
          },
          {
            match: {
              id: "sandwich"
            },
            id: "lines"
          }
        ]}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "donor_edes",
          legendPosition: "middle",
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "expenditure",
          legendPosition: "middle",
          legendOffset: -75
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.dashboard,
    ...state.global
  };
};

const mapDispatchToProps = {
  getExpenditure,
  setLoading,
  resetLoading
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

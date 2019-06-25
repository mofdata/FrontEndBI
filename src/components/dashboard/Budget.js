import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  setLoading,
  resetLoading,
  getBudget
} from "../../actions/dashboardActions";
import { ResponsiveBar } from "@nivo/bar";


const Budget = (props) => {
  // const [data] = useState();
  const {
    getBudget,
    budget,
    loading,
    setLoading,
    resetLoading,
    error
  } = props;
  // console.log(props);
  useEffect(() => {
    setLoading();
    getBudget()
      .then(() => resetLoading())
      .catch((err) => {
        // console.log(err);
        resetLoading();
      });
  }, []);
  console.log(budget)
  if(loading){
    return <p>loading</p>
  }
  return (
    <div style={{height: 500}}>
    {/* {console.log(data)} */}
      {/* { loading && <p>loading</p> } */}
      <ResponsiveBar
        data={budget}
        keys={[
            "bud_gon70",
            "bud_grant70",
            "bud_loan70",
            "bud_gon71",
            "bud_grant71",
            "bud_loan71",
            "bud_gon72",
            "bud_grant72",
            "bud_loan72",
            "bud_gon73",
            "bud_grant73",
            "bud_loan73",
            "bud_gon74",
            "bud_grant74",
            "bud_loan74",
            "bud_gon75",
            "bud_grant75"
        ]}
        indexBy="donor_edesc"
        margin={{ top: 100, right: 130, bottom: 50, left: 90 }}
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
          legend: "donor_edesc",
          legendPosition: "middle",
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "budget",
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
  setLoading,
  resetLoading,
  getBudget
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Budget);

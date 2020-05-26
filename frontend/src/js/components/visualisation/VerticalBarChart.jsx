import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "antd";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
  ResponsiveContainer,
} from "recharts";

import { extractDataByTypeFromOverview } from "../../utils/overviewDataExtraction";
import { COLOR_MAPPING } from "../../constants/covid19ColorMapping";
import { STATE_MAPPING } from "../../constants/states";
import { getStateShortName } from "../../utils/googleMap";

function VerticalBarChartComponent({ data, targetState }) {
  console.log("data =", data);

  return (
    <Card
      hoverable
      className="col-6"
      title={`Covid-19 Data In ${
        targetState ? STATE_MAPPING.get(targetState) : "Australia"
      }`}
    >
      <ResponsiveContainer>
        <BarChart width={600} height={250} data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={80} />
          <Tooltip />
          <Bar
            dataKey={"value"}
            barSize={40}
            animationDuration={4000}
            name={"Number"}
          >
            {data.map((barData, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLOR_MAPPING.get(barData.name)}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      {data.length === 0 && (
        <div className={"empty-data-cover"}>
          <h2>
            Oops, there are no data available under current filtering
            criteria...
          </h2>
        </div>
      )}
    </Card>
  );
}

const mapStateToProps = (state, { targetState }) => {
  const { lastClickedInfo } = state.map;

  if (!targetState && lastClickedInfo && lastClickedInfo.address) {
    targetState = getStateShortName(lastClickedInfo.address);
  }

  const data = extractDataByTypeFromOverview(
    state.xhr.overviewData,
    targetState || "",
    state.filter.datesRange
  );
  return { data, targetState };
};

const VerticalBarChart = connect(
  mapStateToProps,
  null,
  (stateProps, dispatchProps, ownProps) => ({
    ...ownProps,
    ...dispatchProps,
    ...stateProps,
  })
)(VerticalBarChartComponent);

export { VerticalBarChart };
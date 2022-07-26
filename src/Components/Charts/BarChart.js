import d3 from "d3";
import React from "react";
import ReactFauxDOM from "react-faux-dom";
import PropTypes from "prop-types";

class BarChart extends React.Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    data: PropTypes.array,
    numPlayers: PropTypes.string,
    id: PropTypes.number,
  };

  render() {
    //const { width, height, data, interpolation } = this.props;

    console.log(
      this.props.width,
      this.props.height,
      this.props.data,
      this.props.id
    );
    const el = d3
      .select(ReactFauxDOM.createElement("div"))
      .style("font", "10px sans-serif")
      .style("text-align", "right")
      .style("color", "white")
      .style("display", "flex")
      .style("align-items", "flex-end");

    el.selectAll("div")
      .data(this.props.data)
      .enter()
      .append("div")
      .style("background", "green")
      .style("padding", "3px")
      .style("margin", "1px")
      .style("height", (d) => `${d * 10}px`)
      .style("width", "15px")
      .text((d) => d);

    return el.node().toReact();
  }
}

export default BarChart;

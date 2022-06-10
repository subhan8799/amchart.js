import React from 'react'
import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);
export default function Chart(props) {
  const chart = useRef(null);
  const [newChartData, setNewChartData] = useState({})
  const [chartData, setChartData] = useState([{
    "country": "Lithuania",
    "litres": 501.9
  }, {
    "country": "Czechia",
    "litres": 301.9
  }, {
     "country": "Ireland",
    "litres": 201.1
  }, {
    "country": "Germany",
    "litres": 165.8
  }, {
    "country": "Australia",
    "litres": 139.9
  }, {
    "country": "Austria",
    "litres": 128.3
  }, {
    "country": "UK",
    "litres": 99
  }, {
    "country": "Belgium",
    "litres": 60
  }, {
    "country": "The Netherlands",
    "litres": 50
  }]);

  useEffect(() => {
    console.log("NEw Data", chartData);
    var chart1 = am4core.create("chartdiv", am4charts.PieChart);
    chart1.data = chartData;

    var pieSeries = chart1.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";

    chart1.legend = new am4charts.Legend();
    chart.current = chart1.data;
    return () => {
      chart1.dispose();
    };
  }, [chartData]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("state", state);
  };
  const [state, setState] = useState({
    litres: "",
    country: "",
  });
  const handle = (e) => {
    const newdata = { ...state }
    newdata[e.target.id] = e.target.value;
    setState(newdata)
    console.log("newdata", newdata);
  }
  const submit = (e) => {
    e.preventDefault()
  }

  console.log(chartData);
  const submitData = () => {


console.log('on submit newchart data', JSON.parse(newChartData))
    setChartData(JSON.parse(newChartData))
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <form onSubmit={(e) => submit(e)}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Country
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="country"
                  aria-describedby="emailHelp"
                  name="country"
                  onChange={(e) => setNewChartData(e.target.value)}
                />
                <button  onClick={() => submitData()} type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-8">
            <div id="chartdiv"></div>
          </div>
        </div>
      </div>
    </>
  );
}
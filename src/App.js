import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
  constructor(props) {
    super(props);

    this.updateCharts = this.updateCharts.bind(this);

    this.state = {
      optionsMixedChart: {
        title: {
          text: "Please Choose A Fruit",
          align: "center",
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false
        },
        subtitle: {
          text: "Price per Unit in Each Month (In Cents)",
          align: "center"
        },
        chart: {
          id: "basic-bar",
          toolbar: {
            show: true
          }
        },
        plotOptions: {
          bar: {
            columnWidth: "50%",
            endingShape: "arrow"
          }
        },
        stroke: {
          width: [1, 1, 1, 1, 1]
        },
        xaxis: {
          categories: ["June", "July", "August", "September", "October"]
        },
        markers: {
          size: 1,
          strokeWidth: 4,
          fillOpacity: 0,
          strokeOpacity: 0,
          hover: {
            size: 8
          }
        },
        yaxis: {
          tickAmount: 10,
          min: 0,
          max: 200
        },
        tooltip: {
          enabled: true
        }
      },

      //Data for sales here
      seriesMixedChart: [
        {
          name: "Casa Fruta",
          type: "column",
          data: [0, 0, 0, 0, 0]
        },
        {
          name: "Cornucopia",
          type: "column",
          data: [0, 0, 0, 0, 0]
        },
        {
          name: "Better Produce",
          type: "column",
          data: [0, 0, 0, 0, 0]
        },
        {
          name: "Valley Spread",
          type: "column",
          data: [0, 0, 0, 0, 0]
        },
        {
          name: "Average",
          type: "column",
          data: [0, 0, 0, 0, 0]
        }
      ],
      optionsBar: {
        chart: {
          stacked: true,
          stackType: "100%",
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        dataLabels: {
          dropShadow: {
            enabled: true
          }
        },
        stroke: {
          width: 0
        },
        xaxis: {
          categories: ["Lifetime Units Purchased"],
          labels: {
            show: false
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        fill: {
          opacity: 1,
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            shadeIntensity: 0.35,
            gradientToColors: undefined,
            inverseColors: false,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [90, 0, 100]
          }
        },

        legend: {
          position: "bottom",
          horizontalAlign: "right"
        }
      },
      seriesBar: [
        {
          name: "Casa Fruta",
          data: [0]
        },
        {
          name: "Cornucopia",
          data: [0]
        },
        {
          name: "Better Produce",
          data: [0]
        },
        {
          name: "Valley Speard",
          data: [0]
        }
      ]
    };
  }

  updateCharts = event => {
    var fruitSales = [
      {
        date: 1559597400000,
        invoiceId: 101,
        item: "Grapefruit",
        price: 0.68,
        units: 16,
        store: "Casa Fruta"
      },
      {
        date: 1559597400000,
        invoiceId: 101,
        item: "Orange",
        price: 0.53,
        units: 21,
        store: "Casa Fruta"
      },
      {
        date: 1559597400000,
        invoiceId: 101,
        item: "Mango",
        price: 0.73,
        units: 23,
        store: "Casa Fruta"
      },
      {
        date: 1560288600000,
        invoiceId: 102,
        item: "Orange",
        price: 0.86,
        units: 10,
        store: "Cornucopia"
      },
      {
        date: 1560288600000,
        invoiceId: 102,
        item: "Banana",
        price: 0.09,
        units: 119,
        store: "Cornucopia"
      },
      {
        date: 1560288600000,
        invoiceId: 102,
        item: "Mango",
        price: 0.53,
        units: 32,
        store: "Cornucopia"
      },
      {
        date: 1560375000000,
        invoiceId: 103,
        item: "Lemon",
        price: 0.52,
        units: 24,
        store: "Casa Fruta"
      },
      {
        date: 1560375000000,
        invoiceId: 103,
        item: "Banana",
        price: 0.34,
        units: 38,
        store: "Casa Fruta"
      },
      {
        date: 1560375000000,
        invoiceId: 103,
        item: "Mango",
        price: 0.71,
        units: 9,
        store: "Casa Fruta"
      },
      {
        date: 1561411800000,
        invoiceId: 104,
        item: "Fuji Apple",
        price: 1.82,
        units: 5,
        store: "Better Produce"
      },
      {
        date: 1561411800000,
        invoiceId: 104,
        item: "Orange",
        price: 1.07,
        units: 11,
        store: "Better Produce"
      },
      {
        date: 1561411800000,
        invoiceId: 104,
        item: "Banana",
        price: 0.46,
        units: 35,
        store: "Better Produce"
      },
      {
        date: 1561411800000,
        invoiceId: 104,
        item: "Mango",
        price: 1.27,
        units: 6,
        store: "Better Produce"
      },
      {
        date: 1562016600000,
        invoiceId: 105,
        item: "Orange",
        price: 0.71,
        units: 7,
        store: "Valley Spread"
      },
      {
        date: 1562621400000,
        invoiceId: 106,
        item: "Grapefruit",
        price: 0.76,
        units: 17,
        store: "Valley Spread"
      },
      {
        date: 1562621400000,
        invoiceId: 106,
        item: "Lemon",
        price: 0.67,
        units: 3,
        store: "Valley Spread"
      },
      {
        date: 1563226200000,
        invoiceId: 107,
        item: "Grapefruit",
        price: 1.33,
        units: 1,
        store: "Better Produce"
      },
      {
        date: 1563226200000,
        invoiceId: 107,
        item: "Orange",
        price: 1.06,
        units: 15,
        store: "Better Produce"
      },
      {
        date: 1563226200000,
        invoiceId: 107,
        item: "Mango",
        price: 1.19,
        units: 9,
        store: "Better Produce"
      },
      {
        date: 1563831000000,
        invoiceId: 108,
        item: "Gala Apple",
        price: 1.94,
        units: 5,
        store: "Better Produce"
      },
      {
        date: 1563831000000,
        invoiceId: 108,
        item: "Grapefruit",
        price: 1.38,
        units: 13,
        store: "Better Produce"
      },
      {
        date: 1563831000000,
        invoiceId: 108,
        item: "Orange",
        price: 1.08,
        units: 10,
        store: "Better Produce"
      },
      {
        date: 1563831000000,
        invoiceId: 108,
        item: "Banana",
        price: 0.36,
        units: 7,
        store: "Better Produce"
      },
      {
        date: 1563831000000,
        invoiceId: 108,
        item: "Mango",
        price: 1.25,
        units: 15,
        store: "Better Produce"
      },
      {
        date: 1564435800000,
        invoiceId: 109,
        item: "Grapefruit",
        price: 0.81,
        units: 4,
        store: "Casa Fruta"
      },
      {
        date: 1564435800000,
        invoiceId: 109,
        item: "Orange",
        price: 0.52,
        units: 33,
        store: "Casa Fruta"
      },
      {
        date: 1564435800000,
        invoiceId: 109,
        item: "Lemon",
        price: 0.57,
        units: 26,
        store: "Casa Fruta"
      },
      {
        date: 1565040600000,
        invoiceId: 110,
        item: "Orange",
        price: 0.82,
        units: 18,
        store: "Cornucopia"
      },
      {
        date: 1565040600000,
        invoiceId: 110,
        item: "Banana",
        price: 0.49,
        units: 1,
        store: "Cornucopia"
      },
      {
        date: 1565040600000,
        invoiceId: 110,
        item: "Mango",
        price: 0.95,
        units: 14,
        store: "Cornucopia"
      },
      {
        date: 1565904600000,
        invoiceId: 111,
        item: "Grapefruit",
        price: 1.31,
        units: 8,
        store: "Better Produce"
      },
      {
        date: 1565904600000,
        invoiceId: 111,
        item: "Orange",
        price: 1.15,
        units: 3,
        store: "Better Produce"
      },
      {
        date: 1565904600000,
        invoiceId: 111,
        item: "Banana",
        price: 0.49,
        units: 13,
        store: "Better Produce"
      },
      {
        date: 1565904600000,
        invoiceId: 111,
        item: "Mango",
        price: 1.19,
        units: 2,
        store: "Better Produce"
      },
      {
        date: 1566336600000,
        invoiceId: 112,
        item: "Gala Apple",
        price: 1.62,
        units: 5,
        store: "Cornucopia"
      },
      {
        date: 1566336600000,
        invoiceId: 112,
        item: "Grapefruit",
        price: 1.26,
        units: 11,
        store: "Cornucopia"
      },
      {
        date: 1566336600000,
        invoiceId: 112,
        item: "Orange",
        price: 0.84,
        units: 7,
        store: "Cornucopia"
      },
      {
        date: 1566336600000,
        invoiceId: 112,
        item: "Mango",
        price: 1.18,
        units: 15,
        store: "Cornucopia"
      },
      {
        date: 1567114200000,
        invoiceId: 113,
        item: "Fuji Apple",
        price: 1.92,
        units: 5,
        store: "Better Produce"
      },
      {
        date: 1567114200000,
        invoiceId: 113,
        item: "Orange",
        price: 1.01,
        units: 1,
        store: "Better Produce"
      },
      {
        date: 1567459800000,
        invoiceId: 114,
        item: "Fuji Apple",
        price: 1.53,
        units: 1,
        store: "Cornucopia"
      },
      {
        date: 1567459800000,
        invoiceId: 114,
        item: "Grapefruit",
        price: 0.75,
        units: 25,
        store: "Cornucopia"
      },
      {
        date: 1567459800000,
        invoiceId: 114,
        item: "Banana",
        price: 0.64,
        units: 20,
        store: "Cornucopia"
      },
      {
        date: 1568323800000,
        invoiceId: 115,
        item: "Gala Apple",
        price: 1.98,
        units: 1,
        store: "Better Produce"
      },
      {
        date: 1568323800000,
        invoiceId: 115,
        item: "Fuji Apple",
        price: 1.81,
        units: 6,
        store: "Better Produce"
      },
      {
        date: 1568323800000,
        invoiceId: 115,
        item: "Orange",
        price: 1.08,
        units: 3,
        store: "Better Produce"
      },
      {
        date: 1568323800000,
        invoiceId: 115,
        item: "Banana",
        price: 0.37,
        units: 15,
        store: "Better Produce"
      },
      {
        date: 1568323800000,
        invoiceId: 115,
        item: "Mango",
        price: 1.16,
        units: 3,
        store: "Better Produce"
      },
      {
        date: 1568410200000,
        invoiceId: 116,
        item: "Gala Apple",
        price: 1.81,
        units: 10,
        store: "Cornucopia"
      },
      {
        date: 1568410200000,
        invoiceId: 116,
        item: "Grapefruit",
        price: 0.75,
        units: 1,
        store: "Cornucopia"
      },
      {
        date: 1568410200000,
        invoiceId: 116,
        item: "Lemon",
        price: 0.93,
        units: 14,
        store: "Cornucopia"
      },
      {
        date: 1568410200000,
        invoiceId: 116,
        item: "Mango",
        price: 0.61,
        units: 25,
        store: "Cornucopia"
      },
      {
        date: 1568928600000,
        invoiceId: 117,
        item: "Gala Apple",
        price: 1.99,
        units: 3,
        store: "Better Produce"
      },
      {
        date: 1568928600000,
        invoiceId: 117,
        item: "Fuji Apple",
        price: 1.88,
        units: 6,
        store: "Better Produce"
      },
      {
        date: 1568928600000,
        invoiceId: 117,
        item: "Grapefruit",
        price: 1.31,
        units: 13,
        store: "Better Produce"
      },
      {
        date: 1568928600000,
        invoiceId: 117,
        item: "Orange",
        price: 1.04,
        units: 1,
        store: "Better Produce"
      },
      {
        date: 1568928600000,
        invoiceId: 117,
        item: "Banana",
        price: 0.38,
        units: 3,
        store: "Better Produce"
      },
      {
        date: 1569274200000,
        invoiceId: 118,
        item: "Gala Apple",
        price: 1.35,
        units: 10,
        store: "Valley Spread"
      },
      {
        date: 1569274200000,
        invoiceId: 118,
        item: "Grapefruit",
        price: 0.97,
        units: 6,
        store: "Valley Spread"
      },
      {
        date: 1569274200000,
        invoiceId: 118,
        item: "Orange",
        price: 0.56,
        units: 30,
        store: "Valley Spread"
      },
      {
        date: 1569274200000,
        invoiceId: 118,
        item: "Banana",
        price: 0.36,
        units: 25,
        store: "Valley Spread"
      },
      {
        date: 1569879000000,
        invoiceId: 119,
        item: "Grapefruit",
        price: 0.75,
        units: 24,
        store: "Casa Fruta"
      },
      {
        date: 1569879000000,
        invoiceId: 119,
        item: "Orange",
        price: 0.56,
        units: 17,
        store: "Casa Fruta"
      },
      {
        date: 1569879000000,
        invoiceId: 119,
        item: "Lemon",
        price: 0.39,
        units: 44,
        store: "Casa Fruta"
      },
      {
        date: 1570570200000,
        invoiceId: 120,
        item: "Grapefruit",
        price: 1.05,
        units: 13,
        store: "Valley Spread"
      },
      {
        date: 1570570200000,
        invoiceId: 120,
        item: "Lemon",
        price: 0.74,
        units: 10,
        store: "Valley Spread"
      },
      {
        date: 1570656600000,
        invoiceId: 121,
        item: "Orange",
        price: 0.82,
        units: 8,
        store: "Valley Spread"
      },
      {
        date: 1570656600000,
        invoiceId: 121,
        item: "Lemon",
        price: 0.45,
        units: 14,
        store: "Valley Spread"
      },
      {
        date: 1571434200000,
        invoiceId: 122,
        item: "Gala Apple",
        price: 1.63,
        units: 1,
        store: "Cornucopia"
      },
      {
        date: 1571434200000,
        invoiceId: 122,
        item: "Fuji Apple",
        price: 1.14,
        units: 13,
        store: "Cornucopia"
      },
      {
        date: 1571434200000,
        invoiceId: 122,
        item: "Grapefruit",
        price: 0.71,
        units: 1,
        store: "Cornucopia"
      },
      {
        date: 1571434200000,
        invoiceId: 122,
        item: "Lemon",
        price: 0.29,
        units: 65,
        store: "Cornucopia"
      },
      {
        date: 1571434200000,
        invoiceId: 122,
        item: "Banana",
        price: 0.25,
        units: 63,
        store: "Cornucopia"
      }
    ];
    var Valley = [];
    var Better = [];
    var Corn = [];
    var Casa = [];
    var Average = [];

    for (var i = 0; i < fruitSales.length; ++i) {
      if (
        fruitSales[i].item === event.target.innerText ||
        (event.target.innerText === "Apple" &&
          (fruitSales[i].item === "Fuji Apple" ||
            fruitSales[i].item === "Gala Apple"))
      ) {
        switch (fruitSales[i].store) {
          case "Casa Fruta":
            Casa.push(fruitSales[i]);
            Average.push(fruitSales[i]);
            break;
          case "Cornucopia":
            Corn.push(fruitSales[i]);
            Average.push(fruitSales[i]);
            break;
          case "Valley Spread":
            Valley.push(fruitSales[i]);
            Average.push(fruitSales[i]);
            break;
          case "Better Produce":
            Better.push(fruitSales[i]);
            Average.push(fruitSales[i]);
            break;
          default:
            alert("Error");
            break;
        }
      }
    }
    var t6 = [0, 0, 0, 0, 0];
    var t7 = [0, 0, 0, 0, 0];
    var t8 = [0, 0, 0, 0, 0];
    var t9 = [0, 0, 0, 0, 0];
    var t10 = [0, 0, 0, 0, 0];
    var u6 = [0, 0, 0, 0, 0];
    var u7 = [0, 0, 0, 0, 0];
    var u8 = [0, 0, 0, 0, 0];
    var u9 = [0, 0, 0, 0, 0];
    var u10 = [0, 0, 0, 0, 0];
    var p6 = [0, 0, 0, 0, 0];
    var p7 = [0, 0, 0, 0, 0];
    var p8 = [0, 0, 0, 0, 0];
    var p9 = [0, 0, 0, 0, 0];
    var p10 = [0, 0, 0, 0, 0];
    var purchase = 0;
    var check = 0;
    for (var a = 0; a < Casa.length; ++a) {
      purchase = Casa[a];
      check = new Date(purchase["date"]);

      switch (check.getMonth()) {
        case 5:
          t6[0] += purchase["price"];
          u6[0] += purchase["units"];
          p6[0]++;
          t6[4] += purchase["price"];
          u6[4] += purchase["units"];
          p6[4]++;
          break;
        case 6:
          t7[0] += purchase["price"];
          u7[0] += purchase["units"];
          p7[0]++;
          t7[4] += purchase["price"];
          u7[4] += purchase["units"];
          p7[4]++;
          break;
        case 7:
          t8[0] += purchase["price"];
          u8[0] += purchase["units"];
          p8[0]++;
          t8[4] += purchase["price"];
          u8[4] += purchase["units"];
          p8[4]++;
          break;
        case 8:
          t9[0] += purchase["price"];
          u9[0] += purchase["units"];
          p9[0]++;
          t9[4] += purchase["price"];
          u9[4] += purchase["units"];
          p9[4]++;
          break;
        case 9:
          t10[0] += purchase["price"];
          u10[0] += purchase["units"];
          p10[0]++;
          t10[4] += purchase["price"];
          u10[4] += purchase["units"];
          p10[4]++;
          break;
        default:
          break;
      }
    }
    for (var j = 0; j < Corn.length; ++j) {
      purchase = Corn[j];
      check = new Date(purchase["date"]);
      switch (check.getMonth()) {
        case 5:
          t6[1] += purchase["price"];
          u6[1] += purchase["units"];
          p6[1]++;
          t6[4] += purchase["price"];
          u6[4] += purchase["units"];
          p6[4]++;
          break;
        case 6:
          t7[1] += purchase["price"];
          u7[1] += purchase["units"];
          p7[1]++;
          t7[4] += purchase["price"];
          u7[4] += purchase["units"];
          p7[4]++;
          break;
        case 7:
          t8[1] += purchase["price"];
          u8[1] += purchase["units"];
          p8[1]++;
          t8[4] += purchase["price"];
          u8[4] += purchase["units"];
          p8[4]++;
          break;
        case 8:
          t9[1] += purchase["price"];
          u9[1] += purchase["units"];
          p9[1]++;
          t9[4] += purchase["price"];
          u9[4] += purchase["units"];
          p9[4]++;
          break;
        case 9:
          t10[1] += purchase["price"];
          u10[1] += purchase["units"];
          p10[1]++;
          t10[4] += purchase["price"];
          u10[4] += purchase["units"];
          p10[4]++;
          break;
        default:
          break;
      }
    }
    for (var k = 0; k < Better.length; ++k) {
      purchase = Better[k];
      check = new Date(purchase["date"]);
      switch (check.getMonth()) {
        case 5:
          t6[2] += purchase["price"];
          u6[2] += purchase["units"];
          p6[2]++;
          t6[4] += purchase["price"];
          u6[4] += purchase["units"];
          p6[4]++;
          break;
        case 6:
          t7[2] += purchase["price"];
          u7[2] += purchase["units"];
          p7[2]++;
          t7[4] += purchase["price"];
          u7[4] += purchase["units"];
          p7[4]++;
          break;
        case 7:
          t8[2] += purchase["price"];
          u8[2] += purchase["units"];
          p8[2]++;
          t8[4] += purchase["price"];
          u8[4] += purchase["units"];
          p8[4]++;
          break;
        case 8:
          t9[2] += purchase["price"];
          u9[2] += purchase["units"];
          p9[2]++;
          t9[4] += purchase["price"];
          u9[4] += purchase["units"];
          p9[4]++;
          break;
        case 9:
          t10[2] += purchase["price"];
          u10[2] += purchase["units"];
          p10[2]++;
          t10[4] += purchase["price"];
          u10[4] += purchase["units"];
          p10[4]++;
          break;
        default:
          break;
      }
    }
    for (var l = 0; l < Valley.length; ++l) {
      purchase = Valley[l];
      check = new Date(purchase["date"]);
      switch (check.getMonth()) {
        case 5:
          t6[3] += purchase["price"];
          u6[3] += purchase["units"];
          p6[3]++;
          t6[4] += purchase["price"];
          u6[4] += purchase["units"];
          p6[4]++;
          break;
        case 6:
          t7[3] += purchase["price"];
          u7[3] += purchase["units"];
          p7[3]++;
          t7[4] += purchase["price"];
          u7[4] += purchase["units"];
          p7[4]++;
          break;
        case 7:
          t8[3] += purchase["price"];
          u8[3] += purchase["units"];
          p8[3]++;
          t8[4] += purchase["price"];
          u8[4] += purchase["units"];
          p8[4]++;
          break;
        case 8:
          t9[3] += purchase["price"];
          u9[3] += purchase["units"];
          p9[3]++;
          t9[4] += purchase["price"];
          u9[4] += purchase["units"];
          p9[4]++;
          break;
        case 9:
          t10[3] += purchase["price"];
          u10[3] += purchase["units"];
          p10[3]++;
          t10[4] += purchase["price"];
          u10[4] += purchase["units"];
          p10[4]++;
          break;
        default:
          break;
      }
    }

    /*
        var check = new Date(purchase["date"]);
        switch(check.getMonth()) {
          case 5:
              Total6 += purchase["price"];
              Units6 += purchase["units"];
              Purchases6++;
         
              break;
          case 6:
              Total7 += purchase["price"];
              Units7 += purchase["units"];
              Purchases7++;
              break;
          case 7:
              Total8 += purchase["price"];
              Units8 += purchase["units"];
              Purchases8++;
              break;
          case 8:
              Total9 += purchase["price"];
              Units9 += purchase["units"];
              Purchases9++;
              break;
          case 9:
              Total10 += purchase["price"];
              Units10 += purchase["units"];
              Purchases10++;
              break;
          default:
            break;
        }
        */

    this.setState({
      seriesBar: [
        {
          name: "Casa Fruta",
          data: [u6[0] + u7[0] + u8[0] + u9[0] + u10[0]]
        },
        {
          name: "Cornucopia",
          data: [u6[1] + u7[1] + u8[1] + u9[1] + u10[1]]
        },
        {
          name: "Better Produce",
          data: [u6[2] + u7[2] + u8[2] + u9[2] + u10[2]]
        },
        {
          name: "Valley Spread",
          data: [u6[3] + u7[3] + u8[3] + u9[3] + u10[3]]
        }
      ],
      seriesMixedChart: [
        {
          ...this.state.seriesMixedChart,
          name: "Casa Fruta",
          type: "column",
          data: [
            100 * (t6[0] / p6[0]),
            100 * (t7[0] / p7[0]),
            100 * (t8[0] / p8[0]),
            100 * (t9[0] / p9[0]),
            100 * (t10[0] / p10[0])
          ]
        },
        {
          name: "Cornucopia",
          type: "column",
          data: [
            100 * (t6[1] / p6[1]),
            100 * (t7[1] / p7[1]),
            100 * (t8[1] / p8[1]),
            100 * (t9[1] / p9[1]),
            100 * (t10[1] / p10[1])
          ]
        },
        {
          name: "Better Produce",
          type: "column",
          data: [
            100 * (t6[2] / p6[2]),
            100 * (t7[2] / p7[2]),
            100 * (t8[2] / p8[2]),
            100 * (t9[2] / p9[2]),
            100 * (t10[2] / p10[2])
          ]
        },
        {
          name: "Valley Spread",
          type: "column",
          data: [
            100 * (t6[3] / p6[3]),
            100 * (t7[3] / p7[3]),
            100 * (t8[3] / p8[3]),
            100 * (t9[3] / p9[3]),
            100 * (t10[3] / p10[3])
          ]
        },
        {
          name: "Average",
          type: "column",
          data: [
            100 * (t6[4] / p6[4]),
            100 * (t7[4] / p7[4]),
            100 * (t8[4] / p8[4]),
            100 * (t9[4] / p9[4]),
            100 * (t10[4] / p10[4])
          ]
        }
      ],

      optionsMixedChart: {
        ...this.state.optionsMixedChart,
        title: {
          ...this.state.optionsMixedChart.title,
          text: event.target.innerText
        }
      }
    });
  };

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="col mixed-chart">
            <Chart
              options={this.state.optionsMixedChart}
              series={this.state.seriesMixedChart}
              type="line"
              width="500"
            />
          </div>
        </div>

        <div className="row">
          <div className="col percentage-chart">
            <Chart
              options={this.state.optionsBar}
              height={140}
              series={this.state.seriesBar}
              type="bar"
              width={500}
            />
          </div>
        </div>

        <div className="row">
          <p className="col">
            <button onClick={this.updateCharts}>Banana</button>
          </p>
          <p className="col">
            <button onClick={this.updateCharts}>Apple</button>
          </p>
          <p className="col">
            <button onClick={this.updateCharts}>Grapefruit</button>
          </p>
        </div>
        <div className="row">
          <p className="col">
            <button onClick={this.updateCharts}>Orange</button>
          </p>
          <p className="col">
            <button onClick={this.updateCharts}>Mango</button>
          </p>
          <p className="col">
            <button onClick={this.updateCharts}>Lemon</button>
          </p>
        </div>
      </div>
    );
  }
}

export default App;

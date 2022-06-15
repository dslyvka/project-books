import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import annotationPlugin from 'chartjs-plugin-annotation';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { Wrapper, PagesValue, PlanAnotation, FactAnotation } from './LineChart.styled';

import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
  annotationPlugin,
);

const LineChart = () => {
  const isStarted = useSelector(state => state.training.isStarted);
  const startDate = useSelector(state => state.training.startDate);
  const endDate = useSelector(state => state.training.endDate);
  const totalPages = useSelector(state => state.training.totalPages);
  const statistics = useSelector(state => state.training.statistics);
  const readedPages = useSelector(state => state.training.readedPages);

  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});
  const {width} = useWindowDimensions();
  const allDays = Math.ceil((new Date(endDate) - new Date(startDate)) / 86400000);
  const daysLeft = Math.ceil((new Date(endDate) - new Date()) / 86400000);
  const daysPassed = allDays - daysLeft;
  const pagesLeft = totalPages - readedPages;

  // Вираховуємо план прочитання на сьогоднішній день
  const readPlanAtDay = isStarted ? Math.ceil((totalPages - readedPages) / daysLeft) : 0;

  // --- Для привязки анотації (підписи назв графіків) до останнього елемента масиву графіків ПЛАН і ФАКТ
  // function point(ctx, value) {
  // const dataset = ctx.chart.data.datasets[value];
  // const values = dataset.data.filter((value, i) => i > dataset.data.length - 2);
  // const y = Math.max(...values);
  // const x = dataset.data.lastIndexOf(y);
  // return {x, y};
  // };
  
  useEffect(() => {
    // Отримуємо масив всіх днів тренування
  const getDaysArray = function() {
    for(var arr=[],dt=new Date(startDate); dt<=new Date(endDate); dt.setDate(dt.getDate()+1)){
        arr.push(new Date(dt).toLocaleDateString());
    }
    arr.pop();
    return arr;
  };
  const daysArray = getDaysArray();

  // Отримуємо сумований масив прочитаних сторінок по днях
  const sumStatistics = (aggregate(statistics, ['statisticDate'], {
  key: 'statisticResult',
  fn: (total, value) => total + value
  }));

  function aggregate(data, keyFields, accumulator) {
  var createNewObj = (ref, fields) => {
    return fields.reduce((result, key) => {
      return Object.assign(result, { [key] : ref[key] });
    }, {});
  }
  return Object.values(data.reduce((result, object, index, ref) => {
    let key = keyFields.map(key => object[key]).join('');
    let val = result[key] || createNewObj(object, keyFields);
    val[accumulator.key] = accumulator.fn(val[accumulator.key] || 0, object[accumulator.key]);
    return Object.assign(result, { [key] : val });
  }, {}));
  };

  // Отримуємо масив обєктів з датою і сторінками для графіку факт
  const getResultreadedPagesArray = () => {
    let res = [];
    daysArray.forEach(el => {
      let found = false;
      sumStatistics.forEach(item => {
        if (item.hasOwnProperty('statisticDate') && new Date(item.statisticDate).toLocaleDateString() === el) {
          res.push({
            statisticDate: new Date(item.statisticDate).toLocaleDateString(),
            statisticResult: item.statisticResult,
          });
          found = true;
        }
      })
      if (!found) {
        res.push({
          statisticDate: el,
          statisticResult: 0,
        });
      }
    })
    return res;
  };

  // Отримуємо масив прочитаних сторінок для графіку факт
  const getFactreadedPagesArray = () => {
    const result = getResultreadedPagesArray();
    return result.map(item => item.statisticResult);
  };
  const factArray = getFactreadedPagesArray();

  // Розраховуємо масив для графіку план
  const getResultPlanArray = () => {
    let res = [];
    for (let i = 0; i < factArray.length; i++) {
      if (i === 0) { 
      res.push( Math.ceil(totalPages / allDays));
      } else if (allDays - i >= daysLeft) {
          res.push(Math.ceil((totalPages - factArray.slice(0, i).reduce((sum, elem) => sum + elem, 0))  / (allDays - i)));
      } else {
        res.push(Math.ceil((totalPages - factArray.slice(0, daysPassed).reduce((sum, elem) => sum + elem, 0))  / (daysLeft)));
      }
    }
    return res;
  }
  const planArray = getResultPlanArray();
  
  // Отримуємо кінцеві масиви для графіків з відображенням необхідної кількості елементів під різні розміри екранів
    // const getArraysForMobile = (el) => {
    //   if (el === "days") {
    //     return daysArray.slice(daysPassed - 1, daysPassed + 2)
    //   } else if (el === "fact") {
    //     return factArray.slice(daysPassed - 1, daysPassed + 2);
    //   } else if (el === "plan") { 
    //     return planArray.slice(daysPassed - 1, daysPassed + 2);
    //   }
    // }
    
    // const getArraysForTablet = (el) => {
    //   if (el === "days") {
    //     return daysArray.slice(daysPassed - 4, daysPassed + 2)
    //   } else if (el === "fact") {
    //     return factArray.slice(daysPassed - 4, daysPassed + 2);
    //   } else if (el === "plan") { 
    //     return planArray.slice(daysPassed - 4, daysPassed + 2);
    //   }
    // }

    // const getArraysForDecktop = (el) => {
    //   if (el === "days") {
    //     return daysArray.slice(daysPassed - 5, daysPassed + 2)
    //   } else if (el === "fact") {
    //     return factArray.slice(daysPassed - 5, daysPassed + 2);
    //   } else if (el === "plan") { 
    //     return planArray.slice(daysPassed - 5, daysPassed + 2);
    //   }
    // }
    

  // Передаємо дані для побудови графіків відповідно до ширини екрана
  // const drawDepensScreenSize = (el) => {
  //   if (width < 768) {
  //     return chartReadDataDatasets(3, el);
  //   } else if (width < 1280) {
  //     return chartReadDataDatasets(6, el);
  //   } else if (width >= 1280) {
  //     return chartReadDataDatasets(7, el);
  //   };
  // };
  
  // Вираховуємо прогнозовану максимальну висоту графіка
  const maxReadPages = Math.max(...factArray);
  const getBiggersValue = () => { 
    if (maxReadPages > readPlanAtDay) {
      return maxReadPages;
    } else {
      return readPlanAtDay;
    }
  };

  const getMaxHeight = () => {
    if (readPlanAtDay && maxReadPages !== -Infinity) {
      return getBiggersValue() * 1.3;
    } else {
      return isStarted ? readPlanAtDay * 1.3 : 100;
    }
  };
  
  // Для запобігання накладання анотацій (підписи назв графіків) при близьких значеннях по осі У
  // const setBetwenAnotationPositions = () => {
  //   const differense = readPlanAtDay - factArray.slice(-1)[0];
  //   if (planArray.length === factArray.length + 1 && differense < 15 * (getMaxHeight() / 100)) {
  //     return 0;
  //   } else {
  //     return -30;
  // }
  // };

    setChartData({
      labels: isStarted && pagesLeft !==0 ? daysArray : [1, 2, 3, 4, 5, 6, 7],
      datasets: [
        {
          label: 'ПЛАН',
          tension: 0.4,
          pointRadius: 5,
          data: isStarted && pagesLeft !==0 ? planArray : [30],
          borderWidth: 2,
          borderColor: '#FF6B08',
          backgroundColor: '#FF6B08',
        },
        {
          label: 'ФАКТ',
          tension: 0.4,
          pointRadius: 5,
          data: isStarted && pagesLeft !==0 ? factArray : [10],
          borderWidth: 2,
          borderColor: '#242A37',
          backgroundColor: '#242A37',
        },
      ],
    });
    setChartOptions({
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            color: '#091E3F',
            display: true,
            text: 'ЧАС',
            align: 'end',
            font: {
              family: "'Montserrat', sans-serif",
              weight: 600,
              size: 12,
              lineHeight: 1.22,
            },
          },
          grid: {
            borderColor: '#B1B5C2',
            color: '#B1B5C2',
            drawTicks: false,
            drawOnChartArea: true,
          },
          ticks: {
            display: false,
          },
        },
        y: {
          display: false,
          min: 0,
          suggestedMax: getMaxHeight(),
        },
      },
      responsive: true,
      plugins: {
        // annotation: {
        //   annotations: {
        //     plan: {
        //       type: 'label',
        //       content: 'ПЛАН',
        //       callout: {
        //         display: true,
        //         position: 'bottom',
        //         margin: 0,
        //       },
        //       font: {
        //         family: "'Montserrat', sans-serif",
        //         weight: 600,
        //         size: 12,
        //         lineHeight: 1.22,
        //       },
        //       color: '#FF6B08',
        //       backgroundColor: '#F5F7FA',
        //       backgroundShadowColor: 'rgba(9, 30, 63, 0.1)',
        //       shadowBlur: 10,
        //       shadowOffsetX: 2,
        //       shadowOffsetY: 3,
        //       xAdjust: isStarted && allDays !== 1 ? -30 : 40,
        //       xValue: (ctx) => point(ctx, 0).x,
        //       yAdjust: isStarted ? -30 : 0,
        //       yValue: (ctx) => point(ctx, 0).y,
        //     },
        //     fact: {
        //       type: 'label',
        //       content: 'ФАКТ',
        //       callout: {
        //         display: true,
        //         position: 'bottom',
        //         margin: 0,
        //       },
        //       font: {
        //         family: "'Montserrat', sans-serif",
        //         weight: 600,
        //         size: 12,
        //         lineHeight: 1.22,
        //       },
        //       backgroundColor: '#F5F7FA',
        //       backgroundShadowColor: 'rgba(9, 30, 63, 0.1)',
        //       shadowBlur: 10,
        //       shadowOffsetX: 2,
        //       shadowOffsetY: 3,
        //       xAdjust: isStarted && factArray.length !== 1 ? -30 : 40,
        //       xValue: (ctx) => point(ctx, 1).x,
        //       yAdjust: isStarted ? setBetwenAnotationPositions() : 0,
        //       yValue: (ctx) => point(ctx, 1).y,
        //     },
        //   },
        // },
        legend: {
          display: false,
        },
        title: {
          display: true,
          position: 'top',
          align: 'start',
          text: 'КІЛЬКІСТЬ СТОРІНОК / ДЕНЬ ',
          color: '#242A37',
          padding: 20,
          fullSize: false,
          font: {
            family: "'Montserrat', sans-serif",
            weight: 500,
            size: 12,
            lineHeight: 1.25,
          },
        },
      },
    });
  }, [width, isStarted, allDays, daysLeft, daysPassed, endDate, startDate, statistics, totalPages, readPlanAtDay, pagesLeft]);

  return(
    <Wrapper>
      <PagesValue><p>{isStarted && pagesLeft !==0 ? readPlanAtDay : 0}</p></PagesValue>
      <PlanAnotation><p>ПЛАН</p></PlanAnotation>
      <FactAnotation><p>ФАКТ</p></FactAnotation>
      <Line options={chartOptions} data={chartData} />
    </Wrapper>
  );
}

export default LineChart;
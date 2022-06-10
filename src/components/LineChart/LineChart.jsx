import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import annotationPlugin from 'chartjs-plugin-annotation';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { Wrapper, PagesValue } from './LineChart.styled';

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

  // Компонент приймає 3 пропи
  // 1-й кінцева дата тренування - параметр date
  // 2-й загальна кількість сторінок в тренуванні - параметр pages
  // 3-й масив з кількістю сторінок прочитаних по днях - параметр readPages
  // Приклад для рендеру
  // <LineChart
  //   date={"06/15/2022"}
  //   pages={600}
  //   readPages={[45, 52, 36]}
  // />

const LineChart = ({date, pages, readPages}) =>{
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});
  const { width } = useWindowDimensions();
  const days = Math.ceil((new Date(date) - new Date()) / 86400000);
  const pagesLeft = pages - readPages.reduce((a, b) => a + b, 0); 

  // Для привязки анотації (підписи назв графіків) до останнього елемента масиву графіків ПЛАН і ФАКТ
  function point(ctx, value) {
  const dataset = ctx.chart.data.datasets[value];
  const values = dataset.data.filter((value, i) => i > dataset.data.length - 2);
  const y = Math.max(...values);
  const x = dataset.data.lastIndexOf(y);
  return {x, y};
  };

  // Вираховуємо масив для графіка ПЛАН в функції getAveragePagesPerDay
    const getAveragePagesPerDay = () => {
    const averagePagesPerDay = Math.round(pagesLeft / days);
    const pagesArray = [];
    for (let i = 1; i <= days; i++) {
      pagesArray.push(averagePagesPerDay);
      };
    return pagesArray;
  };

  const resultPlanArray = () => { 
    const averagePages = getAveragePagesPerDay().slice();
    const planArray = [];
    for (let i = 1; i <= readPages.length; i++) {
      planArray.push(0);
      averagePages.pop();
    };
    return [...planArray, ...averagePages];
  };

  // Вираховуємо план прочитання на день
  const readPlanAtDay = resultPlanArray().slice(-1)[0];
  
  useEffect(() => {
    // Для відображення різних графіків на мобілці, таблет і десктопі отримуємо масиви відповідних довжин
    const chartReadData = (value) => {
      const averagePagesPerDay = resultPlanArray().slice(-value);
      if (readPages.length < value) {
        return [averagePagesPerDay, readPages];
      } else {
        const chartArray = readPages.slice(-value);
        return [averagePagesPerDay, chartArray];
      }
    };
    // Отримуємо конкретний масив для графіків
    const chartReadDataDatasets = (value, el) => {
      if (el === "plan") {
        return chartReadData(value).slice(0, 1)[0];
      } else if (el === "fact") {
        return chartReadData(value).slice(-1)[0];
      } else if (el === "days") {
        const daysArray = [];
        for (let i = 1; i <= value; i++) {
        daysArray.push(value);
      };
        return daysArray;
      };
    };
    // Передаємо дані для побудови графіків відповідно до ширини екрана
    const drawDepensScreenSize = (el) => {
      if (width < 768) {
        return chartReadDataDatasets(3, el);
      } else if (width < 1280) {
        return chartReadDataDatasets(6, el);
      } else if (width >= 1280) {
        return chartReadDataDatasets(7, el);
      };
    };
  // Вираховуємо прогнозовану максимальну висоту графіка - треба ще потестити ...
    const getMaxHeight = () => {
      const maxReadPages = Math.max(...readPages);
      if (readPlanAtDay && maxReadPages !== -Infinity) {
        return Math.abs((readPlanAtDay - maxReadPages) * 2) === 0 ? readPlanAtDay * 2 : Math.abs((readPlanAtDay - maxReadPages) * 2);
      } else {
        return readPlanAtDay ? readPlanAtDay * 2 : 100;
      }
    };
    // console.log(getMaxHeight());
  
  // Для запобігання накладання анотацій (підписи назв графіків) при близьких значеннях по осі У - ще в роботі ...
    const setBetwenAnotationPositions = () => {
      const differense = readPlanAtDay - readPages.slice(-1)[0];
      // console.log("differense", differense);
      // console.log("%", 15 * (getMaxHeight() / 100));
      if (resultPlanArray().length === readPages.length && differense < 15 * (getMaxHeight() / 100)) {
        return 30;
      } else {
        return -30;
    }
    };
    // console.log("y :", setBetwenAnotationPositions());

    setChartData({
      labels: drawDepensScreenSize("days"),
      datasets: [
        {
          label: 'ПЛАН',
          tension: 0.4,
          pointRadius: 5,
          data: readPlanAtDay? drawDepensScreenSize("plan") : [30],
          borderWidth: 2,
          borderColor: '#FF6B08',
          backgroundColor: '#FF6B08',
        },
        {
          label: 'ФАКТ',
          tension: 0.4,
          pointRadius: 5,
          data: readPlanAtDay? drawDepensScreenSize("fact") : [10],
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
        annotation: {
          annotations: {
            plan: {
              type: 'label',
              content: 'ПЛАН',
              callout: {
                display: true,
                position: 'bottom',
                margin: 0,
              },
              font: {
                family: "'Montserrat', sans-serif",
                weight: 600,
                size: 12,
                lineHeight: 1.22,
              },
              backgroundColor: '#F5F7FA',
              backgroundShadowColor: 'rgba(9, 30, 63, 0.1)',
              shadowBlur: 10,
              shadowOffsetX: 2,
              shadowOffsetY: 3,
              xAdjust: readPlanAtDay && days !== 1 ? -30 : 40,
              xValue: (ctx) => point(ctx, 0).x,
              yAdjust: readPlanAtDay ? -30 : 0,
              yValue: (ctx) => point(ctx, 0).y,
            },
            fact: {
              type: 'label',
              content: 'ФАКТ',
              callout: {
                display: true,
                position: 'bottom',
                margin: 0,
              },
              font: {
                family: "'Montserrat', sans-serif",
                weight: 600,
                size: 12,
                lineHeight: 1.22,
              },
              backgroundColor: '#F5F7FA',
              backgroundShadowColor: 'rgba(9, 30, 63, 0.1)',
              shadowBlur: 10,
              shadowOffsetX: 2,
              shadowOffsetY: 3,
              xAdjust: readPlanAtDay && readPages.length !== 1 ? -30 : 40,
              xValue: (ctx) => point(ctx, 1).x,
              yAdjust: readPlanAtDay ? setBetwenAnotationPositions() : 0,
              yValue: (ctx) => point(ctx, 1).y,
            },
          },
        },
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
  }, [width, readPages, readPlanAtDay]);

  return(
    <Wrapper>
      <PagesValue><p>{readPlanAtDay ? readPlanAtDay : 0}</p></PagesValue>
      <Line options={chartOptions} data={chartData} />
    </Wrapper>
  );
}

export default LineChart;
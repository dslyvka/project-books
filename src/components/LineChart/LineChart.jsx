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
// ------------------------------------------------------------
// --- По факту для побудови графіка необхідно передати 3-ри масиви, масив плану, масив факту і масив днів і графік буде побудований з них.
// --- Є нюанс, що сьогоднішній день має відображатись посередині графіку, щоб користувач завжди міг побачити факт вчорашній і план на завтрашній день.
// --- Приклад щоб зарендити графік
      // <LineChart
      //   startDate={'2022-06-08T00:00:00.000Z'}
      //   endDate={'2022-06-13T00:00:00.000Z'}
      //   totalPages={600}
      //   readedPages={200}
      //   statistics={[
      //     { statisticDate: '2022-06-09T00:00:00.000Z', statisticResult: 100 },
      //     { statisticDate: '2022-06-10T00:00:00.000Z', statisticResult: 100 },
      //   ]}
      // />


// startDate, endDate, totalPages, readedPages, statistics - вхідні дані
const LineChart = ({startDate, endDate, totalPages, readedPages, statistics}) =>{
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});
  const {width} = useWindowDimensions();
  const allDays = Math.ceil((new Date(endDate) - new Date(startDate)) / 86400000);
  const daysLeft = Math.ceil((new Date(endDate) - new Date()) / 86400000);
  const pagesLeft = totalPages - readedPages;
  const readPages = statistics.map(item => item.statisticResult);

  // --- Для привязки анотації (підписи назв графіків) до останнього елемента масиву графіків ПЛАН і ФАКТ
  function point(ctx, value) {
  const dataset = ctx.chart.data.datasets[value];
  const values = dataset.data.filter((value, i) => i > dataset.data.length - 2);
  // --- Для привязки анотацій до видимиого елементу сюди --> values = dataset.data.filter((value, i) => i > dataset.data.length - 2); замість - 2 вкінці треба передати число скільки елементів за межами видимості графіка
  const y = Math.max(...values);
  const x = dataset.data.lastIndexOf(y);
  return {x, y};
  };

  // --- Вираховуємо масив для графіка ПЛАН
  // --- Необхідно розрахувати масив для графіка ПЛАН, довжина масиву повинна відповідати кількості днів тренування
  const getAveragePagesPerDay = () => {
    const averagePagesPerDay = Math.ceil(pagesLeft / daysLeft);
    const pagesArray = [];
    for (let i = 1; i <= allDays; i++) {
        pagesArray.push(averagePagesPerDay);
      };
    return pagesArray;
  };

  // Отримуємо кінцевий масив для графіка ПЛАН з врахуванням днів які вже минули
  const resultPlanArray = () => { 
    const averagePages = getAveragePagesPerDay().slice();
    const planArray = [];
      for (let i = 1; i <= allDays - daysLeft; i++) {
        planArray.push(0);
        averagePages.pop();
      }
    return [...planArray, ...averagePages];
  };

  // --- Вираховуємо план прочитання на день
  // --- Елемент масиву для прочитання на конкретну дату
  

  const readPlanAtDay = getAveragePagesPerDay().slice(-1)[0];
  
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
  
  // Вираховуємо прогнозовану максимальну висоту графіка
  const maxReadPages = Math.max(...readPages);
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
      return readPlanAtDay ? readPlanAtDay * 1.3 : 100;
    }
  };
  
  // Для запобігання накладання анотацій (підписи назв графіків) при близьких значеннях по осі У
  const setBetwenAnotationPositions = () => {
    const differense = readPlanAtDay - readPages.slice(-1)[0];
    if (resultPlanArray().length === readPages.length+1 && differense < 15 * (getMaxHeight() / 100)) {
      return 0;
    } else {
      return -30;
  }
  };

    setChartData({
      labels: drawDepensScreenSize("days"),
      // --- в параметр labels передаємо масив дат для побудови графіків
      datasets: [
        {
          label: 'ПЛАН',
          tension: 0.4,
          pointRadius: 5,
          data: readPlanAtDay ? drawDepensScreenSize("plan") : [30],
          // --- В параметр data передаємо масив з планом прочитання
          borderWidth: 2,
          borderColor: '#FF6B08',
          backgroundColor: '#FF6B08',
        },
        {
          label: 'ФАКТ',
          tension: 0.4,
          pointRadius: 5,
          data: readPlanAtDay ? drawDepensScreenSize("fact") : [10],
          // --- В параметр data передаємо масив прочитаних сторінок по днях
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
          // --- В параметр suggestedMax передаємо максимальне прогнозоване значення по осі У
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
              color: '#FF6B08',
              backgroundColor: '#F5F7FA',
              backgroundShadowColor: 'rgba(9, 30, 63, 0.1)',
              shadowBlur: 10,
              shadowOffsetX: 2,
              shadowOffsetY: 3,
              xAdjust: readPlanAtDay && allDays !== 1 ? -30 : 40,
              // --- в параметр xAdjust передаємо зміщення анотації по осі Х
              xValue: (ctx) => point(ctx, 0).x,
              yAdjust: readPlanAtDay ? -30 : 0,
              // --- в параметр yAdjust передаємо зміщення анотації по осі У
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
              // --- в параметр xAdjust передаємо зміщення анотації по осі Х
              xValue: (ctx) => point(ctx, 1).x,
              yAdjust: readPlanAtDay ? setBetwenAnotationPositions() : 0,
              // --- в параметр yAdjust передаємо зміщення анотації по осі У
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
      // --- В readPlanAtDay передається план прочитання на день
      <Line options={chartOptions} data={chartData} />
    </Wrapper>
  );
}

export default LineChart;
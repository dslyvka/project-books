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

  // Компонент приймає 3 пропа
  // 1-й кількість днів тренування - параметр days
  // 2-й загальна кількість сторінок в тренуванні - параметр pages
  // 3-й масив з кількістю сторінок прочитаних по днях - параметр readPages
  // Приклад для рендеру
  // <LineChart
  //   days={9}
  //   pages={300}
  //   readPages={[45, 52, 36, 65, 31, 20, 60]}
  // />

const LineChart = ({days, pages, readPages}) =>{
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  const { width } = useWindowDimensions();

  // Для привязки анотації (підписи назв графіків) до останнього елемента масиву графіків ПЛАН і ФАКТ
  function point(ctx, value) {
  const dataset = ctx.chart.data.datasets[value];
  const values = dataset.data.filter((value, i) => i > dataset.data.length - 2);
  const y = Math.max(...values);
  const x = dataset.data.lastIndexOf(y);
  return {x, y};
  };

  // Вираховуємо скільки користувач прочитав сторінок в день
  const getReadPagesperDay = (value) => { 
    return value.slice(-1)[0];
  };
  const readPagesPerDay = getReadPagesperDay(readPages);
      
  
    // Для відображення початкових точок в пустому графіку - ще в роботі
    // if (pagesArray.length === 0) {
    //   return [40];
    // }
  
  useEffect(() => {
    // Отримуємо кількість днів тренування і розбиваємо на масив в функції getDaysArray
    const getDaysArray = (days) => {
    const daysArray = [];
    for (let i = 1; i <= days; i++) {
      daysArray.push(i);
    }
    return daysArray;
    };
    
    // Вираховуємо середню кількість сторінок в день і розбиваємо на масив для побудови графіка ПЛАН в функції getAveragePagesPerDay
    const getAveragePagesPerDay = (pages) => {
    const averagePagesPerDay = Math.round(pages / days);
    const daysArray = getDaysArray(days);
    const pagesArray = [];
    for (let i = 1; i <= daysArray.length; i++) {
      pagesArray.push(averagePagesPerDay);
      };
    return pagesArray;
  };

    // Для відображення різних графіків на мобілці, таблет і десктопі отримуємо масиви відповідних довжин
    const chartReadData = (value) => {
      const getDays = getDaysArray(days).slice(-value);
      const averagePagesPerDay = getAveragePagesPerDay(pages).slice(-value);
        if (readPages.length < value) {
          return [averagePagesPerDay, readPages, getDays];
        } else { 
          const chartArray = readPages.slice(-value);
          return [averagePagesPerDay, chartArray, getDays];
        }
    };

    // Отримуємо конкретний масив для графіків
    const chartReadDataDatasets = (value, el) => {
      if (el === "plan") {
        return chartReadData(value).slice(0, 1)[0];
      } else if (el === "fact") {
        return chartReadData(value).slice(1, 2)[0];
      } else if (el === "days") {
        return chartReadData(value).slice(-1)[0];
      }
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

  // Для запобігання накладання анотацій (підписи назв графіків) при близьких значеннях по осі У - ще в роботі
  // const setBetwenAnotationPositions = () => { 
  //   if (getAveragePagesPerDay(pages).length === readPages.length) { 

  //   }
  //   return y;
  // };

    setChartData({
      labels: drawDepensScreenSize("days"),
      datasets: [
        {
          label: 'ПЛАН',
          tension: 0.4,
          pointRadius: 5,
          data: drawDepensScreenSize("plan"),
          borderWidth: 2,
          borderColor: '#FF6B08',
          backgroundColor: '#FF6B08',
        },
        {
          label: 'ФАКТ',
          tension: 0.4,
          pointRadius: 5,
          data: drawDepensScreenSize("fact"),
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
          suggestedMax: 100,
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
              xAdjust: -30,
              xValue: (ctx) => point(ctx, 0).x,
              yAdjust: -30,
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
              xAdjust: -30,
              xValue: (ctx) => point(ctx, 1).x,
              yAdjust: -30,
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
  }, [width, days, pages, readPages]);

  return(
    <Wrapper>
      <PagesValue><p>{readPagesPerDay}</p></PagesValue>
      <Line options={chartOptions} data={chartData} />
    </Wrapper>
  );
}

export default LineChart;
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
  
  // Приводимо масив обєктів статистики до коректного виду дат
    const getStatisticsArray = () => {
      const arr = [];
      for (let i = 0; i < statistics.length; i++) { 
        arr.push({
          statisticDate: new Date(statistics[i].statisticDate).toLocaleDateString(),
          statisticResult: statistics[i].statisticResult,
        });
      }
      return arr
    }
    const statisticsArray = getStatisticsArray();

  // Отримуємо сумований масив прочитаних сторінок по днях
  const sumStatistics = (aggregate(statisticsArray, ['statisticDate'], {
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
        if (item.hasOwnProperty('statisticDate') && item.statisticDate === el) {
          res.push({
            statisticDate: item.statisticDate,
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
  
    setChartData({
      labels: isStarted && pagesLeft !==0 && daysLeft > 1 ? daysArray : [1, 2],
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
          suggestedMax: 100,
        },
      },
      responsive: true,
      plugins: {
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
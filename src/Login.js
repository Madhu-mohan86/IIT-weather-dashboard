import React from "react";
import { AddBoxRounded, NearMeOutlined, WbTwilightOutlined, KeyboardArrowLeftRounded, KeyboardArrowRightRounded, ToggleOffRounded, AccountBoxRounded } from "@mui/icons-material";
import { Line } from 'react-chartjs-2';
import { Chart, LinearScale, TimeScale, LineElement, PointElement,Tooltip, Title, CategoryScale } from 'chart.js';
import 'chartjs-adapter-moment';
import moment from 'moment';
import 'chartjs-plugin-datalabels';
import 'chartjs-plugin-annotation';


Chart.register(LinearScale, TimeScale, LineElement, PointElement,Tooltip, Title, CategoryScale);
Chart.register(require('chartjs-plugin-datalabels'));

function Login() {
  const chartData = {
    datasets: [
      {
        label: 'Rain Precipitation',
        data: [
          { x: moment('09:00', 'HH:mm'), y: 0.2 },
          { x: moment('10:00', 'HH:mm'), y: 0.3 },
          { x: moment('11:00', 'HH:mm'), y: 0.6},
          { x: moment('12:00', 'HH:mm'), y: 0.5 },
          { x: moment('13:00', 'HH:mm'), y: 0.4 },
          { x: moment('14:00', 'HH:mm'), y: 0.4 },
          { x: moment('15:00', 'HH:mm'), y: 0.5 },
          { x: moment('16:00', 'HH:mm'), y: 0.1 },
        ],
        fill: 'start',
        borderColor: '#FF6384',
        borderWidth: 1,
        pointRadius: 0,
        lineTension: 0,
      },
    ],
  };

  return (
    <div className="h-screen w-screen p-20 flex flex-row bg-[#B5D8FF]">
      <div className="h-auto w-auto p-5 pr-16 bg-[#5C9CE5]  rounded-l-3xl">
     <span className="flex flex-row mb-14">
        <AddBoxRounded sx={{ color:"white"}}/>
        <div className="h-1 w-3 ml-10 bg-white mt-2.5 rounded-xl "></div>
        <div className="h-1 w-1 mx-1 bg-[#9DC3EF] mt-2.5 rounded-full "></div>
        <div className="h-1 w-1 mr-10 bg-[#9DC3EF] mt-2.5 rounded-full "></div>
        <p className="text-white font-poppins font-bold text-xs mt-1 mr-1">°C</p><ToggleOffRounded sx={{color:"white"}}/><p className="text-white text-xs font-bold mt-1 font-poppins ml-1 ">°F</p>
        </span>
       <span className="flex flex-row mb-3">
         <NearMeOutlined sx={{color:"white"}}/>
         <h1 className="font-poppins font-extralight text-white mr-5"> Texas,USA</h1>
         <WbTwilightOutlined sx={{color:"white"}}/>
         <p className="text-white">07:09</p>
       </span>
       <span className="flex flex-row mb-10">
       <h1 className="font-poppins font-thin text-sm text-white mr-5"> Today 28, Sept</h1>
       <WbTwilightOutlined sx={{color:"white"}}/>
       <p className="text-white">19:09</p>
       </span>
        
       <span className="flex flex-row place-content-center">
       <KeyboardArrowLeftRounded sx={{color:"#9DC3EF"}} className="mt-5 mr-3" />
       <h1 className="text-6xl text-white font-medium">31°</h1>
       <KeyboardArrowRightRounded sx={{color:"#9DC3EF"}} className="mt-5 ml-3" />
       </span>
  
       <img className="h-56 w-48" src="https://drive.google.com/uc?id=1HGCiW8T59ylB4w5awbpqNiJ5ucS5xW0H" alt=""/>
      </div>
      <div className="bg-[#E4F1FF] relative -left-5 w-[800px] rounded-3xl p-7">
        <h1 className="text-lg font-poppins font-bold">Weclcome back Isabella</h1>
        <h2 className="text-sm font-poppins font-medium">Check out today's weather information </h2>
        <AccountBoxRounded sx={{color:"black"}} className="absolute top-10 right-10" />
        <div className="bg-white mt-5 rounded-3xl p-3"style={{ width: '', height: '200px' }}>
          <Line
            data={chartData}
            options={{
              maintainAspectRatio: false,
              responsive: true,
              scales: {
                x: {
                  type: 'time',
                  time: {
                    parser: 'HH:mm',
                    unit: 'hour',
                    displayFormats: {
                      hour: 'HH:mm',
                    },
                  },
                  ticks: {
                    min: '09:00',
                    max: '14:00',
                  },
                  grid: {
                    display: true,
                    color:'black',
                  },
                },
                y: {
                  title: {
                    display: true,
                  },
               
                  ticks: {
                    callback: (value) => '', 
                    beginAtZero: true,
                  },
                  grid: {
                    display:false,
                  },
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  callbacks: {
                    title: (context) => '',
                    label: (context) => context.parsed.y + ' mm', // Display y-axis value on tooltip
                  },
                },
              },
              elements: {
                line: {
                  backgroundColor: 'rgba(92, 156, 229, 0.6)', // Blue color
                  fill: 'start',
                },
              },
              pointLabel: (context) => context.parsed.y + ' mm', // Place y-axis value on top of each data point
            }}
          />
        </div>
        <h2 className="my-5 font-poppins font-bold text-base">More details of weather</h2>
        <div className="grid gap-y-3 grid-rows-2 grid-cols-3">
        <div className="h-14 w-44 text-center font-poppins font-bold pt-3 rounded-lg bg-white overflow-hidden">
        Humidity 86%
        </div>
        <div className="h-14 w-44 text-center font-poppins font-bold pt-3 rounded-lg bg-white overflow-hidden">
        wind 56%
        </div>
        <div className="h-14 w-44 text-center font-poppins font-bold pt-3 rounded-lg bg-white overflow-hidden">
        precipitation 23%
        </div>
        <div className="h-14 w-44 text-center font-poppins font-bold pt-3 rounded-lg bg-white overflow-hidden">
        uv index medium
         </div>
        <div className="h-14 w-44 text-center font-poppins font-bold pt-3 rounded-lg bg-white overflow-hidden">
        feels like
        </div>
        <div className="h-14 w-44 text-center font-poppins font-bold pt-3 rounded-lg bg-white overflow-hidden">
        precipitation
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;


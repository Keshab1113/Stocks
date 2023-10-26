import React from 'react'
import Header from './Header'
import { BsCurrencyRupee } from "react-icons/bs";
import Footer from './Footer'
import axios from "axios";
import { useEffect, useState } from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";


const ShareData = () => {
  const [Items, setItems] = useState([]);
  const [details, setDetails] = useState("");
  const [activeBtn, setActiveBtn] = useState("");
  const fetchData = async () => {
    const { data } = await axios.get('https://api.twelvedata.com/time_series?symbol=INFY:NSE&interval=1min&apikey=3b8d7fdb2ea64e07b2994e6e12a73eff');
    setItems(data.values);
    setDetails(data.meta);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=' bg-slate-400 w-full h-full'>
      <Header />
      <h1 className=" w-11/12 ml-5 mt-7 text-2xl font-semibold font-serif text-white">{details.symbol}</h1>
      <p className='ml-5 text-white text-2xl mt-5 flex items-center'><BsCurrencyRupee />{Items.length ? Items[0].high : 0}
        <p className='ml-6 text-white text-xs'>{Items.length ? ((Items[0].high - Items[Items.length - 1].low) * 100 / Items[0].high).toFixed(3) : 0}%</p></p>
      <div className='mt-5 w-9/12 h-[30rem] bg-slate-300 mx-auto p-4 rounded-lg '>
        <div className="w-full h-full">
          {Items.length ?
            <Line
              data={{
                labels: Items.reverse().map((val) => {
                  const date = new Date(val.datetime);
                  const updateDate = date.toLocaleDateString();
                  const updatetime = date.toLocaleTimeString();
                  const updateMin = date.getMinutes();
                  return updateMin;
                }),
                datasets: [
                  {
                    data: Items.reverse().map((val) => val.high),
                    label: `High value in last ${details.interval} `,
                    borderColor: "green",
                  },
                  {
                    data: Items.reverse().map((val) => val.low),
                    label: `Low value in last ${details.interval} `,
                    borderColor: "red",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            /> : <></>}
        </div>
      </div>
      <div className=' w-9/12 mx-auto mt-5 pt-2 flex justify-around border-t-2 mb-5 h-9'>
        <button className=' text-white w-12 rounded border '>{details.exchange}</button>
        <button className={details.interval !== '1min' ? ' text-white w-12 hover:border rounded ' : '  w-12  bg-white text-black rounded-md'}>1m</button>
        <button className=' text-white w-12 rounded hover:border '>1d</button>
        <button className=' text-white w-12 rounded hover:border '>1w</button>
        <button className=' text-white w-12 hover:border rounded'>1y</button>
        <button className=' text-white w-12 hover:border rounded'>3y</button>
        <button className=' text-white w-12 hover:border rounded'>5y</button>
        <button className=' text-white w-12 hover:border rounded'>All</button>
      </div>
      <div>
        <h1 className=" w-11/12  border-b mt-7 text-2xl ml-14 font-semibold font-serif text-white">Overview</h1>
        {
          Items.map(val => {
            const { open, high, low, close, volume } = val;
            return (
              <div className=' bg-slate-400 flex justify-around'>
                <h1 className=' w-28 flex flex-col justify-center items-center text-white text-lg'>Open<h1>{open}</h1></h1>
                <h1 className=' w-28 flex flex-col justify-center items-center text-white text-lg'>Prev. Close<h1>{close}</h1></h1>
                <h1 className=' w-28 flex flex-col justify-center items-center text-white text-lg'>Volume<h1>{volume}</h1></h1>
                <h1 className=' w-28 flex flex-col justify-center items-center text-white text-lg'>High<h1>{high}</h1></h1>
                <h1 className=' w-28 flex flex-col justify-center items-center text-white text-lg'>Low<h1>{low}</h1></h1>
              </div>
            );
          }
          )}

      </div>

      <Footer />
    </div>
  )
}

export default ShareData
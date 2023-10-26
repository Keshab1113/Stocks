import React from "react";
import Header from "./Header";
import { BiChevronDown } from "react-icons/bi";
import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Market = () => {
  return (
    <div>
      <Header />
      <div className=" bg-slate-400 w-full h-screen flex flex-row pt-12">
        <div className="w-9/12 h-full flex flex-col pt-12">
          <div className="w-full h-24 flex justify-around">
            <Link to="/sharedata" className=" bg-slate-300 h-24 w-1/4 rounded-xl p-6">
              <h1>NIFTY 50</h1>
              <h2>19996.35 176.40(0.89%)</h2>
            </Link>
            <Link to="/sharedata" className=" bg-slate-300 h-24 w-1/4 rounded-xl p-6">
              <h1>SENSEX</h1>
              <h2>19996.35 176.40(0.89%)</h2>
            </Link>
            <Link to="/sharedata" className=" bg-slate-300 h-24 w-1/4 rounded-xl p-6">
              <h1>BANKNIFTY</h1>
              <h2>19996.35 176.40(0.89%)</h2>
            </Link>
          </div>
          <div>
            <h1 className=" w-11/12  border-b mt-7 text-2xl ml-14 font-semibold font-serif text-white">
              Most Popular Share
            </h1>
            <div className="w-full h-24 flex justify-around mt-6">
              <Link to="/sharedata" className=" bg-slate-300 h-24 w-1/4 rounded-xl p-6">
                <h1>NIFTY 50</h1>
                <h2>19996.35 176.40(0.89%)</h2>
              </Link>
              <Link to="/sharedata" className=" bg-slate-300 h-24 w-1/4 rounded-xl p-6">
                <h1>SENSEX</h1>
                <h2>19996.35 176.40(0.89%)</h2>
              </Link>
              <Link to="/sharedata" className=" bg-slate-300 h-24 w-1/4 rounded-xl p-6">
                <h1>BANKNIFTY</h1>
                <h2>19996.35 176.40(0.89%)</h2>
              </Link>
            </div>
            <div className="w-full h-24 flex justify-around mt-5">
              <Link to="/sharedata" className=" bg-slate-300 h-24 w-1/4 rounded-xl p-6">
                <h1>NIFTY 50</h1>
                <h2>19996.35 176.40(0.89%)</h2>
              </Link>
              <Link to="/sharedata" className=" bg-slate-300 h-24 w-1/4 rounded-xl p-6">
                <h1>SENSEX</h1>
                <h2>19996.35 176.40(0.89%)</h2>
              </Link>
              <Link to="/sharedata" className=" bg-slate-300 h-24 w-1/4 rounded-xl p-6">
                <h1>BANKNIFTY</h1>
                <h2>19996.35 176.40(0.89%)</h2>
              </Link>
            </div>
          </div>

        </div>
        <div className=" w-3/12">
          <h1 className=" w-11/12  border-b mt-7 text-2xl font-semibold font-serif text-white">
            All Watchlists
          </h1>
          <div className=" bg-slate-300 h-52 w-11/12 mt-4 rounded-xl p-6">
            <h1 className="flex justify-between mt-4">
              Your Watchlist
              <BiChevronDown className=" text-3xl cursor-pointer" />
            </h1>
            <h2>50 items</h2>
            <div className=" bg-slate-400 h-8 w-full rounded flex justify-center items-center mt-10 py-2">
              <BsPlusCircle className=" text-xl mr-2" />
              Create New Watchlist
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;

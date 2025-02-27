import React from 'react';
import { Card } from 'antd';
import { WifiOutlined } from '@ant-design/icons';
import Logo from '../assets/symbol.png';
import Union from '../assets/Union.png';

const Dashboard = () => {
    return (
        <div className="h-[200px] w-[300px] flex justify-center items-center">

            <Card
                className="w-[280px] h-[160px] bg-[#1F3D2C] text-white rounded-2xl shadow-lg "
            >
                <div className="">
                    <div className="flex justify-between items-start">
                        <div className="flex ">
                            <img className="w-5 h-5" src={Logo} alt="logo" />
                        </div>
                        <div className="flex">
                            <img className="" src={Union} alt="logo" />
                        </div>

                    </div>
                </div>
                <div className="flex justify-between items-center mt-4 text-xl font-bold font-family">
                    Andrew Forbist
                </div>
                <div className="flex justify-between items-end mt-2">
                    {/* Balance Amount */}
                    <div>
                        <div className="text-[10px] opacity-80">Balance Amount</div>
                        <div className="font-bold text-xl">$562,000</div>
                    </div>

                    {/* EXP dan CVV (rata kanan) */} 
                    <div className="flex gap-4">
                    <div className=" text-[10px] opacity-80">
                        <div>EXP <br /><span className="text-white font-semibold">11/29</span></div>
                    </div>
                    <div className=" text-[10px] opacity-80 ">
                        <div>CVV <br /><span className="text-white font-semibold">323</span></div>
                    </div>
                    </div>

                </div>
            </Card>

        </div>
    );
};

export default Dashboard;

{/* 

            
                <h2 className="text-lg font-semibold mt-2">Andrew Forbist</h2>

              
                <p className="text-sm opacity-80">Balance Amount</p>
                <h1 className="text-2xl font-bold">$562,000</h1>

               
                <div className="flex justify-between text-xs mt-4 opacity-80">
                    <p>EXP <br /> <span className="text-white font-semibold">11/29</span></p>
                    <p>CVV <br /> <span className="text-white font-semibold">323</span></p>
                </div> */}

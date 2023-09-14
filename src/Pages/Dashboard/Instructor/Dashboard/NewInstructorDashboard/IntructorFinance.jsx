import React, { useState } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircleFill } from 'react-icons/bs';
import { HiCurrencyBangladeshi } from 'react-icons/hi';

const InstructorFinance = () => {
    const [balance, setBalance] = useState(1500); // Replace with your balance data
    const [withdrawn, setWithdrawn] = useState(500); // Replace with your withdrawn data

    return (
        <div className="flex justify-between mt-6 space-x-4">
            <div className="w-1/2 bg-green-100 rounded-lg p-6 shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-green-800">Total Available Balance</h2>
                <div className="flex items-center">
                <HiCurrencyBangladeshi className="text-[#1bbf72fa] text-5xl" />
                    <span className="text-4xl font-semibold text-green-600"> {balance}</span>
                </div>
            </div>
            <div className="w-1/2 bg-red-100 rounded-lg p-6 shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Total Withdrawn</h2>
                <div className="flex items-center">
                <HiCurrencyBangladeshi className="text-gray-600 text-5xl" />
                    <span className="text-4xl font-semibold text-gray-600">{withdrawn}</span>
                </div>
            </div>
        </div>
    );
};

export default InstructorFinance;
'use client';
import React from 'react';
import DeliveryAddressCard from './DeliveryAddress';
import DeliverySummaryCard from './DeliverySummary';
import TotalDetails from './TotalDetails';
import PaymentOptions from './PaymentOptions';

const Page = () => {
  return (
    <div className="w-full relative">
      <div className="w-full sm:flex">
        {/* Left Section: Delivery Address & Summary */}
        <div className="w-full sm:w-3/5 p-4 overflow-y-auto">
          <DeliveryAddressCard />
          <DeliverySummaryCard />
          <PaymentOptions/>
        </div>

        {/* Right Section: Total Details (Fixed and Positioned correctly) */}
        <div className="w-full sm:w-2/5 p-4">
          {/* Fixed Total Details container */}
          <div className="sm:sticky sm:top-32  max-h-[80vh] overflow-y-auto">
            <TotalDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

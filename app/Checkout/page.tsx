import React from 'react'
import DeliveryAddressCard from './DeliveryAddress'
import DeliverySummaryCard from './DeliverySummary'
import TotalDetails from './TotalDetails'

const Page = () => {
    return (
        <div className='w-full relative'>
            <div className="w-3/5 p-4 overflow-y-auto">
                <DeliveryAddressCard />
                <DeliverySummaryCard />
                <div className="w-2/5 p-4  fixed right-0 top-0 h-80 mt-32  bg-white text-black shadow-lg border border-black rounded-lg">
                    <TotalDetails />
                </div>
            </div>



        </div>





    )
}

export default Page

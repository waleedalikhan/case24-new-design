import React from 'react'
import mobileImg from '../../assets/img/mobile-img.png'
import * as Icons from '../global/Icons'
import cardImg from '../../assets/img/card-img.png'

const LeftSideContent: React.FC = () => {
  return (
    <>
      <div className="bg-white w-full rounded-3xl mb-6">
        <div className="flex items-center justify-center p-12">
          <img src={mobileImg} alt="" />
        </div>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl flex justify-center items-center gap-1">
          <Icons.MoneyIcon />
          <p className="sm:font-bold font-medium text-sm md:text-base">
            21.95{' '}
            <span className="italic font-normal text-xs text-gray-400">
              incl,{' '}
            </span>
            <span className="italic font-medium text-xs text-gray-400">
              BTW
            </span>
          </p>
        </div>
        <div className="bg-white rounded-xl p-2 h-20 flex justify-center items-center gap-2">
          <Icons.TruckIcon />
          <p className="sm:font-bold font-medium text-xs md:text-base">
            Gratis Verzending
          </p>
        </div>
      </div>
      <div className="bg-white w-full h-20 rounded-xl px-4 flex items-center">
        <img src={cardImg} alt="" />
        <p className="fsm:font-bold font-medium text-xs md:text-base">
          Voor 16:00 uur bestteld, binnen 2-3 dagen bezorgd
        </p>
      </div>
    </>
  )
}

export default LeftSideContent

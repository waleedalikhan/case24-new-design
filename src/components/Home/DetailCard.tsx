import React, { useState } from 'react'
import blackCord from '../../assets/img/blackCord-img.png'
import cn from 'classnames'

type Props = {
  cardTitle?: string
}

const ClaspCard: React.FC<Props> = ({}) => {
  let [accordionCardData, setAccordionCardData] = useState<any[]>([
    {
      id: 1,
      isActive: false,
      cardTitle: 'black cord',
    },
    {
      id: 2,
      isActive: false,
      cardTitle: 'golden cord',
    },
  ])

  const handleCheck = (index: number) => {
    let updatedData = [...accordionCardData]
    updatedData.forEach((element) => (element.isActive = false))
    updatedData[index].isActive = true
    setAccordionCardData((accordionCardData = updatedData))
  }

  const accordionData = accordionCardData.map((element: any, index: number) => {
    return (
      <React.Fragment>
        <div
          onClick={() => handleCheck(index)}
          className={cn(
            'w-full flex justify-between border-2 sm:h-[200px] h-[150px] p-2 sm:p-5 rounded-md mb-6 cursor-pointer',
            {
              'border-gray-200 ': !element.isActive,
              'border-primary': element.isActive,
            },
          )}
        >
          <div className="flex gap-2 sm:gap-4 items-center">
            <label
              className="relative flex cursor-pointer items-center rounded-full"
              htmlFor="pink"
            >
              <input
                id="pink"
                name="color"
                type="radio"
                className="before:content[''] peer relative h-3.5 w-3.5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-primary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary checked:before:bg-primary"
                checked={element.isActive}
              />
              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-primary opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-2 w-2"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </div>
            </label>
            <img
              className="md:w-[150px] md:h-[120px] sm:h-24 sm:w-24 w-20 h-20"
              src={blackCord}
              alt=""
            />
            <span>{element.cardTitle}</span>
          </div>
          <div>
            <button className="bg-green-100 text-md shadow-lg w-16 md:w-24 h-10 text-green-800 rounded-lg font-bold">
              Gratis
            </button>
          </div>
        </div>
      </React.Fragment>
    )
  })

  return (
    <>
      <div>{accordionData}</div>
    </>
  )
}

export default ClaspCard

import { Fragment, useEffect, useState } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react'
import cn from 'classnames'
import * as Icons from '../global/Icons'
import ContinueBtn from './ContinueBtn'
import CordCard from './CordCard'
import DetailCard from './DetailCard'
import ClaspCard from './ClaspCard'

// @ts-ignore
function Icon({ open, isCompleted }) {
  return (
    <>
      <div className="flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${open ? 'rotate-180' : ''}  transition-transform ${
            isCompleted ? 'bg-primary' : 'bg-gray-800'
          } rounded-full`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </>
  )
}

export default function RightSideContent() {
  const handleOpen = (index: number) => {
    if (steps < 3) {
      let updatedData = [...accordionData]
      updatedData.forEach((element) => (element.isActive = false))
      if (updatedData[index].isCompleted) {
        updatedData[index].isActive = true
      }
      setAccordionData((accordionData = updatedData))
    }
  }
  let [steps, setSteps] = useState<number>(0)

  let [accordionData, setAccordionData] = useState<any[]>([
    {
      id: 1,
      isActive: true,
      isCompleted: true,
      title: 'Select phone modal',
      content: () => {
        return (
          <>
            <div className="px-1 sm:px-2">
              <select
                data-te-select-init
                className="w-full border-2 sm:p-4 p-3 rounded-xl focus:border-[#d96450] focus:border-2 focus:outline-none text-md sm:text-lg font-semibold text-gray-400"
              >
                <option value="1">Alcatel 1S 2020</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
              </select>
            </div>
          </>
        )
      },
    },
    {
      id: 2,
      isActive: false,
      isCompleted: false,
      title: 'Select cord color',
      content: () => {
        return (
          <>
            <div className="sm:px-4 px-1 h-[350px] overflow-scroll">
              <CordCard />
            </div>
          </>
        )
      },
    },
    {
      id: 3,
      isActive: false,
      isCompleted: false,
      title: 'Select detail color',
      content: () => {
        return (
          <>
            <div className="sm:px-4 px-1 h-[350px] overflow-scroll">
              <DetailCard />
            </div>
          </>
        )
      },
    },
    {
      id: 4,
      isActive: false,
      isCompleted: false,
      title: 'Select clasp',
      content: () => {
        return (
          <>
            <div className="sm:px-4 px-1 h-[350px] overflow-scroll">
              <ClaspCard />
            </div>
          </>
        )
      },
    },
  ])

  useEffect(() => {
    if (steps < 4) {
      let updatedData = [...accordionData]
      updatedData.forEach((element) => (element.isActive = false))
      updatedData[steps].isActive = true
      updatedData[steps].isCompleted = true
      setAccordionData((accordionData = updatedData))
    }
  }, [steps])

  const accordion = accordionData.map((element: any, index: number) => {
    return (
      <Fragment>
        <Accordion
          open={element.isActive}
          icon={
            <Icon open={element.isActive} isCompleted={element.isCompleted} />
          }
        >
          <AccordionHeader onClick={() => handleOpen(index)}>
            <div className="flex gap-2 items-center">
              <div
                className={cn(
                  ' w-[35px] h-[35px] flex justify-center rounded-full text-white',
                  {
                    'bg-gray-800': !element.isCompleted,
                    'bg-primary': element.isCompleted,
                  },
                )}
              >
                <p className="flex items-center">{index + 1}</p>
              </div>
              <div>
                <p className="md:text-xl text-sm">{element.title}</p>
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody>
            <p>{element.content && element.content()}</p>
          </AccordionBody>
        </Accordion>
      </Fragment>
    )
  })

  return (
    <div className="px-6 pt-4 bg-white h-[750px] rounded-3xl">
      <div>{accordion}</div>
      <div className="mt-4">
        <ContinueBtn
          svgIcon={steps < 3 ? <Icons.SideArrowIcon /> : <Icons.CartIcon />}
          title={steps < 3 ? 'Continue' : 'Add to cart'}
          onClick={() => {
            if (steps < 4) {
              setSteps((steps = steps + 1))
            }
          }}
        />
      </div>
    </div>
  )
}

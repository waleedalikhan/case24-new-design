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
import AccordionSelector from './AccordionSelector'

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

const RightSideContent: React.FC = ({}) => {
  const handleOpen = (index: number) => {
    let updatedData = [...accordionData]
    updatedData.forEach((element) => (element.isActive = false))
    updatedData[index].isActive = true
    setAccordionData((accordionData = updatedData))
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
            <AccordionSelector
              getSelectedValue={(value: string) => handleItemChange(value, 0)}
            />
          </>
        )
      },
      selectedValue: '',
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
              <CordCard
                onChange={(value: string) => handleItemChange(value, 1)}
              />
            </div>
          </>
        )
      },
      selectedValue: '',
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
              <DetailCard
                onChange={(value: string) => handleItemChange(value, 2)}
              />
            </div>
          </>
        )
      },
      selectedValue: '',
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
              <ClaspCard
                onChange={(value: string) => handleItemChange(value, 3)}
              />
            </div>
          </>
        )
      },
      selectedValue: '',
    },
  ])

  const handleItemChange = (value: string, index: number) => {
    let updatedData = [...accordionData]
    updatedData[index].selectedValue = value
    setAccordionData((accordionData = updatedData))
  }

  useEffect(() => {
    if (steps < 4) {
      let updatedData = [...accordionData]
      updatedData.forEach((element) => (element.isActive = false))
      updatedData[steps].isActive = true
      updatedData[steps].isCompleted = true
      setAccordionData((accordionData = updatedData))
    }
    setAccordionData((prevState) => prevState)
  }, [steps])
  const renderAccordions = accordionData.map((element: any, index: number) => {
    return (
      <Fragment key={`${element.id}${index}`}>
        <Accordion
          open={element.isActive}
          icon={
            <Icon open={element.isActive} isCompleted={element.isCompleted} />
          }
        >
          <AccordionHeader onClick={() => handleOpen(index)}>
            <div className="flex gap-2 items-center w-full justify-between">
              <div className="flex gap-2 items-center">
                <div className="flex flex-wrap gap-2 items-center">
                  <div>
                    <div
                      className={cn(
                        'w-[35px] h-[35px] flex justify-center rounded-full text-white font-workSans',
                        {
                          'bg-gray-800': !element.isCompleted,
                          'bg-primary': element.isCompleted,
                        },
                      )}
                    >
                      <p className="flex items-center">{index + 1}</p>
                    </div>
                  </div>
                  <div>
                    <p className="md:text-xl text-sm font-workSans truncate">
                      {element.title}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="md:text-2xl text-sm font-workSans">
                  {element.selectedValue}
                </p>
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody>
            <div>{element.content && element.content()}</div>
          </AccordionBody>
        </Accordion>
      </Fragment>
    )
  })

  return (
    <div className="px-6 pt-4 bg-white h-[750px] rounded-lg">
      <div>{renderAccordions}</div>
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

export default RightSideContent

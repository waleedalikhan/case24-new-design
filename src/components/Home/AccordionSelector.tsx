import Select from 'react-select'

// @ts-ignore
const Checkbox = ({ children, ...props }: JSX.IntrinsicElements['input']) => (
  <label style={{ marginRight: '1em' }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
)

type Props = {
  getSelectedValue?: (selection: string) => void
}

const AccordionSelector: React.FC<Props> = ({ getSelectedValue }) => {
  const options = [
    {
      value: 'Alcatel',
      label: 'Alcatel',
    },
    {
      value: 'Apple',
      label: 'Apple',
    },
    {
      value: 'Asus',
      label: 'Asus',
    },
    {
      value: 'Google',
      label: 'Google',
    },
    {
      value: 'Honor',
      label: 'Honor',
    },
    {
      value: 'Huawei',
      label: 'Huawei',
    },
    {
      value: 'Motorola',
      label: 'Motorola',
    },
    {
      value: 'Nokia',
      label: 'Nokia',
    },
    {
      value: 'OnePlus',
      label: 'OnePlus',
    },
    {
      value: 'Oppo',
      label: 'Oppo',
    },
    {
      value: 'Samsung',
      label: 'Samsung',
    },
    {
      value: 'Sony',
      label: 'Sony',
    },
    {
      value: 'Wiko',
      label: 'Wiko',
    },
    {
      value: 'Xiaomi',
      label: 'Xiaomi',
    },
  ]
  const handleChange = (selection: any) => {
    getSelectedValue && getSelectedValue(selection.value)
  }

  return (
    <>
      <div>
        <Select
          className="basic-single z-50 relative font-workSans cursor-pointer"
          classNamePrefix="select"
          name="color"
          options={options}
          menuPosition="fixed"
          onChange={handleChange}
        />
      </div>
    </>
  )
}
export default AccordionSelector

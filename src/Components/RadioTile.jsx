// @flow
import React from 'react'

type TileProps = {
  checked: boolean,
  className?: string,
  enabled: boolean,
  icon: string,
  iconLabel?: string,
  id: string,
  label: string,
  name: string,
  onChange: (string) => void,
  value: string,
}

const RadioTile = (props: TileProps) => {
  const handleOnchange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    props.onChange(event.target.value)
  }

  const { label, checked, id, name, enabled, icon, value, className, iconLabel } = props
  return (
    <div className='col-4 col-md-3 pb-3' key={label}>
      <div className={className || 'custom-control custom-radio radio-image with-bg'} onClick={() => { props.onChange(value) }}>
        <input
          checked={checked}
          className='custom-control-input'
          id={id}
          name={name}
          onChange={handleOnchange}
          readOnly={!enabled}
          type='radio'
          value={value}
        />
        <label className='custom-control-label' htmlFor={id}>
          {icon && <span className='image'><span className={icon}/></span>}
          {iconLabel && <span className='image'><span className='calc calc-day-number'>{iconLabel}</span></span>}
          <span className='label'>{label}</span>
        </label>
      </div>
    </div>
  )
}

export default RadioTile

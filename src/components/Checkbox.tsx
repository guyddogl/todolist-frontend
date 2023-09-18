import { useState } from 'react';
import { Checkbox as MantineCheckBox } from "@mantine/core";

interface ICheckbox {
  label: string;
  checked: boolean;
}

export function Checkbox({label, checked}: ICheckbox) {
  const [change, setChange] = useState(checked);

  return (
    <MantineCheckBox
      label={label}
      checked={change}
      onChange={(event) => setChange(event.currentTarget.checked)}
      td={`${change === true ? 'line-through' : 'none'}}`}
      style={{marginTop: '5px'}}
    />
  )
}
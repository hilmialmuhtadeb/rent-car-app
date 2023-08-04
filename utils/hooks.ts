import { ChangeEvent, useState } from 'react';

type UseInputHook = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function useInput(initialValue: string | number) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
}
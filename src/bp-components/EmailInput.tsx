import { useState, useRef, SetStateAction, Dispatch } from 'react';
import { Autocomplete, Loader } from '@mantine/core';

interface EmailInputProps {
  className?: string,
  // onValueChanged: Dispatch<SetStateAction<string>>,
}

export function EmailInput({className, ...other}: EmailInputProps | any) {
  const timeoutRef = useRef<number>(-1);
  const [value, setValue] = useState(other.value);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>([]);

  const handleChange = (val: string) => {
    console.log(other)
    other.onChange(val)
    setValue(val)
    // window.clearTimeout(timeoutRef.current);
    // setValue(val);
    // setData([]);

    // if (val.trim().length === 0 || val.includes('@')) {
    //   setLoading(false);
    // } else {
    //   setLoading(true);
    //   timeoutRef.current = window.setTimeout(() => {
    //     setLoading(false);
    //     setData(['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => `${val}@${provider}`));
    //   }, 1000);
    // }
  };

  return (
    <>
      <Autocomplete
        className={className}
        size="md"
        data={data}
        onChange={val => handleChange(val)}
        rightSection={loading ? <Loader size="1rem" /> : null}
        label="Email"
        placeholder="Your email"
      />
    </>
    
  );
}
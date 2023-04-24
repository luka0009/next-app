"use client";
import useCountries from "@/app/hooks/useCountries";
import useFocus from "@/app/hooks/useFocus";
import { useState } from "react";
import Select from "react-select";

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

interface CountrySelectProps {
  value: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}

const CountrySelect = ({ value, onChange }: CountrySelectProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const focus = useFocus();
  const { getAll } = useCountries();

  const handleFocus = () => {
    focus.onFocused();
    setIsFocused(true);
  };

  const handleBlur = () => {
    focus.onBlur();
    setIsFocused(false);
  };
  // console.log(isFocused);
  return (
    <div>
      <Select
        placeholder="Select country"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3">
            <div>{option.flag}</div>
            <div>
              {option.label},
              <span className="text-neutral-800 ml-1">{option.region}</span>
            </div>
          </div>
        )}
        classNames={{
          control: () => "p-1 b-2",
          input: () => "text-lg",
          option: () => "text-lg",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "#ffe4e6",
          },
        })}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default CountrySelect;

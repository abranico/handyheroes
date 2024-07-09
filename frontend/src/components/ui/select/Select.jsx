import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";

const Select = ({ options, placeholder, icon }) => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("");

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) => {
          return option.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="w-full relative">
      <Combobox
        value={selected}
        onChange={(value) => setSelected(value)}
        onClose={() => setQuery("")}
      >
        <div className="relative">
          <ComboboxInput
            className={clsx(
              "w-full appearance-none border border-gray-300 rounded py-4 px-3 text-sm text-gray-700",
              `focus:outline-none focus:border-gray-500 ${icon ? "pl-10" : ""}`
            )}
            displayValue={(option) => option?.name}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={placeholder}
          />
          {icon && (
            <span className="absolute top-0 bottom-0 left-0  flex items-center ml-3">
              {icon}
            </span>
          )}
          <ComboboxButton className="absolute inset-y-0 right-0 flex items-center pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-caret-down"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#9e9e9e"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 10l6 6l6 -6h-12" />
            </svg>
          </ComboboxButton>
        </div>

        <ComboboxOptions
          className={clsx(
            "absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto",
            "focus:outline-none"
          )}
        >
          {filteredOptions.map((option) => (
            <ComboboxOption
              key={option.id}
              value={option}
              className={({ active }) =>
                clsx(
                  "cursor-pointer select-none relative py-2 pl-10 pr-4",
                  active ? "bg-blue-600 text-white" : "text-gray-900"
                )
              }
            >
              {({ selected, active }) => (
                <>
                  <span
                    className={clsx(
                      "block truncate",
                      selected ? "font-medium" : "font-normal"
                    )}
                  >
                    {option.name}
                  </span>
                  {selected && (
                    <span
                      className={clsx(
                        "absolute inset-y-0 left-0 flex items-center pl-3",
                        active ? "text-white" : "text-blue-600"
                      )}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-caret-right"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#9e9e9e"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 18l6 -6l-6 -6v12" />
                      </svg>
                    </span>
                  )}
                </>
              )}
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
};

export default Select;

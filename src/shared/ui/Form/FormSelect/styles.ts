import { CSSObjectWithLabel } from "react-select";

export const styles = {
  control: (provided: CSSObjectWithLabel) => ({
    ...provided,
    border: "none",
    boxShadow: "none",
    backgroundColor: "transparent",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    width: "full",
    height: "54px",
    cursor: "pointer",
    padding: "0 12px 0 1px",
  }),
  singleValue: (provided: CSSObjectWithLabel) => ({
    ...provided,
    color: "white",
  }),
  input: (provided: CSSObjectWithLabel) => ({
    ...provided,
    color: "white",
  }),
  option: (provided: CSSObjectWithLabel, state: { isFocused: boolean }) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#9B9B2B" : "white",
    color: state.isFocused ? "#1A202C" : "#4A5568",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#9B9B2B",
    },
  }),
  placeholder: (provided: CSSObjectWithLabel) => ({
    ...provided,
    color: "white",
  }),
  indicatorSeparator: () => ({}),
};

import { ControlProps, CSSObjectWithLabel } from "react-select";

export const styles = {
  control: (provided: CSSObjectWithLabel, state?: ControlProps<unknown>) => ({
    ...provided,
    border: "1px solid #D4D7DD",
    borderRadius: "8px",
    boxShadow: "none",
    backgroundColor: state?.isDisabled ? "#fff" : "transparent",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    width: "100%",
    minW: "236px",
    maxWidth: "236px",
    height: "40px",
    cursor: "pointer",
    padding: "0 12px 0 12px",
  }),
  placeholder: (base: CSSObjectWithLabel) => ({
    ...base,
    display: "none",
  }),
  option: (provided: CSSObjectWithLabel) => ({
    ...provided,
    cursor: "pointer",
  }),
  valueContainer: (provided: CSSObjectWithLabel) => ({
    ...provided,
    display: "flex",
    flexWrap: "nowrap",
  }),

  indicatorSeparator: () => ({}),
};

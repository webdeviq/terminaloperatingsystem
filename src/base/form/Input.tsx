import { ComponentPropsWithoutRef } from "react";
import Container from "./Container";


import { IRolesList } from "../../models/login/login";

type InputProps = {
  element: "input";
  labeltext: string;
  styles: string;
} & ComponentPropsWithoutRef<"input">;

type SelectProps = {
  element: "select";
  labeltext: string;
  styles: string;
} & ComponentPropsWithoutRef<"select">;

// type Props = {
//   labeltext: string;
//   htmlfor: string;
//   inputtype: InputOrOption;
//   optionstext?: OptionsText[];
//   style?: string;
// } & ComponentPropsWithoutRef<"input">;

const Input: React.FC<InputProps | SelectProps> = (
  props: InputProps | SelectProps
) => {
  const { labeltext, styles } = props;
  const containerStyle = `${styles ? styles : ""}`;

  if (props.element === "input") {
    const { name, id, type, value, ...other } = props;
    return (
      <Container externalstyles={containerStyle}>
        <label htmlFor={labeltext}>{labeltext}</label>
        <input name={name} id={id} type={type} value={value} {...other} />
      </Container>
    );
  }
  const { name, id,  ...other } = props;
  return (
    <Container externalstyles={containerStyle}>
      <label htmlFor={labeltext}>{labeltext}</label>
      <select name={name} id={id} {...other}>
        <option value="ali" defaultValue="ali">
          --
        </option>
        {IRolesList?.map((element) => (
          <option key={element.role} value={element.role?.toString()}>
            {element.role}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Input;

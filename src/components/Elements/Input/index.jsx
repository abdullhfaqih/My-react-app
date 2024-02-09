import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = forwardRef(({ name, label, type, placeholder }, ref) => {
  return (
    <div className="mb-6">
      <Label htmlfor={name} label={label} />
      <Input type={type} placeholder={placeholder} name={name} ref={ref} />
    </div>
  );
});

export default InputForm;

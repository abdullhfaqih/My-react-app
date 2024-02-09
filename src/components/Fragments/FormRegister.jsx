import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        htmlfor="fullname"
        type="text"
        placeholder="Abdullahfaqih"
        name="fullname"
      />
      <InputForm
        label="email"
        htmlfor="email"
        type="email"
        name="email"
        placeholder="example@gmail.com"
      />
      <InputForm
        label="password"
        htmlfor="password"
        type="password"
        name="password"
        placeholder="********"
      />
      <InputForm
        label="Confirm Password"
        htmlfor="confirm"
        type="password"
        name="confirm"
        placeholder="********"
      />
      <Button classname="bg-blue-600 w-full" >Register</Button>
    </form>
  );
};

export default FormRegister;

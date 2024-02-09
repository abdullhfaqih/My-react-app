const Label = ({htmlfor, label}) => {
  return (
    <label
      htmlFor={htmlfor}
      className="block text-slate-700 text-sm font-bold mb-2">
      {label}
    </label>
  );
};

export default Label

import { useController } from "react-hook-form";

type CheckboxOption = {
  id: string;
  text: string;
};

type Props = {
  label: string;
  items: CheckboxOption[];
  name: string;
  control: any;
  rules?: any;
};


const Checkbox = ({ label, items, name, control, rules }: Props) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue: [] // Set the initial value for the checkbox array
  });

  const handleCheckboxChange = (itemId: string) => {
    const updatedValue = value.includes(itemId)
      ? value.filter((item) => item !== itemId) // Remove the item if it exists
      : [...value, itemId]; // Add the item if it doesn't exist

    onChange(updatedValue);
  };

  //   if (updatedValue.includes(itemId)) {
  //     // If the item is already selected, remove it
  //     updatedValue.splice(updatedValue.indexOf(itemId), 1);
  //   } else {
  //     // If the item is not selected, add it
  //     updatedValue.push(itemId);
  //   }

  //   onChange(updatedValue); // Update the value in react-hook-form controller
  // };

  return (
    <fieldset>
      <legend>{label}</legend>
      {items.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            id={item.id}
            checked={value.includes(item.id)}
            onChange={() => handleCheckboxChange(item.id)}
          />
          <label htmlFor={item.id}>{item.text}</label>
        </div>
      ))}
      {error && (
        <span className="text-red-400 text-sm font-semibold">
          {error.message}
        </span>
      )}
    </fieldset>
  );
};

export default Checkbox;
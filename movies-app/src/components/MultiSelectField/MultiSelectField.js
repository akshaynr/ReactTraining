import { MultiSelect } from 'react-multi-select-component';
import { useField } from 'formik';

const MultiSelectField = ({ options, ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  const handleChange = selectedOptions => {
    helpers.setValue(selectedOptions.map(option => option.value));
  };

  const selectedValues = options.filter(option => field.value.includes(option.value));

  return (
    <MultiSelect
      options={options}
      value={selectedValues}
      onChange={handleChange}
      {...props}
    />
  );
};

export default MultiSelectField;

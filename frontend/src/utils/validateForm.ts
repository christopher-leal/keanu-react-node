import Ajv from 'ajv';
import { formSchema } from '../validation/schema';

const ajv = new Ajv();
const validate = ajv.compile(formSchema);

export const validateForm = (data: unknown) => {
  const valid = validate(data);
  if (!valid) {
    return validate.errors;
  }
  return null;
};

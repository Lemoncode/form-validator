import { Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema = {
  field: {
    email: [
      {
        validator: Validators.email.validator,
      },
    ],
  },
};

export const formValidation = createFormikValidation(validationSchema);

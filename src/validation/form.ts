import { z } from 'zod';

import { PASSWORD_REGEX } from '../constants';

export const FormValidationSchema = z
  .object({
    name: z.string().min(1, { message: 'Field cannot be empty' }),
    email: z.string().email({ message: 'Input is not a valid email address' }),
    password: z.string().regex(PASSWORD_REGEX, {
      message:
        'Password must contain minimum eight characters, at least one letter, one number and one special character',
    }),
    confirm: z.string(),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: "Passwords don't match",
    path: ['confirm'],
  });

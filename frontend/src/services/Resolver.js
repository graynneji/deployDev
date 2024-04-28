import { useCallback } from "react";

export const useYupValidationResolver = (contactFormSchema) =>
  useCallback(
    async (data) => {
      try {
        const values = await contactFormSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        console.log(errors);
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [contactFormSchema]
  );

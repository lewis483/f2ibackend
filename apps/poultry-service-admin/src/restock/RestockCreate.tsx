import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const RestockCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="quantity" source="quantity" />
        <DateTimeInput label="restockDate" source="restockDate" />
      </SimpleForm>
    </Create>
  );
};

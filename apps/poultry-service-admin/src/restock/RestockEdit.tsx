import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const RestockEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="quantity" source="quantity" />
        <DateTimeInput label="restockDate" source="restockDate" />
      </SimpleForm>
    </Edit>
  );
};

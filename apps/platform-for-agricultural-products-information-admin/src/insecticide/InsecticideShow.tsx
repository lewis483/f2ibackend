import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const InsecticideShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="productName" source="productName" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="usageDetails" source="usageDetails" />
      </SimpleShowLayout>
    </Show>
  );
};

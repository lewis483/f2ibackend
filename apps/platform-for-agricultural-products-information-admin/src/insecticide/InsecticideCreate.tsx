import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const InsecticideCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="productName" source="productName" />
        <TextInput label="usageDetails" multiline source="usageDetails" />
      </SimpleForm>
    </Create>
  );
};

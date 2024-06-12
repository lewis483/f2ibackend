import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const InsecticideEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="productName" source="productName" />
        <TextInput label="usageDetails" multiline source="usageDetails" />
      </SimpleForm>
    </Edit>
  );
};

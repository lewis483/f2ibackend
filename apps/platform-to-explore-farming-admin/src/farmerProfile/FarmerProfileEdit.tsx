import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FarmerProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="bio" multiline source="bio" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};

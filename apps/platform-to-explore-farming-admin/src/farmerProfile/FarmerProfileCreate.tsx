import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FarmerProfileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="bio" multiline source="bio" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};

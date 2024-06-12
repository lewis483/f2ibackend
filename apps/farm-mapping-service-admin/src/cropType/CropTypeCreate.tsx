import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CropTypeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="cropName" source="cropName" />
        <TextInput label="description" multiline source="description" />
      </SimpleForm>
    </Create>
  );
};

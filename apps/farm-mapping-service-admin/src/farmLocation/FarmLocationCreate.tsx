import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FarmLocationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="locationName" source="locationName" />
      </SimpleForm>
    </Create>
  );
};

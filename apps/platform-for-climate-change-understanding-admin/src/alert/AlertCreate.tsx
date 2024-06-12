import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AlertCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="alertName" source="alertName" />
        <TextInput label="message" multiline source="message" />
      </SimpleForm>
    </Create>
  );
};

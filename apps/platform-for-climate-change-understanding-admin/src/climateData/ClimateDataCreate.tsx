import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ClimateDataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="dataName" source="dataName" />
        <TextInput label="details" multiline source="details" />
      </SimpleForm>
    </Create>
  );
};

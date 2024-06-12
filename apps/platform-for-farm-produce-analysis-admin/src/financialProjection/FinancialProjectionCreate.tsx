import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FinancialProjectionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="projectionDetails"
          multiline
          source="projectionDetails"
        />
        <TextInput label="projectionName" source="projectionName" />
      </SimpleForm>
    </Create>
  );
};

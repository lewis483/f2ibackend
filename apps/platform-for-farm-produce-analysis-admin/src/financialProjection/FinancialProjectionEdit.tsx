import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FinancialProjectionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="projectionDetails"
          multiline
          source="projectionDetails"
        />
        <TextInput label="projectionName" source="projectionName" />
      </SimpleForm>
    </Edit>
  );
};

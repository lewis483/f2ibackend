import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ClimateDataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="dataName" source="dataName" />
        <TextInput label="details" multiline source="details" />
      </SimpleForm>
    </Edit>
  );
};

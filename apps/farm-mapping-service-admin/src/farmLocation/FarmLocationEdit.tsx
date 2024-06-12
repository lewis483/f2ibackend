import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FarmLocationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="locationName" source="locationName" />
      </SimpleForm>
    </Edit>
  );
};

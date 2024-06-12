import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ProduceInfoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="produceName" source="produceName" />
      </SimpleForm>
    </Edit>
  );
};

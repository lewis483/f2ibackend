import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CropTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="cropName" source="cropName" />
        <TextInput label="description" multiline source="description" />
      </SimpleForm>
    </Edit>
  );
};

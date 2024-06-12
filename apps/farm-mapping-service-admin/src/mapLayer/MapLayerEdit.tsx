import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MapLayerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="layerDetails" multiline source="layerDetails" />
        <TextInput label="layerName" source="layerName" />
      </SimpleForm>
    </Edit>
  );
};

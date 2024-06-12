import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CropYieldPredictionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="cropName" source="cropName" />
        <TextInput label="yieldPrediction" multiline source="yieldPrediction" />
      </SimpleForm>
    </Edit>
  );
};

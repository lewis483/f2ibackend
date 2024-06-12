import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CropYieldPredictionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="cropName" source="cropName" />
        <TextInput label="yieldPrediction" multiline source="yieldPrediction" />
      </SimpleForm>
    </Create>
  );
};

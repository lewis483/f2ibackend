import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const UsageGuidelineEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="guidelineTitle" source="guidelineTitle" />
      </SimpleForm>
    </Edit>
  );
};

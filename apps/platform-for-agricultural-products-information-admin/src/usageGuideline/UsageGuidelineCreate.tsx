import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const UsageGuidelineCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="guidelineTitle" source="guidelineTitle" />
      </SimpleForm>
    </Create>
  );
};

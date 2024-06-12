import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AnalysisReportCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="findings" multiline source="findings" />
        <TextInput label="reportName" source="reportName" />
      </SimpleForm>
    </Create>
  );
};

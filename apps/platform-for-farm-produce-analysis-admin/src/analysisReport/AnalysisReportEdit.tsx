import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AnalysisReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="findings" multiline source="findings" />
        <TextInput label="reportName" source="reportName" />
      </SimpleForm>
    </Edit>
  );
};

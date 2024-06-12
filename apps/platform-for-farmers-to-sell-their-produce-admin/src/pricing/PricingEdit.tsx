import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProduceTitle } from "../produce/ProduceTitle";

export const PricingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="pricePerUnit" source="pricePerUnit" />
        <ReferenceInput source="produce.id" reference="Produce" label="produce">
          <SelectInput optionText={ProduceTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

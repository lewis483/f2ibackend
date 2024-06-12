import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProduceTitle } from "../produce/ProduceTitle";

export const PricingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="pricePerUnit" source="pricePerUnit" />
        <ReferenceInput source="produce.id" reference="Produce" label="produce">
          <SelectInput optionText={ProduceTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

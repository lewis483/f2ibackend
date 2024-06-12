import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { PricingTitle } from "../pricing/PricingTitle";

export const ProduceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="pricings"
          reference="Pricing"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PricingTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="quantity" source="quantity" />
      </SimpleForm>
    </Edit>
  );
};

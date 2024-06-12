import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { PricingTitle } from "../pricing/PricingTitle";

export const ProduceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};

import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PRODUCE_TITLE_FIELD } from "./ProduceTitle";

export const ProduceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="quantity" source="quantity" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Pricing"
          target="produceId"
          label="Pricings"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="pricePerUnit" source="pricePerUnit" />
            <ReferenceField
              label="produce"
              source="produce.id"
              reference="Produce"
            >
              <TextField source={PRODUCE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

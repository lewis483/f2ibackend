import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PurchaseOrderTitle } from "../purchaseOrder/PurchaseOrderTitle";

export const PaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="paymentStatus" source="paymentStatus" />
        <ReferenceInput
          source="purchaseOrder.id"
          reference="PurchaseOrder"
          label="purchaseOrder"
        >
          <SelectInput optionText={PurchaseOrderTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

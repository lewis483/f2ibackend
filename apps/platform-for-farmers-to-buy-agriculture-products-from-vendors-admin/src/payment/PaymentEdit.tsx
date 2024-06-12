import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PurchaseOrderTitle } from "../purchaseOrder/PurchaseOrderTitle";

export const PaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

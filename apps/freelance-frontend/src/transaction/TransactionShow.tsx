import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { USER1_TITLE_FIELD } from "../user1/User1Title";
import { JOB_TITLE_FIELD } from "../job/JobTitle";

export const TransactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Amount" source="amount" />
        <ReferenceField label="Client" source="user1.id" reference="User1">
          <TextField source={USER1_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Freelancer" source="user1.id" reference="User1">
          <TextField source={USER1_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
        <ReferenceField label="Job" source="job.id" reference="Job">
          <TextField source={JOB_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="transactionDate" label="Transaction Date" />
      </SimpleShowLayout>
    </Show>
  );
};

import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { User1Title } from "../user1/User1Title";
import { JobTitle } from "../job/JobTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <ReferenceInput source="client.id" reference="User1" label="Client">
          <SelectInput optionText={User1Title} />
        </ReferenceInput>
        <ReferenceInput
          source="freelancer.id"
          reference="User1"
          label="Freelancer"
        >
          <SelectInput optionText={User1Title} />
        </ReferenceInput>
        <ReferenceInput source="job.id" reference="Job" label="Job">
          <SelectInput optionText={JobTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

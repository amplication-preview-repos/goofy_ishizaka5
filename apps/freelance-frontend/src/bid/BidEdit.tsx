import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { User1Title } from "../user1/User1Title";
import { JobTitle } from "../job/JobTitle";

export const BidEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
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
        <TextInput label="Proposal" source="proposal" />
      </SimpleForm>
    </Edit>
  );
};

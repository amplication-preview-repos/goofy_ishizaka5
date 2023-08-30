import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { User1Title } from "../user1/User1Title";
import { JobTitle } from "../job/JobTitle";

export const ReviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="client.id" reference="User1" label="Client">
          <SelectInput optionText={User1Title} />
        </ReferenceInput>
        <TextInput label="Content" source="content" />
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
        <NumberInput step={1} label="Rating" source="rating" />
      </SimpleForm>
    </Edit>
  );
};

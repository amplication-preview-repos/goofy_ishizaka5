import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { User1Title } from "../user1/User1Title";

export const SkillEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="users"
          reference="User1"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={User1Title} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};

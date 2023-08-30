import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { User1Title } from "../user1/User1Title";

export const SkillCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};

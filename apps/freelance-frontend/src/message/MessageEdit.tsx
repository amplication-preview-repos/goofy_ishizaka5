import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { User1Title } from "../user1/User1Title";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Content" source="content" />
        <ReferenceInput source="receiver.id" reference="User1" label="Receiver">
          <SelectInput optionText={User1Title} />
        </ReferenceInput>
        <ReferenceInput source="sender.id" reference="User1" label="Sender">
          <SelectInput optionText={User1Title} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

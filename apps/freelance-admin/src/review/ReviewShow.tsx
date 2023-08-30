import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { USER1_TITLE_FIELD } from "../user1/User1Title";
import { JOB_TITLE_FIELD } from "../job/JobTitle";

export const ReviewShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Client" source="user1.id" reference="User1">
          <TextField source={USER1_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Freelancer" source="user1.id" reference="User1">
          <TextField source={USER1_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
        <ReferenceField label="Job" source="job.id" reference="Job">
          <TextField source={JOB_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Rating" source="rating" />
      </SimpleShowLayout>
    </Show>
  );
};

import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER1_TITLE_FIELD } from "../user1/User1Title";
import { JOB_TITLE_FIELD } from "../job/JobTitle";

export const ReviewList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Reviews"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};

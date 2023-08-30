import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER1_TITLE_FIELD } from "../user1/User1Title";

export const MessageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Messages"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Content" source="content" />
        <TextField label="Id" source="id" />
        <ReferenceField label="Receiver" source="user1.id" reference="User1">
          <TextField source={USER1_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Sender" source="user1.id" reference="User1">
          <TextField source={USER1_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="sentAt" label="Sent At" />
      </Datagrid>
    </List>
  );
};

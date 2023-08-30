import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER1_TITLE_FIELD } from "./User1Title";
import { JOB_TITLE_FIELD } from "../job/JobTitle";

export const User1Show = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Bio" source="bio" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="Id" source="id" />
        <TextField label="Location" source="location" />
        <TextField label="Profile Image" source="profileImage" />
        <TextField label="Role" source="role" />
        <TextField label="Username" source="username" />
        <TextField label="Roles" source="roles" />
        <ReferenceManyField reference="Bid" target="freelancerId" label="Bids">
          <Datagrid rowClick="show">
            <TextField label="Amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Freelancer"
              source="user1.id"
              reference="User1"
            >
              <TextField source={USER1_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <ReferenceField label="Job" source="job.id" reference="Job">
              <TextField source={JOB_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Proposal" source="proposal" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Job" target="clientId" label="Jobs">
          <Datagrid rowClick="show">
            <TextField label="Budget" source="budget" />
            <ReferenceField label="Client" source="user1.id" reference="User1">
              <TextField source={USER1_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="Id" source="id" />
            <TextField label="Title" source="title" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Message"
          target="receiverId"
          label="Messages"
        >
          <Datagrid rowClick="show">
            <TextField label="Content" source="content" />
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Receiver"
              source="user1.id"
              reference="User1"
            >
              <TextField source={USER1_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Sender" source="user1.id" reference="User1">
              <TextField source={USER1_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="sentAt" label="Sent At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Review"
          target="clientId"
          label="Reviews"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Client" source="user1.id" reference="User1">
              <TextField source={USER1_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Freelancer"
              source="user1.id"
              reference="User1"
            >
              <TextField source={USER1_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <ReferenceField label="Job" source="job.id" reference="Job">
              <TextField source={JOB_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Rating" source="rating" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Review"
          target="freelancerId"
          label="Reviews"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Client" source="user1.id" reference="User1">
              <TextField source={USER1_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Freelancer"
              source="user1.id"
              reference="User1"
            >
              <TextField source={USER1_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <ReferenceField label="Job" source="job.id" reference="Job">
              <TextField source={JOB_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Rating" source="rating" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Message"
          target="senderId"
          label="Messages"
        >
          <Datagrid rowClick="show">
            <TextField label="Content" source="content" />
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Receiver"
              source="user1.id"
              reference="User1"
            >
              <TextField source={USER1_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Sender" source="user1.id" reference="User1">
              <TextField source={USER1_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="sentAt" label="Sent At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Transaction"
          target="clientId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
            <TextField label="Amount" source="amount" />
            <ReferenceField label="Client" source="user1.id" reference="User1">
              <TextField source={USER1_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Freelancer"
              source="user1.id"
              reference="User1"
            >
              <TextField source={USER1_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <ReferenceField label="Job" source="job.id" reference="Job">
              <TextField source={JOB_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="transactionDate" label="Transaction Date" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Transaction"
          target="freelancerId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
            <TextField label="Amount" source="amount" />
            <ReferenceField label="Client" source="user1.id" reference="User1">
              <TextField source={USER1_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Freelancer"
              source="user1.id"
              reference="User1"
            >
              <TextField source={USER1_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <ReferenceField label="Job" source="job.id" reference="Job">
              <TextField source={JOB_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="transactionDate" label="Transaction Date" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

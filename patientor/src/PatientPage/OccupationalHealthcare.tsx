import React from "react";
import { Icon, Card, Grid } from "semantic-ui-react";
import { OccupationalHealthcareEntry } from "../types";

const OccupationalHealthcare: React.FC<{
  entry: OccupationalHealthcareEntry;
}> = ({ entry }) => (
  <Grid.Column>
    <Card>
      <Card.Content>
        <Icon name="pills" /> {entry.date}
      </Card.Content>
      <Card.Content description={entry.description} />
    </Card>
  </Grid.Column>
);

export default OccupationalHealthcare;

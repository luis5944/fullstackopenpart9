import React from "react";
import { Card, Grid, Icon } from "semantic-ui-react";
import { HospitalEntry } from "../types";

const Hospital: React.FC<{ entry: HospitalEntry }> = ({ entry }) => (
  <Grid.Column>
    <Card>
      <Card.Content>
        {entry.date} <Icon name="hospital symbol" />
      </Card.Content>
      <Card.Content>{entry.description}</Card.Content>
    </Card>
  </Grid.Column>
);

export default Hospital;

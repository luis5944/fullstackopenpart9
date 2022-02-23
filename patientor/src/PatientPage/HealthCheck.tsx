import React from "react";
import { Icon, Card, Grid } from "semantic-ui-react";
import { HealthCheckEntry } from "../types";

const HealthCheck: React.FC<{ entry: HealthCheckEntry }> = ({ entry }) => {
  let color: "green" | "yellow" | "orange" | "red";

  switch (entry.healthCheckRating) {
    case 0:
      color = "green";
      break;
    case 1:
      color = "yellow";
      break;
    case 2:
      color = "orange";
      break;
    case 3:
      color = "red";
      break;
    default:
      color = "green";
      break;
  }

  return (
    <Grid.Column>
      <Card>
        <Card.Content>
          <Icon name="user doctor" /> {entry.date}
        </Card.Content>
        <Card.Content description={entry.description} />
        <Card.Content extra>
          <Icon name="heart" color={color} />
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default HealthCheck;

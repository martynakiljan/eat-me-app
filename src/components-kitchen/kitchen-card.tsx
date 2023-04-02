/** @format */

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { foodsType } from "./kitchen-asia";

function GroupExample({ id, name, description, price, src }: foodsType) {
  return (
    <CardGroup>
      <Card id={id}>
        <Card.Img variant="top" src={src} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{price}</Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;

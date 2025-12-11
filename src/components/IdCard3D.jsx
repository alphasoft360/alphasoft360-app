import React from "react";
import { Card } from "react-bootstrap";
import EventIdcard from "./EventIdcard";

const IdCard3D = ({ member }) => {
  return (
    <Card className="border-0">
      <div style={{ height: "550px" }}>
        <EventIdcard member={member} />
      </div>
    </Card>
  );
};

export default IdCard3D;

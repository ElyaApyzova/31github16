import React, { useState } from "react";
import { Card } from "antd";

export const Home = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <h1>Home</h1>
      <Card style={{ width: 300 }}>Hello</Card>
    </div>
  );
};

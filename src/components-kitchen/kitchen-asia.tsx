/** @format */
import React from "react";
import Card from "./kitchen-card";
import { asiaKitchen } from "../kitchen-data/kitchen-asia.js";

export type foodsType = {
  id: string;
  name: string;
  description: string;
  price: string;
  src: string;
};

const KitchenAsia = () => {
  return (
    <div>
      {asiaKitchen.map(({ id, name, description, price, src }: foodsType) => (
        <Card
          id={id}
          name={name}
          description={description}
          price={price}
          src={src}
        />
      ))}
    </div>
  );
};

export default KitchenAsia;

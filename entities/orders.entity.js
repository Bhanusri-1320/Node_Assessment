import { Entity } from "electrodb"; // ORM(Object relation mapping) // Adapter on adapter

import { client } from "../util/dbconnection.js";

const Orders = new Entity(
  {
    model: {
      entity: "Orders",
      version: "1",
      service: "OrdersService",
    },
    attributes: {
      orderId: {
        type: "string",
      },
      userId: {
        type: "string",
        required: true,
      },
      products: {
        type: "list",
        items: {
          type: "map",
          properties: {
            productId: {
              type: "string",
            },
            quantity: {
              type: "number",
            },
          },
        },
      },
      totalPrice: {
        type: "number",
      },
      orderDate: {
        type: "string",
      },
      status: {
        type: "string",
      },
    },
    indexes: {
      primary: {
        pk: {
          // highlight-next-line
          field: "pk",
          facets: ["userId"],
        },
        sk: {
          // highlight-next-line
          field: "sk",
          facets: [],
        },
      },
    },
    // add your DocumentClient and TableName as a second parameter
  },
  { client, table: "Orders" }
);

export { Orders };

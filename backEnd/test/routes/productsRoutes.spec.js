import request from "supertest";
import app from "../../server.js";

describe("GET /products", () => {
  it("should respond with status 200 and return all products", async () => {
    const response = await request(app).get("/products");
    expect(response.status);
  });
});
describe("POST /products", () => {
  it("should respond with status 201 and create a new product", async () => {
    const newProductData = {};
    const response = await request(app).post("/products").send(newProductData);
    expect(response.status);
  });
});
describe("DELETE /products/:productId", () => {
  it("should respond with status 200 and remove the specified product", async () => {
    const productId = "coloca aquí el ID del producto a eliminar";
    const response = await request(app).delete(`/products/${productId}`);
    expect(response.status);
  });
});

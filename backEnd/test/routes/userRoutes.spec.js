import request from "supertest";
import app from "../../server.js";

describe("Get /src/api/v1", () => {
    
  it("deberia responder con un estatus 200", async () => {
    const response = await request(app).get("/src/api/v1");
    expect(response.status);
  });
});

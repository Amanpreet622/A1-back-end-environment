import request, { Response } from "supertest";
import { app } from "../src/app";

describe("GET /api/v1/health", () => {
    it("should return a valid health check response", async () => {
        const response: Response = await request(app).get("/api/v1/health");

        expect(response.status).toBe(200);
        expect(response.body.status).toBe("OK");
        expect(response.body.uptime).toEqual(expect.any(Number));
        expect(response.body.timestamp).toEqual(expect.any(String));
        expect(response.body.version).toBe("1.0.0");
    });
});

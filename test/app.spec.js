import "..index";
import supertest from "supertest";
import { espect, expect } from "chai";

describe("GET /user", (_) => {
  it("Testing route", (done) => {
    supertest(request)
      .get("/user")
      .expect(200)
      .expect((response) => {
        expect(response.body.status).to.eql(true);
        expect(response.body.message).to.eql("All correct.");
      })
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});

import request from "supertest";
import app from "../src/app";

test("App", (done) => {
  request(app)
    .get("/ping")
    .expect(200)
    .then((response) => {
      expect(response.body).toEqual("pong");
      done();
    })
    .catch((err) => done(err));
});

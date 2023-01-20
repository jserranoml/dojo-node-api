import { Request, Response } from "express";
import nock from "nock";
import example from "~/controllers/example";

describe("Test my controller", () => {
  it("Should test the external call", async () => {
    const response = { id: 100 };
    nock("http://fakeapi.com").get("/").reply(200, response);

    const req = {} as Request;
    const res = {} as Response;

    const jsonMock = jest.fn();

    res.json = jsonMock;

    await example(req, res);

    expect(jsonMock).toBeCalledWith(response);
  });
});

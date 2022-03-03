import { scoreUpdate } from "./scoringHelper";

const mockedScoreObj = { p1: 0, p2: 0 };

it("should update score properly", () => {
  expect(scoreUpdate(mockedScoreObj, true)).toEqual({ p1: 1, p2: 0 });
  expect(scoreUpdate(mockedScoreObj, false)).toEqual({ p1: 0, p2: 1 });
});

export const scoreUpdate = (score, isP1Winner) => ({
  p1: isP1Winner ? score.p1 + 1 : score.p1,
  p2: isP1Winner ? score.p2 : score.p2 + 1,
});

export const drawResult = () => ({ p1: false, p2: false, draw: true });

export const winnerResult = (isP1Winner) =>
  isP1Winner ? { p1: true, p2: false } : { p1: false, p2: true };

export const defaultScoringState = () => ({
  p1: false,
  p2: false,
  draw: false,
});

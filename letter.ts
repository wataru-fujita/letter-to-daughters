// Written with TypeScript 5.9.3 — 2026

type Daughter = {
  readonly loved: true;
  readonly alone: false;
  readonly burden: "not yours";
};

type Daughters = readonly [Daughter, Daughter];

type When = "not always beside me";
type Where = "always inside my heart";
type Forever = "always";

type Love<TBeloved extends Daughters> = {
  readonly for: TBeloved;
  readonly evenWhen: When;
  readonly stillWhere: Where;
  readonly until: Forever;
};

const daughters = [
  { loved: true, alone: false, burden: "not yours" },
  { loved: true, alone: false, burden: "not yours" },
] as const satisfies Daughters;

const hold = <TBeloved extends Daughters>(
  beloved: TBeloved,
): Love<TBeloved> => ({
  for: beloved,
  evenWhen: "not always beside me",
  stillWhere: "always inside my heart",
  until: "always",
});

const love = hold(daughters);

// Try removing the "//" below.
// love.until = "never";

// Until you can decode this,
// the types will guard what my words could not.

export type WhatAlwaysRemains =
  typeof love["until"];

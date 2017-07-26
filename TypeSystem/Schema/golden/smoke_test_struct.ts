// Autogenerated TypeScript and io-ts types for C5T/Current JSON.
// peerDependencies: io-ts@0.5.1 c5t-current-schema-ts@0.1.0
// hash: b528c6626c40443d
/* tslint:disable */

import * as iots from 'io-ts';
import * as C5TCurrent from 'c5t-current-schema-ts';


export const Primitives_IO = iots.interface({
  // It's the "order" of fields that matters.
  a: C5TCurrent.UInt8_IO,

  // Field descriptions can be set in any order.
  b: C5TCurrent.UInt16_IO,
  c: C5TCurrent.UInt32_IO,
  d: C5TCurrent.UInt64_IO,
  e: C5TCurrent.Int8_IO,
  f: C5TCurrent.Int16_IO,
  g: C5TCurrent.Int32_IO,
  h: C5TCurrent.Int64_IO,
  i: C5TCurrent.Char_IO,
  j: C5TCurrent.String_IO,
  k: C5TCurrent.Float_IO,
  l: C5TCurrent.Double_IO,

  // Multiline
  // descriptions
  // can be used.
  m: C5TCurrent.Bool_IO,
  n: C5TCurrent.Microseconds_IO,
  o: C5TCurrent.Milliseconds_IO,
}, 'Primitives');
export type Primitives = iots.TypeOf<typeof Primitives_IO>;

export const C5TCurrentVector_C5TCurrentString_IO = C5TCurrent.Vector_IO(C5TCurrent.String_IO);
export type C5TCurrentVector_C5TCurrentString = iots.TypeOf<typeof C5TCurrentVector_C5TCurrentString_IO>;

export const C5TCurrentVector_Primitives_IO = C5TCurrent.Vector_IO(Primitives_IO);
export type C5TCurrentVector_Primitives = iots.TypeOf<typeof C5TCurrentVector_Primitives_IO>;

export const C5TCurrentPair_C5TCurrentString_Primitives_IO = C5TCurrent.Pair_IO(C5TCurrent.String_IO, Primitives_IO);
export type C5TCurrentPair_C5TCurrentString_Primitives = iots.TypeOf<typeof C5TCurrentPair_C5TCurrentString_Primitives_IO>;

export const C5TCurrentOptional_Primitives_IO = C5TCurrent.Optional_IO(Primitives_IO);
export type C5TCurrentOptional_Primitives = iots.TypeOf<typeof C5TCurrentOptional_Primitives_IO>;

export const A_IO = iots.interface({
  a: C5TCurrent.Int32_IO,
}, 'A');
export type A = iots.TypeOf<typeof A_IO>;

export const B_IO = iots.intersection([ A_IO, iots.interface({
  b: C5TCurrent.Int32_IO,
}) ], 'B');
export type B = iots.TypeOf<typeof B_IO>;

export const B2_IO = iots.intersection([ A_IO ], 'B2');
export type B2 = iots.TypeOf<typeof B2_IO>;

export const Empty_IO = iots.interface({}, 'Empty');
export type Empty = iots.TypeOf<typeof Empty_IO>;

export const X_IO = iots.interface({
  x: C5TCurrent.Int32_IO,
}, 'X');
export type X = iots.TypeOf<typeof X_IO>;

export const E_IO = C5TCurrent.Enum_IO('E');
export type E = iots.TypeOf<typeof E_IO>;

export const Y_IO = iots.interface({
  e: E_IO,
}, 'Y');
export type Y = iots.TypeOf<typeof Y_IO>;

export const MyFreakingVariant_VariantCase_A_IO = iots.interface({ "A": A_IO, "": iots.union([ iots.undefined, iots.literal("T9206911749438269255") ]), "$": iots.union([ iots.undefined, iots.literal("T9206911749438269255") ]), });
export type MyFreakingVariant_VariantCase_A = iots.TypeOf<typeof MyFreakingVariant_VariantCase_A_IO>;

export const MyFreakingVariant_VariantCase_X_IO = iots.interface({ "X": X_IO, "": iots.union([ iots.undefined, iots.literal("T9209980946934124423") ]), "$": iots.union([ iots.undefined, iots.literal("T9209980946934124423") ]), });
export type MyFreakingVariant_VariantCase_X = iots.TypeOf<typeof MyFreakingVariant_VariantCase_X_IO>;

export const MyFreakingVariant_VariantCase_Y_IO = iots.interface({ "Y": Y_IO, "": iots.union([ iots.undefined, iots.literal("T9208828720332602574") ]), "$": iots.union([ iots.undefined, iots.literal("T9208828720332602574") ]), });
export type MyFreakingVariant_VariantCase_Y = iots.TypeOf<typeof MyFreakingVariant_VariantCase_Y_IO>;

export const MyFreakingVariant_IO = iots.union([
  MyFreakingVariant_VariantCase_A_IO,
  MyFreakingVariant_VariantCase_X_IO,
  MyFreakingVariant_VariantCase_Y_IO,
  iots.null,
], 'MyFreakingVariant');
export type MyFreakingVariant = iots.UnionType<[
  typeof MyFreakingVariant_VariantCase_A_IO,
  typeof MyFreakingVariant_VariantCase_X_IO,
  typeof MyFreakingVariant_VariantCase_Y_IO,
  typeof iots.null
], (
  iots.TypeOf<typeof MyFreakingVariant_VariantCase_A_IO> |
  iots.TypeOf<typeof MyFreakingVariant_VariantCase_X_IO> |
  iots.TypeOf<typeof MyFreakingVariant_VariantCase_Y_IO> |
  iots.TypeOf<typeof iots.null>
)>;

export const C5TCurrentVariant_T9227782347108675041_VariantCase_A_IO = iots.interface({ "A": A_IO, "": iots.union([ iots.undefined, iots.literal("T9206911749438269255") ]), "$": iots.union([ iots.undefined, iots.literal("T9206911749438269255") ]), });
export type C5TCurrentVariant_T9227782347108675041_VariantCase_A = iots.TypeOf<typeof C5TCurrentVariant_T9227782347108675041_VariantCase_A_IO>;

export const C5TCurrentVariant_T9227782347108675041_VariantCase_X_IO = iots.interface({ "X": X_IO, "": iots.union([ iots.undefined, iots.literal("T9209980946934124423") ]), "$": iots.union([ iots.undefined, iots.literal("T9209980946934124423") ]), });
export type C5TCurrentVariant_T9227782347108675041_VariantCase_X = iots.TypeOf<typeof C5TCurrentVariant_T9227782347108675041_VariantCase_X_IO>;

export const C5TCurrentVariant_T9227782347108675041_VariantCase_Y_IO = iots.interface({ "Y": Y_IO, "": iots.union([ iots.undefined, iots.literal("T9208828720332602574") ]), "$": iots.union([ iots.undefined, iots.literal("T9208828720332602574") ]), });
export type C5TCurrentVariant_T9227782347108675041_VariantCase_Y = iots.TypeOf<typeof C5TCurrentVariant_T9227782347108675041_VariantCase_Y_IO>;

export const C5TCurrentVariant_T9227782347108675041_IO = iots.union([
  C5TCurrentVariant_T9227782347108675041_VariantCase_A_IO,
  C5TCurrentVariant_T9227782347108675041_VariantCase_X_IO,
  C5TCurrentVariant_T9227782347108675041_VariantCase_Y_IO,
  iots.null,
], 'C5TCurrentVariant_T9227782347108675041');
export type C5TCurrentVariant_T9227782347108675041 = iots.UnionType<[
  typeof C5TCurrentVariant_T9227782347108675041_VariantCase_A_IO,
  typeof C5TCurrentVariant_T9227782347108675041_VariantCase_X_IO,
  typeof C5TCurrentVariant_T9227782347108675041_VariantCase_Y_IO,
  typeof iots.null
], (
  iots.TypeOf<typeof C5TCurrentVariant_T9227782347108675041_VariantCase_A_IO> |
  iots.TypeOf<typeof C5TCurrentVariant_T9227782347108675041_VariantCase_X_IO> |
  iots.TypeOf<typeof C5TCurrentVariant_T9227782347108675041_VariantCase_Y_IO> |
  iots.TypeOf<typeof iots.null>
)>;

export const C_IO = iots.interface({
  e: Empty_IO,
  c: MyFreakingVariant_IO,
  d: C5TCurrentVariant_T9227782347108675041_IO,
}, 'C');
export type C = iots.TypeOf<typeof C_IO>;

export const C5TCurrentVariant_T9228482442669086788_VariantCase_A_IO = iots.interface({ "A": A_IO, "": iots.union([ iots.undefined, iots.literal("T9206911749438269255") ]), "$": iots.union([ iots.undefined, iots.literal("T9206911749438269255") ]), });
export type C5TCurrentVariant_T9228482442669086788_VariantCase_A = iots.TypeOf<typeof C5TCurrentVariant_T9228482442669086788_VariantCase_A_IO>;

export const C5TCurrentVariant_T9228482442669086788_VariantCase_B_IO = iots.interface({ "B": B_IO, "": iots.union([ iots.undefined, iots.literal("T9200817599233955266") ]), "$": iots.union([ iots.undefined, iots.literal("T9200817599233955266") ]), });
export type C5TCurrentVariant_T9228482442669086788_VariantCase_B = iots.TypeOf<typeof C5TCurrentVariant_T9228482442669086788_VariantCase_B_IO>;

export const C5TCurrentVariant_T9228482442669086788_VariantCase_B2_IO = iots.interface({ "B2": B2_IO, "": iots.union([ iots.undefined, iots.literal("T9209827283478105543") ]), "$": iots.union([ iots.undefined, iots.literal("T9209827283478105543") ]), });
export type C5TCurrentVariant_T9228482442669086788_VariantCase_B2 = iots.TypeOf<typeof C5TCurrentVariant_T9228482442669086788_VariantCase_B2_IO>;

export const C5TCurrentVariant_T9228482442669086788_VariantCase_C_IO = iots.interface({ "C": C_IO, "": iots.union([ iots.undefined, iots.literal("T9202971611369570493") ]), "$": iots.union([ iots.undefined, iots.literal("T9202971611369570493") ]), });
export type C5TCurrentVariant_T9228482442669086788_VariantCase_C = iots.TypeOf<typeof C5TCurrentVariant_T9228482442669086788_VariantCase_C_IO>;

export const C5TCurrentVariant_T9228482442669086788_VariantCase_Empty_IO = iots.interface({ "Empty": Empty_IO, "": iots.union([ iots.undefined, iots.literal("T9200000002835747520") ]), "$": iots.union([ iots.undefined, iots.literal("T9200000002835747520") ]), });
export type C5TCurrentVariant_T9228482442669086788_VariantCase_Empty = iots.TypeOf<typeof C5TCurrentVariant_T9228482442669086788_VariantCase_Empty_IO>;

export const C5TCurrentVariant_T9228482442669086788_IO = iots.union([
  C5TCurrentVariant_T9228482442669086788_VariantCase_A_IO,
  C5TCurrentVariant_T9228482442669086788_VariantCase_B_IO,
  C5TCurrentVariant_T9228482442669086788_VariantCase_B2_IO,
  C5TCurrentVariant_T9228482442669086788_VariantCase_C_IO,
  C5TCurrentVariant_T9228482442669086788_VariantCase_Empty_IO,
  iots.null,
], 'C5TCurrentVariant_T9228482442669086788');
export type C5TCurrentVariant_T9228482442669086788 = iots.UnionType<[
  typeof C5TCurrentVariant_T9228482442669086788_VariantCase_A_IO,
  typeof C5TCurrentVariant_T9228482442669086788_VariantCase_B_IO,
  typeof C5TCurrentVariant_T9228482442669086788_VariantCase_B2_IO,
  typeof C5TCurrentVariant_T9228482442669086788_VariantCase_C_IO,
  typeof C5TCurrentVariant_T9228482442669086788_VariantCase_Empty_IO,
  typeof iots.null
], (
  iots.TypeOf<typeof C5TCurrentVariant_T9228482442669086788_VariantCase_A_IO> |
  iots.TypeOf<typeof C5TCurrentVariant_T9228482442669086788_VariantCase_B_IO> |
  iots.TypeOf<typeof C5TCurrentVariant_T9228482442669086788_VariantCase_B2_IO> |
  iots.TypeOf<typeof C5TCurrentVariant_T9228482442669086788_VariantCase_C_IO> |
  iots.TypeOf<typeof C5TCurrentVariant_T9228482442669086788_VariantCase_Empty_IO> |
  iots.TypeOf<typeof iots.null>
)>;

export const Templated_T9209980946934124423_IO = iots.interface({
  foo: C5TCurrent.Int32_IO,
  bar: X_IO,
}, 'Templated_T9209980946934124423');
export type Templated_T9209980946934124423 = iots.TypeOf<typeof Templated_T9209980946934124423_IO>;

export const Templated_T9227782344077896555_IO = iots.interface({
  foo: C5TCurrent.Int32_IO,
  bar: MyFreakingVariant_IO,
}, 'Templated_T9227782344077896555');
export type Templated_T9227782344077896555 = iots.TypeOf<typeof Templated_T9227782344077896555_IO>;

export const TemplatedInheriting_T9200000002835747520_IO = iots.intersection([ A_IO, iots.interface({
  baz: C5TCurrent.String_IO,
  meh: Empty_IO,
}) ], 'TemplatedInheriting_T9200000002835747520');
export type TemplatedInheriting_T9200000002835747520 = iots.TypeOf<typeof TemplatedInheriting_T9200000002835747520_IO>;

export const Templated_T9209626390174323094_IO = iots.interface({
  foo: C5TCurrent.Int32_IO,
  bar: TemplatedInheriting_T9200000002835747520_IO,
}, 'Templated_T9209626390174323094');
export type Templated_T9209626390174323094 = iots.TypeOf<typeof Templated_T9209626390174323094_IO>;

export const TemplatedInheriting_T9209980946934124423_IO = iots.intersection([ A_IO, iots.interface({
  baz: C5TCurrent.String_IO,
  meh: X_IO,
}) ], 'TemplatedInheriting_T9209980946934124423');
export type TemplatedInheriting_T9209980946934124423 = iots.TypeOf<typeof TemplatedInheriting_T9209980946934124423_IO>;

export const TemplatedInheriting_T9227782344077896555_IO = iots.intersection([ A_IO, iots.interface({
  baz: C5TCurrent.String_IO,
  meh: MyFreakingVariant_IO,
}) ], 'TemplatedInheriting_T9227782344077896555');
export type TemplatedInheriting_T9227782344077896555 = iots.TypeOf<typeof TemplatedInheriting_T9227782344077896555_IO>;

export const Templated_T9200000002835747520_IO = iots.interface({
  foo: C5TCurrent.Int32_IO,
  bar: Empty_IO,
}, 'Templated_T9200000002835747520');
export type Templated_T9200000002835747520 = iots.TypeOf<typeof Templated_T9200000002835747520_IO>;

export const TemplatedInheriting_T9201673071807149456_IO = iots.intersection([ A_IO, iots.interface({
  baz: C5TCurrent.String_IO,
  meh: Templated_T9200000002835747520_IO,
}) ], 'TemplatedInheriting_T9201673071807149456');
export type TemplatedInheriting_T9201673071807149456 = iots.TypeOf<typeof TemplatedInheriting_T9201673071807149456_IO>;

export const C5TCurrentOptional_C5TCurrentString_IO = C5TCurrent.Optional_IO(C5TCurrent.String_IO);
export type C5TCurrentOptional_C5TCurrentString = iots.TypeOf<typeof C5TCurrentOptional_C5TCurrentString_IO>;

export const C5TCurrentOptional_C5TCurrentInt32_IO = C5TCurrent.Optional_IO(C5TCurrent.Int32_IO);
export type C5TCurrentOptional_C5TCurrentInt32 = iots.TypeOf<typeof C5TCurrentOptional_C5TCurrentInt32_IO>;

export const C5TCurrentOptional_C5TCurrentVector_C5TCurrentString_IO = C5TCurrent.Optional_IO(C5TCurrentVector_C5TCurrentString_IO);
export type C5TCurrentOptional_C5TCurrentVector_C5TCurrentString = iots.TypeOf<typeof C5TCurrentOptional_C5TCurrentVector_C5TCurrentString_IO>;

export const C5TCurrentVector_C5TCurrentInt32_IO = C5TCurrent.Vector_IO(C5TCurrent.Int32_IO);
export type C5TCurrentVector_C5TCurrentInt32 = iots.TypeOf<typeof C5TCurrentVector_C5TCurrentInt32_IO>;

export const C5TCurrentOptional_C5TCurrentVector_C5TCurrentInt32_IO = C5TCurrent.Optional_IO(C5TCurrentVector_C5TCurrentInt32_IO);
export type C5TCurrentOptional_C5TCurrentVector_C5TCurrentInt32 = iots.TypeOf<typeof C5TCurrentOptional_C5TCurrentVector_C5TCurrentInt32_IO>;

export const C5TCurrentVector_A_IO = C5TCurrent.Vector_IO(A_IO);
export type C5TCurrentVector_A = iots.TypeOf<typeof C5TCurrentVector_A_IO>;

export const C5TCurrentOptional_C5TCurrentVector_A_IO = C5TCurrent.Optional_IO(C5TCurrentVector_A_IO);
export type C5TCurrentOptional_C5TCurrentVector_A = iots.TypeOf<typeof C5TCurrentOptional_C5TCurrentVector_A_IO>;

export const C5TCurrentOptional_A_IO = C5TCurrent.Optional_IO(A_IO);
export type C5TCurrentOptional_A = iots.TypeOf<typeof C5TCurrentOptional_A_IO>;

export const C5TCurrentPair_C5TCurrentString_C5TCurrentOptional_A_IO = C5TCurrent.Pair_IO(C5TCurrent.String_IO, C5TCurrentOptional_A_IO);
export type C5TCurrentPair_C5TCurrentString_C5TCurrentOptional_A = iots.TypeOf<typeof C5TCurrentPair_C5TCurrentString_C5TCurrentOptional_A_IO>;

export const C5TCurrentMap_C5TCurrentString_C5TCurrentOptional_A_IO = C5TCurrent.PrimitiveMap_IO(C5TCurrentOptional_A_IO);
export type C5TCurrentMap_C5TCurrentString_C5TCurrentOptional_A = iots.TypeOf<typeof C5TCurrentMap_C5TCurrentString_C5TCurrentOptional_A_IO>;

export const TrickyEvolutionCases_IO = iots.interface({
  o1: C5TCurrentOptional_C5TCurrentString_IO,
  o2: C5TCurrentOptional_C5TCurrentInt32_IO,
  o3: C5TCurrentOptional_C5TCurrentVector_C5TCurrentString_IO,
  o4: C5TCurrentOptional_C5TCurrentVector_C5TCurrentInt32_IO,
  o5: C5TCurrentOptional_C5TCurrentVector_A_IO,
  o6: C5TCurrentPair_C5TCurrentString_C5TCurrentOptional_A_IO,
  o7: C5TCurrentMap_C5TCurrentString_C5TCurrentOptional_A_IO,
}, 'TrickyEvolutionCases');
export type TrickyEvolutionCases = iots.TypeOf<typeof TrickyEvolutionCases_IO>;

export const FullTest_IO = iots.interface({
  // A structure with a lot of primitive types.
  primitives: Primitives_IO,
  v1: C5TCurrentVector_C5TCurrentString_IO,
  v2: C5TCurrentVector_Primitives_IO,
  p: C5TCurrentPair_C5TCurrentString_Primitives_IO,
  o: C5TCurrentOptional_Primitives_IO,

  // Field | descriptions | FTW !
  q: C5TCurrentVariant_T9228482442669086788_IO,
  w1: Templated_T9209980946934124423_IO,
  w2: Templated_T9227782344077896555_IO,
  w3: Templated_T9209626390174323094_IO,
  w4: TemplatedInheriting_T9209980946934124423_IO,
  w5: TemplatedInheriting_T9227782344077896555_IO,
  w6: TemplatedInheriting_T9201673071807149456_IO,
  tsc: TrickyEvolutionCases_IO,
}, 'FullTest');
export type FullTest = iots.TypeOf<typeof FullTest_IO>;

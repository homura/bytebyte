import {
  createFixedStruct,
  Field,
  formatByteLike,
  I128BE,
  I128LE,
  I16BE,
  I16LE,
  I32BE,
  I32LE,
  I64BE,
  I64LE,
  I8,
  U128BE,
  U128LE,
  U16BE,
  U16LE,
  U32BE,
  U32LE,
  U64BE,
  U64LE,
  U8,
} from "easy-byte";

const FixedNumeric = {
  I8,
  U8,
  I16BE,
  I16LE,
  U16BE,
  U16LE,
  I32BE,
  I32LE,
  U32BE,
  U32LE,
  I64LE,
  I64BE,
  U64LE,
  U64BE,
  I128BE,
  I128LE,
  U128BE,
  U128LE,
};

type Input =
  | "I8"
  | "U8"
  | "I16BE"
  | "I16LE"
  | "U16BE"
  | "U16LE"
  | "I32BE"
  | "I32LE"
  | "U32BE"
  | "U32LE"
  | "I64LE"
  | "I64BE"
  | "U64LE"
  | "U64BE"
  | "I128BE"
  | "I128LE"
  | "U128BE"
  | "U128LE"
  | string;

const Bytes: (size: number, le?: boolean) => Field<string> = (size, le) => {
  return {
    byteWidth: size,
    read: (buf, offset = 0) =>
      formatByteLike(buf.slice(offset, offset + size), { le }),
    write: (buf, val, offset = 0) =>
      buf.write(formatByteLike(val, { le, convertEndian: le }), offset, "hex"),
  };
};

type FixedStruct = ReturnType<typeof createFixedStruct>;

export function inputToField(input: Input): Field<unknown> {
  // @ts-ignore
  if (FixedNumeric[input]) return FixedNumeric[input];

  const matched = input.match(/(Byte)(\d+)(BE|LE)?/);
  if (!matched) throw new Error(`the input ${input} is not valid`);

  const [, , size, beOrLe] = matched;
  // @ts-ignore
  return Bytes(Number(size), beOrLe === "LE");
}

export function createStruct(
  inputs: ({ name: string; type: Input } | Input)[]
): FixedStruct {
  return inputs.reduce<FixedStruct>((struct, input, i) => {
    const name = typeof input === "string" ? String(i) : input.name;
    const field = typeof input === "string" ? input : input.type;
    return struct.field(name, inputToField(field));
  }, createFixedStruct());
}

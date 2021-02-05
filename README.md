# Byte Byte

## Usage

### Supported Types

```
  | 'I8'
  | 'U8'
  | 'I16BE'
  | 'I16LE'
  | 'U16BE'
  | 'U16LE'
  | 'I32BE'
  | 'I32LE'
  | 'U32BE'
  | 'U32LE'
  | 'I64LE'
  | 'I64BE'
  | 'U64LE'
  | 'U64BE'
  | 'I128BE'
  | 'I128LE'
  | 'U128BE'
  | 'U128LE'
  | 'Byte${number}(BE|LE)';
```

### Supported Schema Syntax Example

```json
["Byte32", "U128LE", "U64LE"]...
```

```json
[
  {
    "name": "some_hash_20",
    "type": "Byte20"
  },
  {
    "name": "some_u128",
    "type": "U128LE"
  }
]
```

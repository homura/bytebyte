import { Col, Form, Input, Row } from "antd";
import "antd/dist/antd.dark.css";
import { toBuffer } from "easy-byte";
import React, { useMemo, useState } from "react";
import JSONTree from "react-json-tree";
import { createStruct } from "./analyze";

function App() {
  const [schema, setSchema] = useState<string>(
    decodeURIComponent(window.location.search.slice(1))
  );
  const [bytes, setBytes] = useState<string>("");

  const struct = useMemo(() => {
    try {
      const struct = JSON.parse(schema);
      return createStruct(struct);
    } catch (e) {
      return null;
    }
  }, [schema]);

  const decoded = useMemo(() => {
    if (!bytes || !struct) return null;
    const entries = Object.entries(struct.decode(toBuffer(bytes))).reduce(
      (entries, [key, val]) => {
        // @ts-ignore
        entries.push([key, String(val)]);
        return entries;
      },
      []
    );
    return Object.fromEntries(entries);
  }, [bytes, struct]);

  return (
    <Row gutter={32}>
      <Col xs={24} md={12} style={{ padding: "32px" }}>
        <Form size="large" layout="vertical">
          <Form.Item label="schema">
            <Input.TextArea
              value={schema}
              onChange={(e) => setSchema(e.target.value)}
            />
          </Form.Item>

          <Form.Item label="input">
            <Input.TextArea
              value={bytes}
              onChange={(e) => setBytes(e.target.value)}
            />
          </Form.Item>
        </Form>
      </Col>
      <Col xs={24} md={12} style={{ padding: "24px" }}>
        <JSONTree data={decoded} />
      </Col>
    </Row>
  );
}

export default App;

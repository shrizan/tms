import { Col } from "antd";

export default function FormLayout({ children }: React.PropsWithChildren) {
  return (
    <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 16 }}>
      <div style={{ border: "1px solid #dbdbdb", padding: 10, borderRadius: 10 }}>
        {children}
      </div>
    </Col>
  );
}
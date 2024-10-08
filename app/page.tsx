import { Button, Row, Space } from "antd";

export default function Home() {
  return (
    <Row>
      <Space direction="horizontal" size={"large"}>
        <Button type="primary" href="/">Home</Button>
        <Button type="primary" href="/account/login">Login</Button>
        <Button type="primary" href="/admin/dashboard">Dashboard</Button>
      </Space>
    </Row>
  );
}
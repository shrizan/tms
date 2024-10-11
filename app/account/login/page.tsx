import { Card, Col, Row, Space } from "antd";
import Link from "next/link";
import LoginForm from "./components/LoginForm";

export default function Login() {
    return (
        <Row style={{ minHeight: "90vh" }} align={"middle"}>
            <Col lg={{ span: 6, offset: 9 }} md={{ span: 6, offset: 9 }} sm={{ span: 12, offset: 6 }} xs={{ span: 24 }}>
                <Card title={<h3 style={{ textAlign: "center" }}>COMPANY LOGO</h3>} style={{ paddingTop: 20, paddingBottom: 20 }}>
                    <Space direction="vertical" size="large" style={{ display: "flex" }}>
                        <p style={{ textAlign: "center", fontWeight: 600, textTransform: "uppercase" }}>User Login</p>

                        {/* LOGIN FORM SECTION */}
                        <LoginForm />

                        {/* FOOTER SECTION */}
                        <Row justify={"space-between"} align={"bottom"}>
                            <Link href={"/forgot-password"}>Forgot Password</Link>
                            <Link href={"/forgot-password"}>Sign Up</Link>
                        </Row>
                    </Space>
                </Card>
            </Col>
        </Row >
    );
}
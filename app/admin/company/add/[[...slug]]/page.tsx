import { Metadata } from "next";
import CompanyTypeForm from "./../../components/CompanyTypeForm";
import { Col } from "antd";
import CompanyWrapper from "../../components/CompanyWrapper";

export const metatadata: Metadata = {
  title: "Create or Update company"
}

export default async function CompanyCreate({ params }: {
  params: Promise<{ slug?: string[] }>
}) {
  // 1. first add

  const { slug } = await params

  if (!slug) {
    return (
      <Col lg={{ span: 6 }} md={{ span: 8 }} xs={{ span: 24 }}>
        <CompanyTypeForm />
      </Col>
    );
  }

  else {
    // edit or continue editing form
    return (
      <CompanyWrapper companyType={slug[0]} />
    );
  }
}
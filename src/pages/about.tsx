import React from "react";
import Page from "@/components/Page";
import Layout from "@/layouts";

About.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

export default function About() {
  return (
    <Page title="Hakkımızda">
      <div>Hakkimizda Sayfasi</div>
    </Page>
  );
}

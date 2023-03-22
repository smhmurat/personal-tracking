import Page from "@/components/Page";
import Layout from "@/layouts";
import Brands from "@/sections/Brands";
import GetApp from "@/sections/GetApp";
import Hero from "@/sections/Hero";
import HowItWorks from "@/sections/HowItWorks";
import Stats from "@/sections/Stats";
import Testimonials from "@/sections/Testimonials";

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

export default function HomePage() {
  return (
    <Page title="Anasayfa">
      <Hero />
      <Stats />
      <Brands />
      <HowItWorks />
      <Testimonials />
      <GetApp />
    </Page>
  );
}

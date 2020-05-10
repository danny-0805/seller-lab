import React from "react"

import Layout from "~components/Layout/en"
import SEO from "~components/seo"
import HeaderSection from "~components/HeaderSection"
import Join from "~components/Join"
import WhySell from "~components/WhySell"
import HowSellingWorks from "~components/HowSellingWorks"
import Testimonials from "~components/Testimonials"
import Partners from "~components/Partners"
import DownloadSection from "~components/DownloadSection"

const IndexPage = () => (
  <Layout isHome={true}>
    <SEO title="Home" />
    <HeaderSection />
    <Join />
    <WhySell />
    <HowSellingWorks />
    <Testimonials />
    <Partners />
    <DownloadSection />
  </Layout>
)

export default IndexPage

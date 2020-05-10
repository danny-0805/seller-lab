import React from "react"

import Layout from "~components/Layout/en"
import SEO from "~components/seo"
import VendorRegistForm from "~components/VendorRegistForm"

const VendorRegistrationPage = () => (
  <Layout>
    <SEO title="Vendor Registration" />
    <VendorRegistForm />
  </Layout>
)

export default VendorRegistrationPage

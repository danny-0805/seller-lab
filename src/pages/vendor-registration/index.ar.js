import React from "react"

import Layout from "~components/Layout/ar"
import SEO from "~components/seo"
import VendorRegistForm from "~components/VendorRegistForm"

const VendorRegistrationPage = () => (
  <Layout>
    <SEO title="Vendor Registration" lang="ar" />
    <VendorRegistForm />
  </Layout>
)

export default VendorRegistrationPage

import React from "react"

import Layout from "~components/Layout/ar"
import SEO from "~components/seo"
import LoginForm from "~components/LoginForm"

const LoginPage = () => (
  <Layout isLogin={true}>
    <SEO title="Login" lang="ar" />
    <LoginForm />
  </Layout>
)

export default LoginPage

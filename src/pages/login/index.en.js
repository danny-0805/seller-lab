import React from "react"

import Layout from "~components/Layout/en"
import SEO from "~components/seo"
import LoginForm from "~components/LoginForm"

const LoginPage = () => (
  <Layout isLogin={true}>
    <SEO title="Login" />
    <LoginForm />
  </Layout>
)

export default LoginPage

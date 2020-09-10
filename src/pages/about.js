import React from 'react'
import { Link } from 'gatsby'

import { ViewportProvider, viewportContext } from '../context/viewportContext'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Gradient from '../components/gradient'

const AboutPage = () => (
  <ViewportProvider>
  <Layout>
    <SEO title="About" />
    <h1>What's this all about?</h1>
    <p>Thoughts, ideas, reminders to myself on things that I have learnt while exploring Gatsby. Occasional detours into other dev topics or subjects I fnd interesting.</p>
    <Gradient />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  </ViewportProvider>
)

export default AboutPage

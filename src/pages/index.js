import * as React from "react"
import { graphql } from "gatsby"

import { Layout, Seo } from "../components"
import Hero from "../components/Hero"
import News from "../components/News"

const IndexPage = (props) => {
  console.log(props)
  let heroContent = props && props.data && props.data.featuredPost && props.data.featuredPost.nodes && props.data.featuredPost.nodes[0] && props.data.featuredPost.nodes[0]
  let heroImage = props && props.data && props.data.featuredImage && props.data.featuredImage.nodes && props.data.featuredImage.nodes[0] && props.data.featuredImage.nodes[0]

  return(
    <Layout>
      <Seo title="Inicio" />
      <Hero content={heroContent} image={heroImage} />
      <News/>
    </Layout>
  )
}


export const query = graphql`
query HomePosts {
  featuredPost: allGraphCmsPost(limit: 1, sort: {fields: publishedAt, order: DESC}) {
    nodes {
      ...PostInfo
    }
  }
  allGraphCmsPost(skip: 1, limit: 4, sort: {fields: publishedAt, order: DESC}) {
    nodes {
      ...PostInfo
    }
  }
  featuredImage: allGraphCmsAsset(
    limit: 1
    sort: {fields: publishedAt, order: DESC}
  ) {
    nodes {
      ...PostImage
    }
  }
  allGraphCmsAsset(skip: 1, limit: 4, sort: {fields: publishedAt, order: DESC}) {
    nodes {
      ...PostImage
    }
  }
}

fragment PostInfo on GraphCMS_Post {
  id
  title
  slug
  cover {
    gatsbyImageData(layout: FULL_WIDTH)
  }
  seo {
    title
    description
    image {
      url
    }
  }
  publishedAt
}

fragment PostImage on GraphCMS_Asset {
  gatsbyImageData(layout: FULL_WIDTH)
}
`

export default IndexPage

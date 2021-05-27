import * as React from "react"
import { graphql } from "gatsby"

import { Layout, Seo } from "../components"
import Hero from "../components/Hero"
import News from "../components/News"

const IndexPage = (props) => {
  let heroContent = props && props.data && props.data.featuredPost && props.data.featuredPost.nodes && props.data.featuredPost.nodes[0] && props.data.featuredPost.nodes[0]
  let heroImage = props && props.data && props.data.featuredImage && props.data.featuredImage.nodes && props.data.featuredImage.nodes[0] && props.data.featuredImage.nodes[0]
  let newsContent = props && props.data && props.data.allGraphCmsPost && props.data.allGraphCmsPost.nodes && props.data.allGraphCmsPost.nodes
  let newsImage = props && props.data && props.data.allGraphCmsAsset && props.data.allGraphCmsAsset.nodes && props.data.allGraphCmsAsset.nodes

  return(
    <Layout>
      <Seo title="Inicio" />
      <Hero content={heroContent} image={heroImage} />
      <News content={newsContent} image={newsImage}/>
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
  allGraphCmsPost(skip: 1, limit: 5, sort: {fields: publishedAt, order: DESC}) {
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
  allGraphCmsAsset(skip: 1, limit: 5, sort: {fields: publishedAt, order: DESC}) {
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

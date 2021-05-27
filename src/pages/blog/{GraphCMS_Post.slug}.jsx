import * as React from 'react'
import { Layout, Seo } from '../../components'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { formatDate } from '../../utils'
import ReactMarkdown from 'react-markdown'

const PostLayout = ({ data: {graphCmsPost: post, cover} }) => {

    console.log(post, "post")

    const shareImage = post.seo.image ? post.seo.image.url : post.cover.url || null

    return (
        <Layout>
            <Seo title={ post.seo.title } description={ post.seo.description } image={ shareImage }/>
            <div className="container px-5 mx-auto py-4 lg:px-32">
                <GatsbyImage image={ getImage(cover) } alt={post.seo.title} className="h-40 lg:h-64"/>
                <section className="mt-10 max-w-xl mx-auto" >
                    <h1 className="font-bold text-4xl">{post.title}</h1>
                    <div className="mt-5 flex justify-between">
                        <p className="font-bold">Esrito por MuaMua</p>
                        <p className="text-whitegray">{formatDate(post.publishedAt, "EEEE, LLLL yyyy")}</p>

                    </div>
                    <hr className="my-8 border-gray-400"/>
                    <div className="max-w-full prose">
                        <ReactMarkdown>
                            {post.content}
                        </ReactMarkdown>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query Post($id: String!, $slug: String!){
        graphCmsPost(slug: {eq: $slug}){
            id
            title
            slug
            cover {
                url
            }
            category
            content
            seo {
                title
                description
                image {
                    url
                }
            }
            publishedAt
        }
        cover: graphCmsAsset(coverPost: { elemMatch: {id:{eq: $id}}}){
            gatsbyImageData(layout: FULL_WIDTH)
        }
    }
`

export default PostLayout
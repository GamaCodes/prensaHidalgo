import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { formatDate } from '../utils'
import { Link } from "gatsby"

export default function Hero(props) {
    const {id, title, slug, publishedAt} = props.content
    const image = props.image

    return (
        <div className="hero-h py-4 grid items-center">
            <section className="h-full py-4 md:flex justify-around items-center border-l-8 border-r-8 md:border-r-0 border-primary">
                <section className="px-4 py-8 md:py-0 md:w-1/3 prose">
                <h2 className="">{title}</h2>
                <p className="text-right">{formatDate(publishedAt, "EEEE, LLLL yyyy")}</p>
                <Link to={`/blog/${slug}`} className="bg-primary text-white px-32 md:px-12 py-3 rounded-lg button-ml md:ml-0">Ver más</Link> 
                </section>
                <section className="pt-8 md:pt-0 w-10/12 md:w-6/12 border-b-6 border-whiteblue justify-center mx-auto">
                    <GatsbyImage image={ getImage(image) } alt={title}/>
                </section>
            </section>
        </div>
    )
}

import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { formatDate } from '../utils'
import { Link } from "gatsby"

export default function News(props) {
    const {id, title, slug, publishedAt} = props.content
    const image = props.image

    console.log(props.content)
    return (
        <div className="h-screen bg-primary text-white flex justify-center">
           <div>
                <figure className="image h-container-lg rounded-lg">
                    <figcaption className="image__caption image__caption--slide-up"><span className="caption__title px-4">{props.content[0].title}</span>{formatDate(props.content[0].publishedAt, "EEEE, LLLL yyyy")}</figcaption>
                    <section className="pt-8 md:pt-0 w-80 border-b-6 border-whiteblue bg-white img-container-lg">
                        <GatsbyImage image={ getImage(image[0]) } alt={title} className="img-container-img"/>
                    </section>
                </figure>
           </div>
            <div>
                <div>
                    <figure className="image h-56 rounded-lg">
                        <figcaption className="image__caption image__caption--slide-up"><span className="caption__title px-4">{props.content[1].title}</span>{formatDate(props.content[1].publishedAt, "EEEE, LLLL yyyy")}</figcaption>
                        <section className="pt-8 md:pt-0 w-80 border-b-6 border-whiteblue bg-white img-container">
                            <GatsbyImage image={ getImage(image[1]) } alt={title} className="img-container-img"/>
                        </section>
                    </figure>
                    <figure className="image h-56 rounded-lg">
                        <figcaption className="image__caption image__caption--slide-up"><span className="caption__title px-4">{props.content[2].title}</span>{formatDate(props.content[2].publishedAt, "EEEE, LLLL yyyy")}</figcaption>
                        <section className="pt-8 md:pt-0 w-80 border-b-6 border-whiteblue bg-white img-container">
                            <GatsbyImage image={ getImage(image[2]) } alt={title} className="img-container-img"/>
                        </section>
                    </figure>
                </div>
                <div>
                    <figure className="image h-56 rounded-lg">
                        <figcaption className="image__caption image__caption--slide-up"><span className="caption__title px-4">{props.content[3].title}</span>{formatDate(props.content[3].publishedAt, "EEEE, LLLL yyyy")}</figcaption>
                        <section className="pt-8 md:pt-0 w-80 border-b-6 border-whiteblue bg-white img-container">
                            <GatsbyImage image={ getImage(image[3]) } alt={title} className="img-container-img"/>
                        </section>
                    </figure>
                    <figure className="image h-56 rounded-lg">
                        <figcaption className="image__caption image__caption--slide-up"><span className="caption__title px-4">{props.content[4].title}</span>{formatDate(props.content[4].publishedAt, "EEEE, LLLL yyyy")}</figcaption>
                        <section className="pt-8 md:pt-0 w-80 border-b-6 border-whiteblue bg-white img-container">
                            <GatsbyImage image={ getImage(image[4]) } alt={title} className="img-container-img"/>
                        </section>                
                    </figure>
                </div>
            </div>

        </div>
    )
}

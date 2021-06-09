import React from 'react'
import Fade from 'react-reveal/Fade'

export const CardExperience = ({ title = "title1", post = "post", duration = "duration", description = "description", fade }) => {
    if (fade === "right") {
        return (
            <Fade right>
                <div className="experience__container">
                    <div className="experience__line-horizontal" />
                    <div className="experience__card">
                        <h1 className="experience__card-title">{title}</h1>
                        <h1 className="experience__card-title">{post}</h1>
                        <h1 className="experience__card-title">{duration}</h1>
                        <p className="experience__card-description"> {description}</p>
                    </div>
                </div>

            </Fade>)
    } else if (fade === "left") {
        return (
            <Fade left>
                <div className="experience__container">
                    <div className="experience__card">
                        <h1 className="experience__card-title">{title}</h1>
                        <h1 className="experience__card-title">{post}</h1>
                        <h1 className="experience__card-title">{duration}</h1>
                        <p className="experience__card-description"> {description}</p>
                    </div>
                    <div className="experience__line-horizontal" />
                </div>

            </Fade>)
    } else {
        return (
            <div className="experience__card">
                <h1 className="experience__card-title">{title}</h1>
                <h1 className="experience__card-title">{post}</h1>
                <h1 className="experience__card-title">{duration}</h1>
                <p className="experience__card-description"> {description}</p>
            </div>

        )
    }

}
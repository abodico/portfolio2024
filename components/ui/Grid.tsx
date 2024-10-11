import React from "react"
import { BentoGrid, BentoGridItem } from "./BentoGrid"
import { gridItems } from "@/data"

const Grid = () => {
    return (
        <section id="about">
            <BentoGrid>
                {gridItems.map(
                    ({
                        id,
                        title,
                        description,
                        className,
                        img,
                        imgClassName,
                        titleClassName,
                        spareImg,
                    }: {
                        id: number
                        title: string
                        description: string
                        className: string
                        img: string
                        imgClassName: string
                        titleClassName: string
                        spareImg: string
                    }) => (
                        <BentoGridItem
                            key={id}
                            id={id}
                            title={title}
                            description={description}
                            className={className}
                            img={img}
                            imgClassName={imgClassName}
                            titleClassName={titleClassName}
                            spareImg={spareImg}
                        />
                    )
                )}
            </BentoGrid>
        </section>
    )
}

export default Grid

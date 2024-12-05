import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/Bento-Grid";

import { gridItems } from "@/data";

export function Grid() {
    return (
        <BentoGrid className="max-w-7xl mx-auto relative">
            {gridItems.map(({ id, title, description, img, spareImg }) => (
                <BentoGridItem
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    img={img}
                    spareImg={spareImg}
                    className={id === 4 || id === 7 ? "md:col-span-2" : ""}
                />
            ))}
        </BentoGrid>
    );
}


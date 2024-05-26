import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import {
    KeyboardArrowRightOutlined,
    KeyboardArrowLeftOutlined,
} from "@mui/icons-material";



const responsive = {
    0: { items: 1 },
    400: { items: 1.3 },
    550: { items: 2 },
    720: { items: 3 },
    1024: { items: 5 },
};

const HomeSectionCarousel = ({ data, sectionName }) => {
    const [activeIndex, setActiveIndex] = useState(0);


    const items = data.slice(0, 11)
        .map((item) => <HomeSectionCard product={item} />);

    return (
        <div className=" px-4 lg:px-8">
            <h3 className="font-extrabold text-2xl text-gray-800 py-5">{sectionName}</h3>
            <div className="relative p-5 ">
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    disableSlideInfo
                    responsive={responsive}
                    disableDotsControls
                    activeIndex={activeIndex}
                />

                {/* NEXT BUTTON */}
                {activeIndex !== items.length - 5 && <Button
                    className="z-50 bg-white"
                    variant="contained"
                    onClick={() => {
                        setActiveIndex(activeIndex + 1);
                    }}
                    sx={{
                        position: "absolute",
                        top: "8rem",
                        right: "0rem",
                        transform: "translateX(50%) rotate(90deg)",
                        bgcolor: "white",
                    }}
                >
                    <KeyboardArrowRightOutlined
                        sx={{ color: "black", transform: "rotate(-90deg)" }}
                    />
                </Button>}

                {/* PREVIOUS BUTTON */}
                {activeIndex !== 0 && (
                    <Button
                        className="z-50 bg-white"
                        variant="contained"
                        sx={{
                            position: "absolute",
                            top: "8rem",
                            left: "0rem",
                            transform: "translateX(-50%) rotate(90deg)",
                            bgcolor: "white",
                        }}
                        onClick={() => {
                            setActiveIndex(activeIndex - 1);
                        }}
                    >
                        <KeyboardArrowLeftOutlined
                            sx={{ color: "black", transform: "rotate(-90deg)" }}
                        />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default HomeSectionCarousel;

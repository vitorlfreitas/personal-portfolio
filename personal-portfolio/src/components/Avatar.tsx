"use client";

import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../../public/assets/avatar-home-page.json";
import { useRef } from "react";
import React from "react";

const Avatar = () => {
    const avatarRef = useRef<LottieRefCurrentProps>(null);

    return (
        <Lottie
            lottieRef={avatarRef}
            animationData={animationData}
            onComplete={() => console.log("Animation Completed")}
        />
    );
};

export default Avatar;

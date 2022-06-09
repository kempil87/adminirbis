import React from "react"
import ContentLoader from "react-content-loader"

export const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={551}
        height={156}
        viewBox="0 0 551 156"
        backgroundColor="#b2b1b1"
        foregroundColor="#d2d0d0"
        {...props}
    >
        <rect x="0" y="3"  width="200" height="176" />
        <rect x="214" y="5"  width="335" height="17" />
        <rect x="214" y="38"  width="114" height="17" />
    </ContentLoader>
)


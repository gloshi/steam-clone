import React from "react"
import ContentLoader from "react-content-loader"

const GamesHomeSkeleton = (props) => (
    <ContentLoader 
    speed={2}
    width={600}
    height={440}
    viewBox="0 0 600 440"
    backgroundColor="#8ba7f8"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="30" y="10" rx="14" ry="14" width="531" height="340" /> 
    <rect x="321" y="370" rx="9" ry="9" width="229" height="36" />
  </ContentLoader>
)

export default GamesHomeSkeleton
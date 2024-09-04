import { useMediaQuery } from "@mui/material";
import ReactImageMagnify from "react-image-magnify";

function MachineImgBoxS({ src, alt }) {
  const isMobile = useMediaQuery("(max-width: 1023px)");
  return (
    <ReactImageMagnify
      {...{
        smallImage: {
          alt: alt,
          src: src,
          isFluidWidth: true,
        },
        largeImage: {
          src: src,
          width: 1500, // 확대된 이미지의 폭을 설정하세요.
          height: 1500, // 확대된 이미지의 높이를 설정하세요.
        },
        isHintEnabled: true,
        lensStyle: {
          backgroundColor: "rgba(0,0,0,.4)",
        },
        shouldHideHintAfterFirstActivation: false,
        enlargedImageStyle: {
          backgroundColor: "white",
        },
        enlargedImageContainerDimensions: {
          width: "100%",
          height: "100%",
        },
      }}
    />
  );
}

export default MachineImgBoxS;

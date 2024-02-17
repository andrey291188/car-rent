import { Blocks } from "react-loader-spinner";
import { createPortal } from "react-dom";
import { StyledBackdrop } from "./StyledLoader";

const modalRoot = document.querySelector("#root-modal") as HTMLDivElement;

export const Loader = () => {

  return createPortal(
    <StyledBackdrop>
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperClass="blocks-wrapper"
      />
    </StyledBackdrop>,
    modalRoot
  );
};


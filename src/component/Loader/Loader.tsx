import { Blocks } from "react-loader-spinner";

import { createPortal } from "react-dom";
import { StyledBackdrop } from "./StyledLoader";

export const Loader = () => {
  const modalRoot = document.querySelector("#root-modal") as HTMLDivElement;

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

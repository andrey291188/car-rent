import { createPortal } from "react-dom";
import { StyledBackdrop } from "./StyledModal.styled";
import { useEffect } from "react";
import { ModalType } from "../../types/types";
import { defaultImg } from "../RenderCard/RenderCard";
import { IoClose } from "react-icons/io5";

const modalRoot = document.querySelector("#root-modal") as HTMLDivElement;

const Modal = ({ item, toggleModal }: ModalType) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        toggleModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("body-scroll-lock");
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("body-scroll-lock");
    };
  }, [toggleModal]);

  const backdropClick = (e: any) => {
    if (e.currentTarget === e.target) {
      toggleModal(false);
    }
  };

  const handleClick = () => {
    toggleModal(false);
  }

  const cityAndCountry = item.address.split(",").slice(1);

  return createPortal(
    <StyledBackdrop onClick={backdropClick}>
      <div className="card-details-container">
      <button
        className="close-button"
        onClick={handleClick}
        type="button"
      >
        <IoClose size={24} color="black" />
      </button>
        <img
          className="img"
          src={item.img ? item.img : defaultImg}
          alt={item.make}
        />
        <h3 className="title">
          {item.make}&nbsp;<span className="model">{item.model}</span>,&nbsp;
          {item.year}
        </h3>
        <ul className="list-desc-car">
          <div className="container-desc">
            <li className="item-desc-car">
              <p>{cityAndCountry[0]}</p>
            </li>
            <span className="vector"></span>
            <li className="item-desc-car">
              <p>{cityAndCountry[1]}</p>
            </li>
            <span className="vector"></span>
            <li className="item-desc-car">
              <p>id:&nbsp;{item.id}</p>
            </li>
            <span className="vector"></span>
            <li className="item-desc-car">
              <p>Year:&nbsp;{item.year}</p>
            </li>
            <span className="vector"></span>
            <li className="item-desc-car">
              <p>Type:&nbsp;{item.type}</p>
            </li>
          </div>
          <div className="container-desc">
            <li className="item-desc-car">
              <p>Fuel Consumption:&nbsp;{item.fuelConsumption}</p>
            </li>
            <span className="vector"></span>
            <li className="item-desc-car">
              <p>Engine Size:&nbsp;{item.engineSize}</p>
            </li>
          </div>
        </ul>
        <p className="description">{item.description}</p>
        <ul className="list-desc-car">
          <p className="title-acces-func">Accessories and functionalities:</p>
          <li className="container-desc">
            {item.accessories.map((i, index) => (
              <p key={index} className="item-desc-car">
                {i.split(" ").slice(0, 2).join(" ")}
              </p>
            ))}
          </li>
          <li className="container-desc">
            {item.functionalities.map((i, index) => (
              <p key={index + 1} className="item-desc-car">
                {i.split(" ").slice(0, 2).join(" ")}
              </p>
            ))}
          </li>
        </ul>
        <p className="title-rental">Rental Conditions:</p>
        <ul className="rental-container">
          <li className="item-rental">
            <p>
              Minimum age:&nbsp;<span className="meaning">25</span>
            </p>
          </li>
          <li className="item-rental">
            <p>Valid driver’s license</p>
          </li>
          <li className="item-rental">
            <p>Security deposite required</p>
          </li>
          <li className="item-rental">
            <p>
              Mileage:&nbsp;
              <span className="meaning">
                {item.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </p>
          </li>
          <li className="item-rental">
            <p>
              Price:&nbsp;<span className="meaning">{item.rentalPrice}</span>
            </p>
          </li>
        </ul>
        <a href="tel:+380730000000" className="rental-button">
          Rental car
        </a>
      </div>
    </StyledBackdrop>,
    modalRoot
  );
};

export default Modal;


import { createPortal } from "react-dom";
import { StyledBackdrop } from "./StyledModal.styled";
import { useEffect } from "react";
import { ModalType } from "../../types/types";
import { defaultImg } from "../RenderCard/RenderCard";

const modalRoot = document.querySelector("#root-modal") as HTMLDivElement;

const Modal = ({item, toggleModal}: ModalType) => {

    useEffect(()=>{
        const handleKeyDown = (e: KeyboardEvent) => {
          if (e.code === 'Escape') {
            toggleModal(false);
          }
        };
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        }
      }, [toggleModal]);
    
    
      const backdropClick = (e: any) => {
        if (e.currentTarget === e.target) {
          toggleModal(false);
        }
      };

      const cityAndCountry = item.address.split(",").slice(1);
      
  return createPortal(
    <StyledBackdrop onClick={backdropClick}>
      <div>
        <img src={item.img ? item.img : defaultImg} alt={item.make} />
        <h3>{item.make}&nbsp;{item.model},&nbsp;{item.year}</h3>
        <ul>
        <li><p>{cityAndCountry[0]}</p></li>
          <li><p>{cityAndCountry[1]}</p></li>
          <li><p>id:&nbsp;{item.id}</p></li>
          <li><p>Year:&nbsp;{item.year}</p></li>
          <li><p>Type:&nbsp;{item.type}</p></li>
          <li><p>Fuel Consumption:&nbsp;{item.fuelConsumption}</p></li>
          <li><p>Engine Size:&nbsp;{item.engineSize}</p></li>
        </ul>
        <p>{item.description}</p>
        <ul>
          <p>Accessories and functionalities:</p>
          <li>
            {item.accessories.map((i, index)=>(
              <p key={index}>{i}</p>
            ))}
          </li>
          <li>
          {item.functionalities.map((i, index)=>(
              <p key={index + 1}>{i}</p>
            ))}
          </li>
        </ul>
        <ul>
          <p>Rental Conditions:</p>
          <li><p>Minimum age:&nbsp;<span>25</span></p></li>
          <li><p>Valid driver’s license</p></li>
          <li><p>Security deposite required</p></li>
          <li><p>Mileage:&nbsp;<span>{item.mileage}</span></p></li>
          <li><p>Price:&nbsp;<span>{item.rentalPrice}</span></p></li>
        </ul>
      </div> 
    </StyledBackdrop>,
    modalRoot
  );
};

export default Modal
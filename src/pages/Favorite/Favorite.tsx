import { useState } from "react";
import Modal from "../../component/Modal/Modal";
import RenderCard from "../../component/RenderCard/RenderCard";
import { RootStore, useAppSelector } from "../../store/store";
import { StyledSection } from "./StyledFavorite.styled";
import { CatalogCard } from "../../types/types";

const favoriteSelector = (state: RootStore) => {
  return state.favorite;
};

const Favorite = () => {
  const { favoriteList } = useAppSelector(favoriteSelector);
  const [showModal, setShowModal] = useState(false);
  const [itemModal, setItemModal] = useState<CatalogCard | null>(null)

  const handleClickModal = (id: number) => {
    const [ item ] = favoriteList.filter(
      (cars) => cars.id === id)
      setItemModal(item)
      setShowModal(true)

  }

    return (
      <StyledSection>
      <ul className="list-card-auto">
        {!favoriteList.length && <p className="no-car">Sorry but no cars were found</p>}
        {favoriteList.map(
          ({
            id,
            make,
            model,
            year,
            img,
            rentalPrice,
            address,
            rentalCompany,
            mileage,
            type,
            accessories
          }) => (
           <RenderCard key={id} 
           id={id}
           make={make}
           model={model}
           year={year}
           img={img}
           rentalPrice={rentalPrice}
           address={address}
           rentalCompany={rentalCompany}
           mileage={mileage}
           type={type}
           accessories={accessories}
           buttonOnClick={handleClickModal}
           />
           
          )
        )}
      </ul>
      {showModal && itemModal && <Modal item={itemModal} toggleModal={setShowModal}/>}
    </StyledSection>
    );
  };
  
  export default Favorite;
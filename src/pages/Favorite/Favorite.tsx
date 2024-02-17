import RenderCard from "../../component/RenderCard/RenderCard";
import { RootStore, useAppSelector } from "../../store/store";
import { StyledSection } from "./StyledFavorite.styled";

const favoriteSelector = (state: RootStore) => {
  return state.favorite;
};

const Favorite = () => {
  const { favoriteList } = useAppSelector(favoriteSelector);

    return (
      <StyledSection>
      <ul className="list-card-auto">
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
           accessories={accessories}/>
          )
        )}
      </ul>
    </StyledSection>
    );
  };
  
  export default Favorite;
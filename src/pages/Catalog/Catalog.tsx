import { RootStore, useAppDispatch, useAppSelector } from "../../store/store";
import { useEffect, useState } from "react";
import {
  catalogPageThunk,
  catalogThunk,
} from "../../store/catalog/thunkCatalog";
import RenderCard from "../../component/RenderCard/RenderCard";
import { StyledSection } from "./StyledCatalog.styled";
import Modal from "../../component/Modal/Modal";
import { Loader } from "../../component/Loader/Loader";


const catalogSelector = (state: RootStore) => {
  return state.catalog;
};

const Catalog = () => {
  const { catalogList, total, isLoading } = useAppSelector(catalogSelector);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const [queryResp, setQueryResp] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (queryResp !== "" || page > 1) return;
    dispatch(catalogThunk({ page: `${page}` }));
  }, [dispatch, page, queryResp]);

  useEffect(() => {
    if (queryResp === "") return;
    dispatch(catalogPageThunk({ page: `${page}`, query: queryResp }));
  }, [dispatch, page, queryResp]);

  useEffect(() => {
    if (queryResp !== "" || page === 1) return;
    dispatch(catalogPageThunk({ page: `${page}`, query: queryResp }));
  }, [dispatch, page, queryResp]);


  const handleClick = () => {
    setPage((prePage) => prePage + 1);
  };

  const handleClickModal = (id: number) => {
    console.log(id)
    console.log(setQueryResp)
  }

  return (
    <StyledSection>
      <ul className="list-card-auto">
        {catalogList.length > 0 && catalogList.map(
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
            accessories,
          }) => (
            <RenderCard
              id={id}
              key={id}
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
      {catalogList.length !== total && catalogList.length > 0 && (
        <button onClick={handleClick} className="button-load-more">
          Load more
        </button>
      )}

      {isLoading && <Loader/>}
      {showModal && <Modal toggleModal={setShowModal}/>}
    </StyledSection>
  );
};

export default Catalog;

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
import { CatalogCard, FormSubmitValue, ResetForm } from "../../types/types";
import FormSubmit from "../../component/FormFubmit/FormSubmit";

const catalogSelector = (state: RootStore) => {
  return state.catalog;
};

const Catalog = () => {
  const { catalogList, total, isLoading } = useAppSelector(catalogSelector);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const [queryResp, setQueryResp] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [itemModal, setItemModal] = useState<CatalogCard | null>(null)

  useEffect(() => {
    if (page === 1) {
        dispatch(catalogThunk({ page: `${page}`, query: queryResp }));
    } else {
        dispatch(catalogPageThunk({ page: `${page}`, query: queryResp }));
    }
  }, [dispatch, page, queryResp]);


  const handleClick = () => {
    setPage((prePage) => prePage + 1);
  };

  const handleClickModal = (id: number) => {
    const [ item ] = catalogList.filter(
      (cars) => cars.id === id)
      setItemModal(item)
      setShowModal(true)
  }
 
  const handleSubmit = (values: FormSubmitValue, { resetForm }: ResetForm) => {
    setPage(1)
    const { carBrand } = values
    setQueryResp(carBrand)
    resetForm()
  }

  return (
    <StyledSection>
       <FormSubmit handleSubmit={handleSubmit}/>
      <ul className="list-card-auto">
      {!catalogList.length && <p className="no-car">Sorry but no cars were found</p>}
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
      {showModal && itemModal && <Modal item={itemModal} toggleModal={setShowModal}/>}
    </StyledSection>
  );
};

export default Catalog;

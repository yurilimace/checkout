import { Navigate, useLocation } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { InfoCheckoutMessage } from "../Components/InfoCheckoutMessage/InfoCheckoutMessage";
import { MainContentContainerFlex } from "../Components/MainContainer/MainContainer.styled";

import { useContext } from "react";
import { OffersContext } from "../Context/OffersContext/OffersContext";

const CheckoutConfirm = () => {
  const location = useLocation();
  const contextValue = useContext(OffersContext);

  return (
    <>
      {location.state && (
        <>
          <Header />
          <MainContentContainerFlex>
            <InfoCheckoutMessage
              userInfo={location.state}
              selectedOffer={contextValue?.data}
            />
          </MainContentContainerFlex>
        </>
      )}
      {!location.state && <Navigate to="/checkout" />}
    </>
  );
};

export { CheckoutConfirm };

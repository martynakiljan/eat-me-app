/** @format */
import { Puff } from "react-loader-spinner";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import "./Kitchen.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Routes, Route, useNavigate } from "react-router-dom";

const Kitchen = () => {
  const [isLoading, setLoading] = useState(true);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(false);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return isLoading ? (
    <Container className="kitchen">
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#ffc107"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Container>
  ) : (
    <>
      <div className="kitchen__food">
        <div className="kitchen__food-inner">
          <div className="kitchen__food-image kitchen__food-image-1">
            <div className="kitchen__food-image__mask">
              <div className="kitchen__food-image__title">
                <p>Asia food</p>
              </div>
            </div>
          </div>
          <div className="kitchen__food-image kitchen__food-image-2">
            <div className="kitchen__food-image__mask">
              <div className="kitchen__food-image__title">
                <p>Bowl</p>
              </div>
            </div>
          </div>
          <div className="kitchen__food-image kitchen__food-image-3">
            <div className="kitchen__food-image__mask">
              <div className="kitchen__food-image__title">
                <p>burgers</p>
              </div>
            </div>
          </div>
          <div className="kitchen__food-image kitchen__food-image-4">
            <div className="kitchen__food-image__mask">
              <div className="kitchen__food-image__title">
                <p>döner</p>
              </div>
            </div>
          </div>
          <div className="kitchen__food-image kitchen__food-image-5">
            <div className="kitchen__food-image__mask">
              <div className="kitchen__food-image__title">
                <p>sushi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="kitchen__return-btn">
        <div className="kitchen__return-btn__inner" onClick={goBack}>
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            className="kitchen__return-svg"
          />
          <p className="kitchen__return-btn-text"> zurück zur Hauptseite</p>
        </div>
      </div>
    </>
  );
};

export default Kitchen;

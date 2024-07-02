import './product-details.css';
import { Button } from 'devextreme-react/button';
import Gallery from 'devextreme-react/gallery';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    fetch('https://demo6801398.mockable.io/products')
      .then(response => response.json())
      .then(data => {
        const foundProduct = data.products.find(prod => prod.id === id);
        setProduct(foundProduct);
      })
      .catch(err => {
        console.error(err.message);
      });
  }, [id]);

  function backClick() {
    navigate('/product/list');
  }

  return (
    <section className="product-details">
      {product && (
        <>
          <div className="title">
            <Button icon="chevronleft" onClick={() => backClick()}></Button>
            {product?.autor} - {product?.titulo}
          </div>
          <section className="row">
            <section className="column">
              <section className="details">
                <div className="info category">
                  <p className="sub-title">Categoria</p>
                  <p className="sub-value">{product?.tipo}</p>
                </div>
                <div className="info description">
                  <p className="sub-title">Descrição</p>
                  <p className="sub-value">{product?.descrição}</p>
                </div>
                <div className="info pid">
                  <p className="sub-title">PID</p>
                  <p className="sub-value">{product?.pid}</p>
                </div>
                <div className="info link">
                  <p className="sub-title">Link</p>
                  <a href={product?.link} target="_blank" rel="noopener noreferrer">{product?.link}</a>
                </div>
              </section>
            </section>
            <section className="column gallery">
              <Gallery
                id="gallery"
                dataSource={[product?.imagem]}
                height={'auto'}
                slideshowDelay={0}
                loop={true}
                showNavButtons={true}
                showIndicator={true}
              />
            </section>
          </section>
        </>
      )}
    </section>
  );
};

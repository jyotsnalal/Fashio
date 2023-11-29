import React, { useState } from "react";
import "./WomenPage.css";
import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";


const Cards = [
  {
    imageSrc:
      "https://i.pinimg.com/236x/68/47/32/68473226ae2e22120990da71d9904754.jpg",
    description: "Pure pineapple",
    pricingText: "$34.00",
    brand: "Calvin Klein",
    category: "men",
  },
  {
    imageSrc:
      "https://preview.colorlib.com/theme/fashi/img/products/women-1.jpg",
    description: "Happy soul",
    pricingText: "$40.00",
    brand: "Diesel",
    category: "men",
  },
  {
    imageSrc:
      "https://preview.colorlib.com/theme/fashi/img/products/women-2.jpg",
    description: "Money saving",
    pricingText: "$30.00",
    brand: "Calvin Klein",
    category: "women",
  },
  {
    imageSrc:
      "https://preview.colorlib.com/theme/fashi/img/products/women-3.jpg",
    description: "Happy soul",
    pricingText: "$45.00",
    brand: "Diesel",
    category: "women",
  },
  {
    imageSrc:
      "https://i.pinimg.com/236x/ec/ba/31/ecba3108ea2c4ab750f108ddad06c883.jpg",
    description: "Pure pineapple",
    pricingText: "$50.00",
    brand: "Tommy Hilfiger",
    category: "kids",
  },

  {
    imageSrc:
      "https://i.pinimg.com/236x/d4/16/42/d41642711ead7d24b48b1a249e770921.jpg",
    description: "Pure KOTTY",
    pricingText: "$20.00",
    brand: "Polo",
    category: "kids",
  },

  {
    imageSrc:
      "https://i.pinimg.com/236x/e7/f6/8f/e7f68f86ed65082d8eef57d0f578a057.jpg",
    description: "Money saving",
    pricingText: "$19.00",
    brand: "Diesel",
    category: "kids",
  },

  {
    imageSrc:
      "https://i.pinimg.com/236x/1a/a1/49/1aa1497a2d3ec5bf0df1dd344f35850c.jpg",
    description: "Pure KOTTY",
    pricingText: "$32.00",
    brand: "Polo",
    category: "women",
  },

  {
    imageSrc:
      "https://i.pinimg.com/236x/43/55/1c/43551ccfe19d033edef0c861e5002a84.jpg",
    description: "Money saving",
    pricingText: "$55.00",
    brand: "Tommy Hilfiger",
    category: "men",
  },
  {
    imageSrc:
      "https://i.pinimg.com/236x/a7/48/b7/a748b718cf96b5e40309ebfeea82681f.jpg",
    description: "Money saving",
    pricingText: "$23.00",
    brand: "Polo",
    category: "women",
  },
  {
    imageSrc:
      "https://i.pinimg.com/236x/84/89/77/8489771e55245baeda76a711a262022c.jpg",
    description: "Pure KOTTY",
    pricingText: "$56.00",
    brand: "Diesel",
    category: "kids",
  },
  {
    imageSrc:
      "https://i.pinimg.com/236x/e0/c1/52/e0c152a07f48042b83c4eeef8529e7a8.jpg",
    description: "Sunburst",
    pricingText: "$48.00",
    brand: "Tommy Hilfiger",
    category: "men",
  },
];
const Womenpage = () => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);
  const [items, setItems] = useState(Cards);
  const [brands, setBrands] = useState([]);

  const filterItems = (values) => {
    if (values.length > 1) {
      let arr = [];
      values.map((el) => arr.push(...Cards.filter((node) => node.brand == el)));
      return arr;
    } else if (values.length == 1)
      return Cards.filter((node) => node.brand == values);
    else {
      return Cards;
    }
  };

  const handleBrand = (e, brand) => {
    if (e.checked) {
      let uniqueChars = [...new Set([...brands, brand])];
      setBrands(uniqueChars);
      setItems(filterItems(uniqueChars));
    } else {
      const index = brands.indexOf(brand);
      if (index > -1) {
        brands.splice(index, 1);
        setBrands([...brands]);
        setItems(filterItems(brands));
      } else {
        setItems(Cards);
      }
    }
  };

  const handleCategoryClick = (e) => {
    const newItem = Cards.filter((newVal) => {
      return newVal.category == e.toLowerCase();
    });
    setItems(newItem);
  };

  const handlebutton = (e) => {
    const newItem = Cards.filter((newVal) => {
      return newVal.description == e;
    });
    setItems(newItem);
  };

  

  return (
    <div className="main-div-womenPage container ">
      <div className="row w-100">
        <div className="col-3">
          <div className="categories-div">
            <div className="category">
              <h2 >Categories</h2>
            </div>

            <div className="cate-div">
              <p
                onClick={(e) => handleCategoryClick(e.currentTarget.innerText)}
              >
                Men
              </p>
              <p
                onClick={(e) => handleCategoryClick(e.currentTarget.innerText)}
              >
                Women
              </p>
              <p
                onClick={(e) => handleCategoryClick(e.currentTarget.innerText)}
              >
                Kids
              </p>
            </div>
          </div>

          <div>
            <div className="brands-div-main">
              <h2>Brands</h2>
            </div>

            <div className=" brands-div">
              <div className="calvin-class">
                <input
                  type="checkbox"
                  onClick={(e) => handleBrand(e.currentTarget, "Calvin Klein")}
                />
                Calvin Klein
              </div>

              <div className="diesel-class">
                <input
                  type="checkbox"
                  onClick={(e) => handleBrand(e.currentTarget, "Diesel")}
                />
                Diesel
              </div>

              <div className="polo-div">
                <input
                  type="checkbox"
                  onClick={(e) => handleBrand(e.currentTarget, "Polo")}
                />
                Polo
              </div>
              <div className="tommy-div">
                <input
                  type="checkbox"
                  onClick={(e) =>
                    handleBrand(e.currentTarget, "Tommy Hilfiger")
                  }
                />
                Tommy Hilfiger
              </div>
            </div>
          </div>

          <div>
            <div className="tags-div">
              <h2>Tags</h2>
            </div>

            <div className="main-tag-div">
              <div className="child-tag">
                <button
                  className="button-tag"
                  onClick={(e) => handlebutton(e.currentTarget.innerText)}
                >
                  Sunburst
                </button>
                <button
                  className="button-tag1"
                  onClick={(e) => handlebutton(e.currentTarget.innerText)}
                >
                  Pure pineapple
                </button>
              </div>

              <div className="child-tag2">
                <button
                  className="button-tag"
                  onClick={(e) => handlebutton(e.currentTarget.innerText)}
                >
                  Money saving
                </button>
                <button
                  className="button-tag1"
                  onClick={(e) => handlebutton(e.currentTarget.innerText)}
                >
                  Pure KOTTY
                </button>
              </div>
              <div className="child-tag4">
                <button
                  className="button-tag"
                  onClick={(e) => handlebutton(e.currentTarget.innerText)}
                >
                  Happy soul
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="color-div">
              <h2>Color</h2>
            </div>
            <div className="color-div-1">
              <div className="child-color">
                <div>Black</div>
                <div>Blue</div>
                <div>Red</div>
              </div>

              <div className="child-color2">
                <div>Violet</div>
                <div>Yellow</div>
                <div>Green</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-9">
          <div className="d-flex justify-content-end ">
            <div className=" position-relative me-3 icon-class ">
              <Icon name="heart outline" size="large" />
              <span className="span-count">{count}</span>
            </div>

            <div className=" position-relative icon-class">
              <Icon name="add to cart" size="large" />
              <span className="span-count">{cart}</span>
            </div>
          </div>

          <div className="women-div-mains">
            {items.map((card, index) => (
              <div key={index} className="cards">
                <img src={card.imageSrc} className="card-images" />
                <div className="texts-infos">
                  <div className="card-headers">
                    <span className="price">{card.pricingText}</span>
                    <span className="cut-out">$35.00</span>
                  </div>
                  <p className="para-graph">{card.description}</p>
                  <div className="icons">
                    <Icon name="cart arrow down" className="me-3" />
                    <button
                      className="addtocartbtn"
                      onClick={() => setCart(cart + 1)}
                    >
                      +
                    </button>
                    <button
                      className="removetocartbtn"
                      onClick={() => setCart(Math.max(cart - 1, 0))}
                    >
                      -
                    </button>

                    <Icon name="heart" onClick={() => setCount(count + 1)} />
                  </div>
                </div>
                {card.brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Womenpage;

import React, { useState } from "react";
import "./Blog.css";

const blogcards = [
  {
    image:
      "https://i.pinimg.com/564x/f5/22/78/f5227875393907b18107ae0d1110eac5.jpg",
    description: "The personality trait that makes you happier",
    category: "Travel",
    tag:"camera"
  },
  {
    image:
      "https://i.pinimg.com/564x/db/8d/fb/db8dfbe9102357dcc33493922db7c159.jpg",
    description: "This was one of our first days in Hawaii last week.",
    category: "Fashion",
    tag:"home"
  },
  {
    image:
      "https://i.pinimg.com/564x/29/b1/c4/29b1c4395fd995260d60fc0ac3e4c23c.jpg",
    description: "The personality trait that makes you happier",
    category: "Travel",
    tag:"cups"
  },
  {
    image:
      "https://i.pinimg.com/564x/f7/3c/65/f73c65ef9dd1928f6bd7b307da12fb02.jpg",
    description: "Writing has always been kind of therapeutic for me",
    category: "Picnic",
    tag:"cars"
  },
  {
    image:
      "https://i.pinimg.com/564x/70/39/4b/70394bebed9e1d6946177732e913fe7a.jpg",
    description: "Happaapppyy New Year! I know I am little late on this post",
    category: "Travel",
    tag:"home"
  },
  {
    image:
      "https://i.pinimg.com/564x/a1/dd/b1/a1ddb1a169cb32c9fc3304058271526b.jpg",
    description: "This was one of our first days in Hawaii last week.",
    category: "Model",
    tag:"jhula"
  },
];



const Blog = () => {
  const [item, setItem] = useState(blogcards);

const handleCategory=(e)=>{
const carditem=blogcards.filter((newval)=>{
  return newval.category==e;
})
console.log(carditem)
setItem(carditem);
}

const handleTag=(e)=>{
const card=blogcards.filter((val)=>{
return val.tag== e.toLowerCase()
})
setItem(card);
}
  return (
    <div className="main-div-blog container">
      <div className="row w-100">
        <div className="col-3">
          <div className="search-blog ">
            <h1 className="h1-search">Search</h1>
            <input placeholder="Search..." className="input-field" />
          </div>

          <div className="category-blog">
            <h1 onClick={()=>{setItem(blogcards)}}>Categories</h1>
            <div className="h1-category-blog">
              <p onClick={(e)=>handleCategory(e.currentTarget.innerText)}>Fashion</p>
              <p onClick={(e)=>handleCategory(e.currentTarget.innerText)}>Travel</p>
              <p onClick={(e)=>handleCategory(e.currentTarget.innerText)}>Picnic</p>
              <p onClick={(e)=>handleCategory(e.currentTarget.innerText)}>Model</p>
            </div>
          </div>

          <div className="recent-post">
            <h1>Recent post</h1>
            <div className="d-flex flex-column ">
              <div className="card-recent ">
                <img
                  src="https://i.pinimg.com/564x/f7/3c/65/f73c65ef9dd1928f6bd7b307da12fb02.jpg"
                  className="img-recent"
                  alt=""
                />
                <div className="div-content-recent">
                  <p className="p-recent">
                    The personality Trait That makes....
                  </p>
                  <p className="p2-recent">
                    FASHION <span className="date-recent">- May 19,2019</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column ">
              <div className="card-recent ">
                <img
                  src="https://i.pinimg.com/564x/a7/41/57/a74157aec8077625a9c8c217a6488a7c.jpg"
                  className="img-recent"
                  alt=""
                />
                <div className="div-content-recent">
                  <p className="p-recent">
                    The personality Trait That makes....
                  </p>
                  <p className="p2-recent">
                    FASHION <span className="date-recent">- May 19,2019</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column ">
              <div className="card-recent ">
                <img
                  src="https://i.pinimg.com/564x/a1/dd/b1/a1ddb1a169cb32c9fc3304058271526b.jpg"
                  className="img-recent"
                  alt=""
                />
                <div className="div-content-recent">
                  <p className="p-recent">
                    The personality Trait That makes....
                  </p>
                  <p className="p2-recent">
                    FASHION <span className="date-recent">- May 19,2019</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column ">
              <div className="card-recent ">
                <img
                  src="https://i.pinimg.com/564x/70/ae/15/70ae151b9bd3966ebe9a8644f4d51bcb.jpg"
                  className="img-recent"
                  alt=""
                />
                <div className="div-content-recent">
                  <p className="p-recent">
                    g nb The personality Trait That makes....
                  </p>
                  <p className="p2-recent">
                    FASHION <span className="date-recent">- May 19,2019</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="div-products">
            <h1 onClick={()=>{setItem(blogcards)}}>Product Tags</h1>
            <div className="main-div-blog">
              <div className="child-div-blog">
                <button
                  className="book" onClick={(e)=>{handleTag(e.currentTarget.innerText)}}
                 
                >
                 Camera
                </button>
                <button className="homes" onClick={(e)=>{handleTag(e.currentTarget.innerText)}}>Home</button>
              </div>
              <div className="child-div-blog">
                <button className="cups" onClick={(e)=>{handleTag(e.currentTarget.innerText)}}>Cups</button>
                <button className="cars" onClick={(e)=>{handleTag(e.currentTarget.innerText)}}>Cars</button>
              </div>
              <div className="child-div-blog">
                <button className="flower" onClick={(e)=>{handleTag(e.currentTarget.innerText)}}>Flower</button>
                <button className="jhula" onClick={(e)=>{handleTag(e.currentTarget.innerText)}}>Jhula</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-9">
          <div className="card-container">
            {item.map((card, index) => (
              <div key={index} className="card ">
                <img src={card.image} className="card-blog-images" />
                <div className="content-blog">
                  <h1 className="h1-blog-content">{card.description}</h1>
                  <p className="travel-class">
                    {card.category}
                    <span className="span-date">-May 19, 2019</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

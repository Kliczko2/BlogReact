import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";
import "./home.css";

function Home()
{
  const [postLists, setPostList] = useState([]);
  
    return(
      <div className="homePage">
      {postLists.map((post, index) => {
        return (
          <div className="post" key={index}>
            <div className="postHeader">
              <div className="title">
                <h1>
                  Tytuł
                </h1>
              </div>
            </div>
            <div className="postTextContainer"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere non libero at consequat. Proin et tincidunt eros. Morbi ipsum nisl, pulvinar eu orci eget, consequat tempor libero. Donec sollicitudin viverra nisi quis tempor. Aliquam id lobortis elit. Ut quis diam urna. Donec quis sem quis erat vulputate maximus. Donec nec posuere nisl, ornare tristique velit. Phasellus velit urna, mattis sit amet placerat molestie, viverra eget metus. Vivamus ac felis euismod, placerat turpis id, imperdiet mauris. In egestas fermentum vehicula. Aliquam facilisis orci a mauris vulputate feugiat.  </div>
            <h3>Autor: Ja</h3>
          </div>
        );
      })}
    </div>
    )
}
export default Home
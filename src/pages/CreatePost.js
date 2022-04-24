import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import './createpost.css';

function CreatePost()
{
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

    return(
      <div className="createPost">
      <div className="cpContainer">
        <h1>Stwórz posta</h1>
        <div className="inputGp">
          <label>Tyuł:</label>
          <input
            placeholder="Tytuł..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label>Post:</label>
          <textarea
            placeholder="tresc.."
            onChange={(event) => {
              setPost(event.target.value);
            }}
          />
        </div>
        <button>wyślij</button>
      </div>
    </div>
    )
}
export default CreatePost
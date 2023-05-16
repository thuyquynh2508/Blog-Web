import { useState } from "react";
import axios from 'axios';

const CreateForm = () => {
    const [userId, setUserId] = useState(1);
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [image, setImage] = useState();

    const onSubmitFunc = (event) => {
        event.preventDefault();
        console.log("user: " + userId);
        console.log("title: " + title);
        console.log("content: " + content);
        console.log("image: " + image);

        const url = "http://127.0.0.1:8000/Backend/api/controllers/createPost.php";

        let formData = new FormData();
        formData.append('userId', userId);
        formData.append('title', title);
        formData.append('content', content);
        formData.append('image', image);

        axios.post(url, formData)
        .then(response => alert(response))
        .catch(error => alert(error));
    }

    const onChangeUserId = (event) => {
        let id = event.target.value;
        setUserId(id);
    }

    const onChangeTitle = (event) => {
        let value = event.target.value;
        setTitle(value);
    }

    const onChangeContent = (event) => {
        let content = event.target.value;
        setContent(content);
    }

    const onChangeImage = (event) => {
        let value = event.target.value;
        setImage(value);
    }

      return (
        <form onSubmit={onSubmitFunc}>
          <label>Enter user id:
            <input 
                type="text" 
                name="userId" 
                value={userId} 
                onChange={onChangeUserId}
            />
            </label>
            <br />
            <label>Enter title:
                <input 
                type="text" 
                name="title" 
                value={title} 
                onChange={onChangeTitle}
                />
            </label>
            <br />

            <label>Enter content:
                <input 
                type="text" 
                name="content" 
                value={content} 
                onChange={onChangeContent}
                />
            </label>
            <br />

            <label>Enter image url:
                <input 
                type="text" 
                name="image" 
                value={image} 
                onChange={onChangeImage}
                />
            </label>
            <br />

          <input type="submit" value="Submit" />
        </form>
      );

      
  }
  export default CreateForm;
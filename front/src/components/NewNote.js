import M from "materialize-css";
// import NoteModal from "./NoteModal";
import { useState } from 'react';
import axios from 'axios';


const NewNote = () => {

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems);
      });
    
    const url = 'http://127.0.0.1:8000/api/notes/'
    const[data, setData] = useState({
        id: "",
        name : "",
        content :"",
        created : "",
        modified : "",
        completed : false
    })

    const handleGet = () => {
        axios.get(url)
        .then(res=>{
            setData(res.data)
        })
        .catch((err)=>console.log(err))
        
    }

    function submit (e) {
        axios.post(url,{
            name: data.name,
            content: data.content
        })
        .then(res=>{
            handleGet()
        })
        .catch((err)=>console.log(err))
        }
            
        
    function handle (e) {
        const newdata = { ...data }
        newdata[e.target.id]=e.target.value
        setData(newdata)

    }
      

    return(
        <div className="container">
              
            <a className="waves-effect waves-light btn modal-trigger" href="#modal1">New Note</a>

            
            <div id="modal1" className="modal">
                <div className="modal-content">
                <h4>Post New Note</h4>
                <form id="form" onSubmit={(e)=>submit(e)}>    
                    <input onChange={(e) => handle(e)} id="name" value={data.name} type="text" placeholder="Note" />
                    <input onChange={(e) => handle(e)} id="content" value={data.content} type="text" placeholder="Note content" />
                    <button type="submit" className="waves-effect waves-light btn-small" >Post</button>
                
                </form>
                </div>
                
            </div>
        </div>
    )
}

export default NewNote
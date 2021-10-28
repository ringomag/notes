import {useState} from 'react';
import axios from 'axios';
import "./CSS/CustomModal.css";


const EditModal = ({closeModal, item}) => {
    const url = `http://127.0.0.1:8000/api/notes/${item.id}/`
    
    const[data, setData] = useState({
        // id: "",
        name : "",
        content : "",
        // created : "",
        // modified : "",
        // completed : false
    })

    const handleGet = () => {
        axios.get(url)
        .then(res=>{
            setData(res.data)
        })
        .catch((err)=>console.log(err))
    }

    function submit (e) {
        axios.put(url,{
            name: data.name,
            content: data.content,
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

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal(false);
        }
      })
    
    return (
        <div>
            <div className="custom-modal">
                <div className="modalContentCustom">
                    <span onClick={()=>{closeModal(false)}} className="close">&times;</span>
                    <h4>Edit Note</h4>
                    <form id="form" onSubmit={(e)=>submit(e)}>    
                        <input onChange={(e) => handle(e)} id="name" value={data.name} placeholder={item.name} type="text" />
                        <input onChange={(e) => handle(e)} id="content" value={data.content} placeholder={item.content} type="text" />
                        <button type="submit" className="waves-effect waves-light btn-small" >Edit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditModal
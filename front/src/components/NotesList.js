import {useEffect, useState} from 'react';
import axios from 'axios';
import DetailsModal from './DetailsModal';
import EditModal from './EditModal';


const NotesList = () => {
    const url = 'http://127.0.0.1:8000/api/notes/'
    const[data, setData] = useState([])

    const fetchData = () => {
        axios.get(url)
        .then(res=>{
            setData(res.data)
        })
        .catch((err)=>console.log(err))
        }
    

    useEffect(() => {
        fetchData()
    },[]);

    const handleDelete = item => {
        console.log(`${item.id}`)
        axios.delete(`http://127.0.0.1:8000/api/notes/${item.id}/`)
        .then(res=> fetchData())
        .catch((err)=>console.log(err))
    }
    
    //customModal for details of each list item
    const [openModal, setOpenModal] = useState(false)
    
    //editModal, for each list item
    const [editModal, setEditModal] = useState(false)


    // const [openModal, setOpenModal] = useState(false);


    let styles = {fontWeight:"bold"}

    return (
        <div className="container"> 
            <ul className="collection">
            {data.map(item => {
            return <li key={item.id} className="collection-item">
                        <div style={{marginBottom:"auto"}} className="row">
                            <div className="col s6">
                                <span className="setOpenModal" onClick={()=>setOpenModal(item)} style={styles} >{item.name}</span> <br/>
                                <i>created: {item.created}</i>
                            </div>
                            <div className="col s6">
                                <button onClick={() => handleDelete(item)} className="right secondary-content waves-effect waves-light btn white-text red lighten-2">Delete</button>
                                <button onClick={() => setEditModal(item)} style={{marginRight:"2px"}} className="right secondary-content waves-effect waves-light btn white-text">Edit</button> 
                            </div>
                        </div>
                       
                    </li>
            })}
            </ul>
            {openModal && <DetailsModal closeModal={setOpenModal} item={openModal} />}
            {editModal && <EditModal closeModal={setEditModal} item={editModal} />}
        </div>
    )
}

export default NotesList
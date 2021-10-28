import "./CSS/CustomModal.css"

const DetailsModal = ({closeModal, item}) => {

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal(false);
        }
      })

    return (
        <div>
                <div className="custom-modal">
                <div className="modalContentCustom">
                <span onClick={()=>{closeModal(false)}} className="close">&times;</span>
                <h4>Details</h4>
                <p>- {item.name}</p>
                <p>- {item.content}</p>
                <p>- {item.created}</p>

                </div>

                </div>
            </div>
    )
}

export default DetailsModal
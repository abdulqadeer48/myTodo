import React from 'react'

function Modal(props) {
  return (
    <>
    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Clear all
    </button> 
    

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 className="fw-bold text-center" id="exampleModalLabel">Alert!</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body fw-bold ">
            Do you really want to delete it?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" data-bs-dismiss="modal">Cancel</button>
            <button onClick={props.deleteFun} type="button" data-bs-dismiss="modal"class="btn btn-danger">Confirm?</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Modal
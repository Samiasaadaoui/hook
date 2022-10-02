import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';



function AddMovie({setMovies,movies}) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(0);
  const [rating, setRating] = useState(0);




  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = (e) => {
    e.preventDefault()

    setMovies([...movies,{name, image,rating,type,date,description,id:Math.Random()}])
       handleClose()
 
}

  return (
    <>
      <Button variant="success" onClick={handleShow} style={{border:'50%', height:"55px" , width:"55px"}}>
        +
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>

        
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
        <Form.Control
          placeholder="User name"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange ={(e)=>setName(e.target.value)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Image</InputGroup.Text>
        <Form.Control
          placeholder="User image"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange ={(e)=>setImage(e.target.value)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Type</InputGroup.Text>
        <Form.Control
          placeholder="User type"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange ={(e)=>setType(e.target.value)}
        />
      </InputGroup>

      
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
        <Form.Control
          placeholder="User description"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange ={(e)=>setDescription(e.target.value)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Rating</InputGroup.Text>
        <Form.Control
          placeholder="Userrating"
          aria-label="Username"
          aria-describedby="basic-addon1"
          type='number'
          onChange ={(e)=>setRating(e.target.value)}
        />
      </InputGroup>


      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Date</InputGroup.Text>
        <Form.Control
          placeholder="Userdate"
          aria-label="Username"
          aria-describedby="basic-addon1"
          type='number'
          onChange ={(e)=>setDate(e.target.value)}
        />
      </InputGroup>


         <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )}


export default AddMovie
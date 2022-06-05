import React from 'react';
import { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';
import  './App.css';


function App(){
    const [show, setShow] = useState(false)
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
      <div className="App">
    
        <Button variant="primary" onClick={handleShow}>
          Внести изменения
        </Button>
        <Button variant="primary" onClick={handleShow}>
          Добавить новую запись
        </Button>
        <Button variant="primary" onClick={handleShow}>
          Удалить
        </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Закрыть окно</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Поле main_table.i</p>
            <input type={'text'} placeholder={'Введите изменения'}></input>
          </Modal.Body>          
          <Modal.Body>
            <p>Поле qual_table.p01 связанное через main_table.r с qual_table.p00</p>
            <input type={'text'} placeholder={'Введите изменения'}></input>
          </Modal.Body>
          <Modal.Body>
            <p>Поле main_table.t</p>
            <input type={'text'} placeholder={'Введите изменения'}></input>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Закрыть
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Сохранить
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  
  export default App;
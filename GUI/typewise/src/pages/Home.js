import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Editor from "../components/Editor";
import Consola from "../components/Consola";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import { Graphviz } from 'graphviz-react';
import GraphAST from "../components/report/GraphAST";
import GraphSimbolos from "../components/report/GraphSimbolos";
function Home(){
    const [editor, setEditor] = useState("");
    const [consola, setConsola] = useState("");
    const [graphAST, setGraphAST] = useState("");
    const [graphSimbolos, setGraphSimbolos] = useState("");
    //estados de modal para ast
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //estados de modal para tabla de simbolos
    
    const [shows, setShows] = useState(false);
    const handleCloses = () => setShows(false);
    const handleShows = () => setShows(true);

    const interpretar = async () => {
        console.log("ejecutando")
        try {
            setConsola("ejecutando...");
            if(editor ==""){
                setConsola("No hay codigo para interpretar");
                console.log("No hay codigo para interpretar");
            }else {
                console.log(editor)
                const response = await axios.post('http://localhost:5000/interpreter/interpretar', {code:editor});
                console.log(response.data);
                const {consola,errores, ast, simbolos} = response.data;  
               // const dot = ast; 
               // const dots = simbolos;
                console.log(consola);
                
                setConsola(consola);
                setGraphAST(ast);
                setGraphSimbolos(simbolos);
            }
        } catch (error) {
            console.log(error);
            setConsola("Error en el servidor");
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Editor</h1>
                </Col>
                <Col>
                    <h1>Consola</h1>
                </Col>

            </Row>
            <Row>
                <Col style={{ textAlign: 'left' }}>
                    <Editor input={setEditor}/>
                </Col>
                
                <Col style={{ textAlign: 'left' }}>
                    <Consola consola={consola}/>
                </Col>
              
            </Row>
            {/*seccion de botones */}
            <Row>
                <Col>
                    <Button variant="outline-secondary" onClick={() =>interpretar()} >Run</Button>{' '}
                    <Button variant="primary" onClick={handleShow}>
                                                                    Reporte AST
                                                                </Button>{' '}
                    <Button variant="primary" onClick={handleShows}>Reporte Tabla de Simbolos</Button>{' '}               
                    <Button variant="primary" onClick={handleShow}>Reporte Tabla de Errores</Button>{' '}                              
                </Col>
            </Row>
            

            


        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                        <div>
                    <GraphAST dot={graphAST}
                            />
                            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      

      <Modal show={shows} onHide={handleCloses}  style={{ zIndex: 9999 }}>
      <div style={{ maxWidth: "80vw", margin: "auto" }}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                        <div>
                    <GraphAST dot={graphSimbolos}
                            />
                            </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloses}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloses}>
            Save Changes
          </Button>
        </Modal.Footer>
        </div>
      </Modal>
           
            



           
        </Container>
    );
}

export default Home;
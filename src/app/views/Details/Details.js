import React from "react";
import { Card, Col, Container, Badge, Button } from "react-bootstrap";
import Header from "../layout/Header";

export default function Details({data}) {

 

  return (
    <>
      <Header />
      <Container>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Detail</Card.Title>
            </Card.Header>
            <Card.Body  style={{backgroundColor:"#f2f2f2", minHeight:750}}>
              <section class="py-5" >
                <div class="container">
                  <div class="row">
                    <div class="col-lg-6 mx-auto">
                      <header class="text-center pb-5">
                        <h1 class="h2">Pokemon Details</h1>
                      </header>
                    </div>
                  </div>
<div  >

</div>
                  <div class="row">
                    <div class="col-lg-6 mx-auto">
                      <blockquote class="blockquote blockquote-custom bg-white p-5 shadow rounded">
                        <div class="blockquote-custom-icon bg-info shadow-sm"></div>
                        <img
                          class="mx-auto d-block"
                          style= {{width:220,height:220}}
                          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                        />
                          <div class="profile-overview">
                                <Badge pill  >
                                 asdsad
                                </Badge>                                
                            </div>
                        <footer class="blockquote-footer pt-4 mt-4 border-top">
                          Someone famous in
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </section>
            </Card.Body>
            <Card.Footer>
              <Button variant="success"> Caugth pokemon</Button>
            </Card.Footer>
          </Card>
        </Col>
      </Container>
    </>
  );
}

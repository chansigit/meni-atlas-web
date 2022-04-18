import React from "react"
import {Carousel} from "react-bootstrap";

export default function Home(){
    return(
        <div className="home">
            <div className="container">
                <div className="row align-items-center my-5">
                    <div className="col-lg-7">
                        <img
                            className="img-fluid rounded mb-4 mb-lg-0"
                            src={process.env.PUBLIC_URL + 'workflow.png'}
                            alt=""
                        />
                    </div>
                    <div className="col-lg-5">
                        <h2 className="font-weight-light">Human meniscus cell atlas</h2>
                        <p>
                            Musculoskeletal tissue degeneration impairs the life quality and function of many people.
                            Meniscus degeneration is a major origin of knee osteoarthritis and a common threat to
                            athletic ability, but its cellular mechanism remains elusive. We built a cell atlas of
                            healthy/degenerated human meniscus using scRNA-seq to investigate meniscal microenvironment
                            homeostasis and its changes in the degeneration process. We identified and localized cell
                            types in inner and outer meniscus, found new chondrocyte subtypes contributing to
                            degeneration, and revealed how cellular compositions, functions, and interactions
                            participated in degeneration.
                        </p>
                    </div>
                </div>




            </div>
        </div>
    )
}


/*
<Carousel>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
        />
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
        />

        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
        />

        <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>*/

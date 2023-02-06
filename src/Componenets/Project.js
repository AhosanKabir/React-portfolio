import React from 'react'
import { Container , Row, Col} from 'react-bootstrap'

const Project = () => {
  return (
    <div>
        <section className="project-section" id='Projects'>
            <Container>
                <Row className="text-center">
                    <Col sm="12">
                        <h1 className="about-row" style={{textTransform: "uppercase"}}> Projects</h1>
                    </Col>
                </Row>   
                <Row style={{alignItems: "center"}}>
                    <Col lg="6" sm="12"  style={{display: "flex", alignItems: "center",justifyContent:"center" , flexDirection: "column"}} >
                        <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_NxzTQeH77d.json"  background="transparent"  speed="1"  style={{width: "300px", height: "300px", marginBottom:"18px"}}  loop  autoplay></lottie-player>
                        <p className='project-p'>
                           <strong className='text-success'> Subject: Invitation to visit my Github profile </strong><br />

                            Dear sir/madam, <br />

                            I hope this message finds you well. I am reaching out to you today to invite you to visit my Github profile. As a [Your job title or description of your expertise], I have been actively contributing to various projects and I would love for you to take a look at my work. <br /> 

                            My Github profile showcases my technical skills and provides an in-depth understanding of my experience in the field. I am confident that you will find my profile informative and interesting. <br />

                            Please let me know if you have any questions or if there is anything else I can help with. <br />

                            Thank you for your time and consideration. I look forward to connecting with you soon. <br />
                            <br />

                            Best regards, <br />
                            [Ahosan] 
                        </p>

                        <a href="https://github.com/AhosanKabir" target="_blank" rel="noreferrer" className='github-btn'>
                            <button type="button" class="btn btn-primary" fdprocessedid="ebkvu9">
                                visit my github profile <i class="fa-brands fa-github"></i>
                            </button>
                        </a>   
                    </Col>
                    <Col lg="6" sm="12"  style={{display: "flex", alignItems: "center",justifyContent:"center" , flexDirection: "column"}} >
                        <div className="project-element">
                            <div className="row">
                                <div className="col-12">
                                    <div className="project-single-top">
                                        <div className="project-single-element  py-3">
                                            <img src="/img/p-4.png" alt="project-pic" className='img-fluid'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="project-single-middle">
                                        <div className="project-single-element  py-3">
                                            <img src="/img/p-1.png" alt="project-pic" className='img-fluid'/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="project-single-middle">
                                        <div className="project-single-element  py-3">
                                            <img src="/img/p-3.png" alt="project-pic" className='img-fluid'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="project-single-top">
                                        <div className="project-single-element  py-3">
                                            <img src="/img/p-2.png" alt="project-pic" className='img-fluid'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </div>
  )
}

export default Project
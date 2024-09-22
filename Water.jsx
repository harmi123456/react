import React from 'react'
import CountUp from 'react-countup';


export default function Water() {

  return (
    <div>

        {/* <center><h1>Water</h1></center> */}

        {/* //website template code */}

        {/* //first section */}

        <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="" className="navbar-brand p-0">
                    <h1 className="text-primary"><i className="fas fa-hand-holding-water me-3"></i>Acuas</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <a href="index.html" className="nav-item nav-link active">Home</a>
                        <a href="about.html" className="nav-item nav-link">About</a>
                        <a href="service.html" className="nav-item nav-link">Service</a>
                        <a href="blog.html" className="nav-item nav-link">Blog</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <a href="feature.html" className="dropdown-item">Our Feature</a>
                                <a href="product.html" className="dropdown-item">Our Product</a>
                                <a href="team.html" className="dropdown-item">Our Team</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                    <div className="d-none d-xl-flex me-3">
                        <div className="d-flex flex-column pe-3 border-end border-primary">
                            <span className="text-body">Get Free Delivery</span>
                            <a href="tel:+4733378901"><span className="text-primary">Free: + 0123 456 7890</span></a>
                        </div>
                    </div>
                    <button className="btn btn-primary btn-md-square d-flex flex-shrink-0 mb-3 mb-lg-0 rounded-circle me-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search"></i></button>
                    <a href="" className="btn btn-primary rounded-pill d-inline-flex flex-shrink-0 py-2 px-4">Order Now</a>
                </div>
            </nav>

            <div className="carousel-header">
                <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img src="img/carousel-1.jpg" className="img-fluid w-100" alt="Image" />
                            <div className="carousel-caption-1">
                                <div className="carousel-caption-1-content" style={{maxWidth:'900px'}}>
                                    <h4 className="text-white text-uppercase fw-bold mb-4 fadeInLeft animated" data-animation="fadeInLeft" data-delay="1s" style={{animationDelay: '1s', letterSpacing: '3px'}} >Importance life</h4>
                                    <h1 className="display-2 text-capitalize text-white mb-4 fadeInLeft animated" data-animation="fadeInLeft" data-delay="1.3s" style={{animationDelay:'1.3s'}}>Always Want Safe Water For Healthy Life</h1>
                                    <p className="mb-5 fs-5 text-white fadeInLeft animated" data-animation="fadeInLeft" data-delay="1.5s" style={{animationDelay:' 1.5s'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    </p>
                                    <div className="carousel-caption-1-content-btn fadeInLeft animated" data-animation="fadeInLeft" data-delay="1.7s" style={{animationDelay:' 1.7s'}}>
                                        <a className="btn btn-primary rounded-pill flex-shrink-0 py-3 px-5 me-2" href="#">Order Now</a>
                                        <a className="btn btn-secondary rounded-pill flex-shrink-0 py-3 px-5 ms-2" href="#">Free Estimate</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="img/carousel-2.jpg" className="img-fluid w-100" alt="Image" />
                            <div className="carousel-caption-2">
                                <div className="carousel-caption-2-content"  style={{maxWidth:'900px'}}>
                                    <h4 className="text-white text-uppercase fw-bold mb-4 fadeInRight animated" data-animation="fadeInRight" data-delay="1s" style={{animationDelay: '1s', letterSpacing: '3px'}}>Importance life</h4>
                                    <h1 className="display-2 text-capitalize text-white mb-4 fadeInRight animated" data-animation="fadeInRight" data-delay="1.3s" style={{animationDelay:'1.3s'}}>Always Want Safe Water For Healthy Life</h1>
                                    <p className="mb-5 fs-5 text-white fadeInRight animated" data-animation="fadeInRight" data-delay="1.5s" style={{animationDelay:'1.5s'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    </p>
                                    <div className="carousel-caption-2-content-btn fadeInRight animated" data-animation="fadeInRight" data-delay="1.7s" style={{animationDelay:'1.7s'}}>
                                        <a className="btn btn-primary rounded-pill flex-shrink-0 py-3 px-5 me-2" href="#">Order Now</a>
                                        <a className="btn btn-secondary rounded-pill flex-shrink-0 py-3 px-5 ms-2" href="#">Free Estimate</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon btn btn-primary fadeInLeft animated" aria-hidden="true" data-animation="fadeInLeft" data-delay="1.1s" style={{animationDelay:'1.3s'}}> <i className="fa fa-angle-left fa-3x"></i></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                        <span className="carousel-control-next-icon btn btn-primary fadeInRight animated" aria-hidden="true" data-animation="fadeInLeft" data-delay="1.1s" style={{animationDelay:'1.3s'}}><i className="fa fa-angle-right fa-3x"></i></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>


        {/* //second section */}

        {/* <div className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content rounded-0">
                    <div className="modal-header">
                        <h4 className="modal-title mb-0" id="exampleModalLabel">Search by keyword</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex align-items-center">
                        <div className="input-group w-75 mx-auto d-flex">
                            <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                            <span id="search-icon-1" className="input-group-text btn border p-3"><i class="fa fa-search text-white"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}


        {/* //third section */}

        <div className="container-fluid feature bg-light py-5">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth:'800px'}}>
                    <h4 className="text-uppercase text-primary">Our Feature</h4>
                    <h1 className="display-3 text-capitalize mb-3">A Trusted Name In Bottled Water Industry</h1>
                </div>
                <div className="row g-4">
                    <div className=" col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="feature-item p-4">
                            <div className="feature-icon mb-3"><i class="fas fa-hand-holding-water text-white fa-3x"></i></div>
                            <a href="#" className="h4 mb-3">Quality Check</a>
                            <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat deleniti necessitatibus</p>
                            <a href="#" className="btn text-secondary">Read More <i class="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="feature-item p-4">
                            <div className="feature-icon mb-3"><i class="fas fa-filter text-white fa-3x"></i></div>
                            <a href="#" class="h4 mb-3">5 Steps Filtration</a>
                            <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat deleniti necessitatibus</p>
                            <a href="#" className="btn text-secondary">Read More <i class="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="feature-item p-4">
                            <div className="feature-icon mb-3"><i class="fas fa-recycle text-white fa-3x"></i></div>
                            <a href="#" className="h4 mb-3">Composition</a>
                            <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat deleniti necessitatibus</p>
                            <a href="#" className="btn text-secondary">Read More <i class="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                        <div className="feature-item p-4">
                            <div className="feature-icon mb-3"><i class="fas fa-microscope text-white fa-3x"></i></div>
                            <a href="#" className="h4 mb-3">Lab Control</a>
                            <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat deleniti necessitatibus</p>
                            <a href="#" className="btn text-secondary">Read More <i class="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* //Fourth section */}

        <div className="container-fluid about overflow-hidden py-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
                        <div className="about-img rounded h-100">
                            <img src="img/about.jpg" className="img-fluid rounded h-100 w-100" style={{objectFit:'cover'}} alt="" />
                            <div className="about-exp"><span>20 Years Experiance</span></div>
                        </div>
                    </div>
                    <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
                        <div className="about-item">
                            <h4 className="text-primary text-uppercase">About Us</h4>
                            <h1 className="display-3 mb-3">We Deliver The Quality Water.</h1>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quidem quas totam nostrum! Maxime rerum voluptatem sed, facilis unde a aperiam nulla voluptatibus excepturi ipsam iusto consequuntur
                            </p>
                            <div className="bg-light rounded p-4 mb-4">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex">
                                            <div className="pe-4">
                                                <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center" style={{height:'80px', width:'80px'}} ><i class="fas fa-tint text-white fa-2x"></i></div>
                                            </div>
                                            <div>
                                                <a href="#" className="h4 d-inline-block mb-3">Satisfied Customer</a>
                                                <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-light rounded p-4 mb-4">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex">
                                            <div className="pe-4">
                                                <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center" style={{height:'80px', width:'80px'}} ><i class="fas fa-faucet text-white fa-2x"></i></div>
                                            </div>
                                            <div>
                                                <a href="#" className="h4 d-inline-block mb-3">Standard Product</a>
                                                <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="btn btn-secondary rounded-pill py-3 px-5">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        {/* //fifth section */}    
        
        <div className="container-fluid counter py-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="counter-item">
                            <div className="counter-item-icon mx-auto">
                                <i className="fas fa-thumbs-up fa-3x text-white"></i>
                            </div>
                            <h4 className="text-white my-4">Happy Clients</h4>
                            <div className="counter-counting">
                                <span className="text-white fs-2 fw-bold">
                                    <CountUp end={456} duration={2} />
                                </span>
                                <span className="h1 fw-bold text-white">+</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="counter-item">
                            <div className="counter-item-icon mx-auto">
                                <i className="fas fa-truck fa-3x text-white"></i>
                            </div>
                            <h4 className="text-white my-4">Transport</h4>
                            <div className="counter-counting">
                                <span className="text-white fs-2 fw-bold">
                                    <CountUp end={513} duration={2} />
                                </span>
                                <span className="h1 fw-bold text-white">+</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="counter-item">
                            <div className="counter-item-icon mx-auto">
                                <i className="fas fa-users fa-3x text-white"></i>
                            </div>
                            <h4 className="text-white my-4">Employees</h4>
                            <div className="counter-counting">
                                <span className="text-white fs-2 fw-bold">
                                    <CountUp end={53} duration={2} />
                                </span>
                                <span className="h1 fw-bold text-white">+</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                        <div className="counter-item">
                            <div className="counter-item-icon mx-auto">
                                <i className="fas fa-heart fa-3x text-white"></i>
                            </div>
                            <h4 className="text-white my-4">Years Experience</h4>
                            <div className="counter-counting">
                                <span className="text-white fs-2 fw-bold">
                                    <CountUp end={17} duration={2} />
                                </span>
                                <span className="h1 fw-bold text-white">+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        {/* //six section */}

        <div className="container-fluid service bg-light overflow-hidden py-5">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth:'800px'}}>
                    <h4 className="text-uppercase text-primary">Our Service</h4>
                    <h1 className="display-3 text-capitalize mb-3">Protect Your Family with Best Water</h1>
                </div>
                <div className="row gx-0 gy-4 align-items-center">
                    <div className="col-lg-6 col-xl-4 wow fadeInLeft" data-wow-delay="0.2s">
                        <div className="service-item rounded p-4 mb-4">
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex">
                                        <div className="service-content text-end">
                                            <a href="#" class="h4 d-inline-block mb-3">Residential Waters</a>
                                            <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                                        </div>
                                        <div className="ps-4">
                                            <div className="service-btn"><i class="fas fa-hand-holding-water text-white fa-2x"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service-item rounded p-4 mb-4">
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex">
                                        <div className="service-content text-end">
                                            <a href="#" className="h4 d-inline-block mb-3">Commercial Waters</a>
                                            <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                                        </div>
                                        <div className="ps-4">
                                            <div className="service-btn"><i class="fas fa-dumpster-fire text-white fa-2x"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service-item rounded p-4 mb-0">
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex">
                                        <div className="service-content text-end">
                                            <a href="#" className="h4 d-inline-block mb-3">Filtration Plants</a>
                                            <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                                        </div>
                                        <div className="ps-4">
                                            <div className="service-btn"><i class="fas fa-filter text-white fa-2x"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="bg-transparent">
                            <img src="img/water.png" className="img-fluid w-100" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 wow fadeInRight" data-wow-delay="0.2s">
                        <div className="service-item rounded p-4 mb-4">
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex">
                                        <div className="pe-4">
                                            <div className="service-btn"><i class="fas fa-assistive-listening-systems text-white fa-2x"></i></div>
                                        </div>
                                        <div className="service-content">
                                            <a href="#" className="h4 d-inline-block mb-3">Water Softening</a>
                                            <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service-item rounded p-4 mb-4">
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex">
                                        <div className="pe-4">
                                            <div className="service-btn"><i class="fas fa-recycle text-white fa-2x"></i></div>
                                        </div>
                                        <div className="service-content">
                                            <a href="#" className="h4 d-inline-block mb-3">Market Research</a>
                                            <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service-item rounded p-4 mb-0">
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex">
                                        <div className="pe-4">
                                            <div className="service-btn"><i class="fas fa-project-diagram text-white fa-2x"></i></div>
                                        </div>
                                        <div className="service-content">
                                            <a href="#" className="h4 d-inline-block mb-3">Project Planning</a>
                                            <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* //seven section */}

        <div class="container-fluid product py-5">
            <div class="container py-5">
                <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth:'800px'}}>
                    <h4 class="text-uppercase text-primary">Our Products</h4>
                    <h1 class="display-3 text-capitalize mb-3">We Deliver Best Quality Bottle Packs.</h1>
                </div>
                <div class="row g-4 justify-content-center">
                    <div class="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="product-item">
                            <img src="img/product-3.png" class="img-fluid w-100 rounded-top"  alt="Image" />
                            <div class="product-content bg-light text-center rounded-bottom p-4">
                                <p>2L 1 Bottle</p>
                                <a href="#" class="h4 d-inline-block mb-3">Mineral Water Bottle</a>
                                <p class="fs-4 text-primary mb-3">$35:00</p>
                                <a href="#" class="btn btn-secondary rounded-pill py-2 px-4">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.4s">
                        <div class="product-item">
                            <img src="img/product-2.png" class="img-fluid w-100 rounded-top"  alt="Image" />
                            <div class="product-content bg-light text-center rounded-bottom p-4">
                                <p>4L 2 Bottles</p>
                                <a href="#" class="h4 d-inline-block mb-3">RO Water Bottle</a>
                                <p class="fs-4 text-primary mb-3">$70:00</p>
                                <a href="#" class="btn btn-secondary rounded-pill py-2 px-4">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.6s">
                        <div class="product-item">
                            <img src="img/product-1.png" class="img-fluid w-100 rounded-top"  alt="Image" />
                            <div class="product-content bg-light text-center rounded-bottom p-4">
                                <p>6L 3 Bottles</p>
                                <a href="#" class="h4 d-inline-block mb-3">UV Water Bottle</a>
                                <p class="fs-4 text-primary mb-3">$100:00</p>
                                <a href="#" class="btn btn-secondary rounded-pill py-2 px-4">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        {/* //eight section */}

        <div class="container-fluid blog pb-5">
            <div class="container pb-5">
                <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth:'800px'}}>
                    <h4 class="text-uppercase text-primary">Our Blog</h4>
                    <h1 class="display-3 text-capitalize mb-3">Latest Blog & News</h1>
                </div>
                <div class="row g-4 justify-content-center">
                    <div class="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="blog-item">
                            <div class="blog-img">
                                <img src="img/blog-1.jpg" class="img-fluid rounded-top w-100" alt="" />
                                <div class="blog-date px-4 py-2"><i class="fa fa-calendar-alt me-1"></i> Jan 12 2025</div>
                            </div>
                            <div class="blog-content rounded-bottom p-4">
                                <a href="#" class="h4 d-inline-block mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde</a>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?</p>
                                <a href="#" class="fw-bold text-secondary">Read More <i class="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.4s">
                        <div class="blog-item">
                            <div class="blog-img">
                                <img src="img/blog-2.jpg" class="img-fluid rounded-top w-100" alt="" />
                                <div class="blog-date px-4 py-2"><i class="fa fa-calendar-alt me-1"></i> Jan 12 2025</div>
                            </div>
                            <div class="blog-content rounded-bottom p-4">
                                <a href="#" class="h4 d-inline-block mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde</a>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?</p>
                                <a href="#" class="fw-bold text-secondary">Read More <i class="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.6s">
                        <div class="blog-item">
                            <div class="blog-img">
                                <img src="img/blog-3.jpg" class="img-fluid rounded-top w-100" alt="" />
                                <div class="blog-date px-4 py-2"><i class="fa fa-calendar-alt me-1"></i> Jan 12 2025</div>
                            </div>
                            <div class="blog-content rounded-bottom p-4">
                                <a href="#" class="h4 d-inline-block mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde</a>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?</p>
                                <a href="#" class="fw-bold text-secondary">Read More <i class="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* //nine section */}

        <div class="container-fluid team pb-5">
            <div class="container pb-5">
                <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth:'800px'}}>
                    <h4 class="text-uppercase text-primary">Our Team</h4>
                    <h1 class="display-3 text-capitalize mb-3">What is Really seo & How Can I Use It?</h1>
                </div>
                <div class="row g-4">
                    <div class="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="team-item p-4">
                            <div class="team-inner rounded">
                                <div class="team-img">
                                    <img src="img/team-1.jpg" class="img-fluid rounded-top w-100" alt="Image" />
                                    <div class="team-share">
                                        <a class="btn btn-secondary btn-md-square rounded-pill text-white mx-1" href=""><i class="fas fa-share-alt"></i></a>
                                    </div>
                                    <div class="team-icon rounded-pill py-2 px-2">
                                        <a class="btn btn-secondary btn-sm-square rounded-pill mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-secondary btn-sm-square rounded-pill me-1" href=""><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-secondary btn-sm-square rounded-pill me-1" href=""><i class="fab fa-linkedin-in"></i></a>
                                        <a class="btn btn-secondary btn-sm-square rounded-pill me-1" href=""><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div class="bg-light rounded-bottom text-center py-4">
                                    <h4 class="mb-3">Hard Branots</h4>
                                    <p class="mb-0">CEO & Founder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                        <div class="team-item p-4">
                            <div class="team-inner rounded">
                                <div class="team-img">
                                    <img src="img/team-2.jpg" class="img-fluid rounded-top w-100" alt="Image" />
                                    <div class="team-share">
                                        <a class="btn btn-secondary btn-md-square rounded-pill text-white mx-1" href=""><i class="fas fa-share-alt"></i></a>
                                    </div>
                                    <div class="team-icon rounded-pill py-2 px-2">
                                        <a class="btn btn-secondary btn-sm-square rounded-pill mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-secondary btn-sm-square rounded-pill me-1" href=""><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-secondary btn-sm-square rounded-pill me-1" href=""><i class="fab fa-linkedin-in"></i></a>
                                        <a class="btn btn-secondary btn-sm-square rounded-pill me-1" href=""><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div class="bg-light rounded-bottom text-center py-4">
                                    <h4 class="mb-3">Hard Branots</h4>
                                    <p class="mb-0">CEO & Founder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                        <div class="team-item p-4">
                            <div class="team-inner rounded">
                                <div class="team-img">
                                    <img src="img/team-3.jpg" class="img-fluid rounded-top w-100" alt="Image" />
                                    <div class="team-share">
                                        <a class="btn btn-secondary btn-md-square rounded-pill text-white mx-1" href=""><i class="fas fa-share-alt"></i></a>
                                    </div>
                                    <div class="team-icon rounded-pill py-2 px-2">
                                        <a class="btn btn-secondary btn-sm-square rounded-pill mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-secondary btn-sm-square rounded-pill me-1" href=""><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-secondary btn-sm-square rounded-pill me-1" href=""><i class="fab fa-linkedin-in"></i></a>
                                        <a class="btn btn-secondary btn-sm-square rounded-pill me-1" href=""><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div class="bg-light rounded-bottom text-center py-4">
                                    <h4 class="mb-3">Hard Branots</h4>
                                    <p class="mb-0">CEO & Founder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                        <div class="team-item p-4">
                            <div class="team-inner rounded">
                                <div class="team-img">
                                    <img src="img/team-4.jpg" class="img-fluid rounded-top w-100" alt="Image" />
                                    <div class="team-share">
                                        <a class="btn btn-secondary btn-md-square rounded-pill text-white mx-1" href=""><i class="fas fa-share-alt"></i></a>
                                    </div>
                                    <div class="team-icon rounded-pill py-2 px-2">
                                        <a class="btn btn-secondary btn-sm-square rounded-pill mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-secondary btn-sm-square rounded-pill me-1" href=""><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-secondary btn-sm-square rounded-pill me-1" href=""><i class="fab fa-linkedin-in"></i></a>
                                        <a class="btn btn-secondary btn-sm-square rounded-pill me-1" href=""><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div class="bg-light rounded-bottom text-center py-4">
                                    <h4 class="mb-3">Hard Branots</h4>
                                    <p class="mb-0">CEO & Founder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* //footer */}

        <div class="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
            <div class="container py-5">
                <div class="row g-5 mb-5 align-items-center">
                    <div class="col-lg-7">
                        <div class="position-relative mx-auto">
                            <input class="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Email address to Subscribe" />
                            <button type="button" class="btn btn-secondary rounded-pill position-absolute top-0 end-0 py-2 px-4 mt-2 me-2">Subscribe</button>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="d-flex align-items-center justify-content-center justify-content-lg-end">
                            <a class="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i class="fab fa-instagram"></i></a>
                            <a class="btn btn-secondary btn-md-square rounded-circle me-0" href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div class="row g-5">
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="footer-item d-flex flex-column">
                            <div class="footer-item">
                                <h3 class="text-white mb-4"><i class="fas fa-hand-holding-water text-primary me-3"></i>Acuas</h3>
                                <p class="mb-3">Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.</p>
                            </div>
                            <div class="position-relative">
                                <input class="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
                                <button type="button" class="btn btn-secondary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="footer-item d-flex flex-column">
                            <h4 class="text-white mb-4">About Us</h4>
                            <a href="#"><i class="fas fa-angle-right me-2"></i> Why Choose Us</a>
                            <a href="#"><i class="fas fa-angle-right me-2"></i> Free Water Bottles</a>
                            <a href="#"><i class="fas fa-angle-right me-2"></i> Water Dispensers</a>
                            <a href="#"><i class="fas fa-angle-right me-2"></i> Bottled Water Coolers</a>
                            <a href="#"><i class="fas fa-angle-right me-2"></i> Contact us</a>
                            <a href="#"><i class="fas fa-angle-right me-2"></i> Terms & Conditions</a>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="footer-item d-flex flex-column">
                            <h4 class="text-white mb-4">Business Hours</h4>
                            <div class="mb-3">
                                <h6 class="text-muted mb-0">Mon - Friday:</h6>
                                <p class="text-white mb-0">09.00 am to 07.00 pm</p>
                            </div>
                            <div class="mb-3">
                                <h6 class="text-muted mb-0">Saturday:</h6>
                                <p class="text-white mb-0">10.00 am to 05.00 pm</p>
                            </div>
                            <div class="mb-3">
                                <h6 class="text-muted mb-0">Vacation:</h6>
                                <p class="text-white mb-0">All Sunday is our vacation</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="footer-item d-flex flex-column">
                            <h4 class="text-white mb-4">Contact Info</h4>
                            <a href="#"><i class="fa fa-map-marker-alt me-2"></i> 123 Street, New York, USA</a>
                            <a href="mailto:info@example.com"><i class="fas fa-envelope me-2"></i> info@example.com</a>
                            <a href="mailto:info@example.com"><i class="fas fa-envelope me-2"></i> info@example.com</a>
                            <a href="tel:+012 345 67890"><i class="fas fa-phone me-2"></i> +012 345 67890</a>
                            <a href="tel:+012 345 67890" class="mb-3"><i class="fas fa-print me-2"></i> +012 345 67890</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* <!-- Copyright Start --> */}

        <div class="container-fluid copyright py-4">
            <div class="container">
                <div class="row g-4 align-items-center">
                    <div class="col-md-6 text-center text-md-start mb-md-0">
                        <span class="text-body"><a href="#" class="border-bottom text-white"><i class="fas fa-copyright text-light me-2"></i>Your Site Name</a>, All right reserved.</span>
                    </div>
                    <div class="col-md-6 text-center text-md-end text-body">
                        Designed By <a class="border-bottom text-white" href="https://htmlcodex.com">HTML Codex</a> Distributed By <a class="border-bottom text-white" href="https://themewagon.com">ThemeWagon</a>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Copyright End --> */}

        {/* <!-- Back to Top --> */}
        <a href="#" class="btn btn-secondary btn-lg-square rounded-circle back-to-top"><i class="fa fa-arrow-up"></i></a>   
        

        {/* <!-- JavaScript Libraries --> */}
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="lib/wow/wow.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/waypoints/waypoints.min.js"></script>
        <script src="lib/counterup/counterup.min.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>

        {/* <!-- Template Javascript --> */}
        <script src="js/main.js"></script>

    </div>
  )
}


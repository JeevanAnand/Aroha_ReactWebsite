import React from "react";
import Logo from "../images/logosmall.png";
import OpenBook from "../images/icon/open-book.png";
import MobileApp from "../images/icon/mobile-app.png";
import About from "../images/icon/about.png";
import Sales from "../images/icon/sales.png";
import CashFlow from "../images/icon/cash-flow.png";
import Infrastructure from "../images/icon/infrastructure.png";
import Descriptor from "../images/icon/descriptor.png";
import StoryTelling from "../images/icon/storytelling.png";
import OpenSource from "../images/icon/open-source.png";
import Webinar from "../images/icon/webinar.png";
import BigData from "../images/icon/big-data.png";
import Cloud from "../images/icon/cloud-computing.png";
import SocialMedia from "../images/icon/social-media.png";
import CustomerService from "../images/icon/customer-service.png";
import Thought from "../images/icon/thought.png";
import Managed from "../images/icon/managed.png";
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div id="site-header">
      <header id="header" class="header clearfix">
        <div class="header-wrap clearfix">
          <div class="container">
            <div class="row">
              <div class="flat-wrapper">
                <div id="logo" class="logo">
                  <img src={Logo} alt="images" />
                </div>
                <div class="btn-menu">
                  <span></span>
                </div>

                <div class="nav-wrap">
                  <nav id="mainnav" class="mainnav">
                    <ul class="menu">
                      <li class="home active">
                        <Link  to="/home">Home</Link> 
                      </li>

                      <li class="resources has-mega-menu">
                        <Link  class="has-mega" to="#">
                          Platform
                        </Link> 
                        <div class="submenu mega-menu menu2">
                          <div class="col-md-12 tabs-container">
                            <div class="col-md-3 col-sm-10 no-padding1">
                              <ul class="nav nav-tabs tabs-left">
                                <li
                                  class="active"
                                  id="defaultOpen"
                                  onmouseover="learning(event, 'tab1-v')"
                                >
                                  Learning360.AI
                                </li>
                                <li onmouseover="openSales(event, 'tab2-v')">
                                  My360.AI
                                </li>
                              </ul>
                            </div>

                            <div class="col-md-8 col-sm-10 no-padding1">
                              <div class="tab-content">
                                <div class="tabpane active tab" id="tab1-v">
                                  <ul class="border-right">
                                    <li class="span-text">
                                      <Link  to="/aboutLearning">
                                        <img src={OpenBook} />
                                        <span>About Learning360.AI</span>
                                      </Link> 
                                    </li>
                                    <li class="span-text">
                                      <Link  to="/appsinlearning">
                                        <img src={MobileApp} />
                                        <span>Apps in Platform</span>
                                      </Link> 
                                    </li>
                                  </ul>
                                  <div class="clearfix"></div>
                                </div>
                                <div class="tabpane active tab" id="tab2-v">
                                  <ul class="border-right">
                                    <li class="span-text">
                                      <Link  to="/aboutMy360">
                                        <img src={About} />
                                        <span>About My360.AI </span>
                                      </Link> 
                                    </li>
                                    <li class="span-text">
                                      <Link  to="/salesAnalytics">
                                        <img src={Sales} />
                                        <span>Sales Analytics </span>
                                      </Link> 
                                    </li>
                                    <li class="span-text">
                                      <Link  to="/financialAnalytics">
                                        <img src={CashFlow} />
                                        <span>Cash Flow Analytics </span>
                                      </Link> 
                                    </li>
                                  </ul>
                                  <div class="clearfix"></div>
                                </div>
                              </div>
                              <div class="clearfix"></div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li class="has-mega-menu">
                        <Link  class="has-mega" to="#">
                          Technologies
                        </Link> 
                        <div class="submenu mega-menu menu2">
                          <div class="col-md-12 tabs-container">
                            <div class="col-md-3 col-sm-10 no-padding1">
                              <ul class="nav nav-tabs tabs-left">
                                <li
                                  class="active"
                                  id="defaultOpen1"
                                  onmouseover="learning1(event, 'tab1-v1')"
                                >
                                  Data
                                </li>
                                <li onmouseover="openSales1(event, 'tab2-v2')">
                                  Digital
                                </li>
                              </ul>
                            </div>
                            <div class="col-md-9 col-sm-10 no-padding1">
                              <div class="tab-content">
                                <div class="tabpane1 active tab1" id="tab1-v1">
                                  <ul class="border-right">
                                    <li class="span-text">
                                      <Link  to="/dataManagement">
                                        <img src={Infrastructure} />
                                        <span>Data Management</span>
                                      </Link> 
                                    </li>
                                    <li class="span-text">
                                      <Link  to="/dataIntegration">
                                        <img src={Descriptor} />
                                        <span>
                                          Data Integration and Virtualization
                                        </span>
                                      </Link> 
                                    </li>
                                    <li class="span-text">
                                      <Link  to="/dataReport">
                                        <img src={StoryTelling} />
                                        <span>Data Story Telling</span>
                                      </Link> 
                                    </li>
                                    <li class="span-text">
                                      <Link  to="/openSource">
                                        <img src={OpenSource} />
                                        <span>Open Source</span>
                                      </Link> 
                                    </li>
                                  </ul>
                                  <div class="clearfix"></div>
                                </div>
                                <div class="tabpane1" id="tab2-v2">
                                  <ul class="border-right">
                                    <li class="span-text">
                                      <Link  to="/digitalTechnologies">
                                        <img src={Webinar} />
                                        <span>Digitalization</span>
                                      </Link> 
                                    </li>
                                    <li class="span-text">
                                      <Link  to="/dataWarehousing">
                                        <img src={BigData} />
                                        <span>Data Warehouse & Data Lakes</span>
                                      </Link> 
                                    </li>
                                    <li class="span-text">
                                      <Link  to="/cloudTechnologies">
                                        <img src={Cloud} />
                                        <span>Cloud Technologies</span>
                                      </Link> 
                                    </li>
                                    <li class="span-text">
                                      <Link  to="/mobileTechnologies">
                                        <img src={SocialMedia} />
                                        <span>Mobile Technologies</span>
                                      </Link> 
                                    </li>
                                  </ul>
                                  <div class="clearfix"></div>
                                </div>
                              </div>
                            </div>
                            <div class="clearfix"></div>
                          </div>
                        </div>
                      </li>
                      <li class="has-mega-menu">
                        <Link  class="has-mega" to="#mega">
                          Services
                        </Link> 
                        <div class="submenu mega-menu menu2 menu3">
                          <div class="col-md-12 col-sm-10 padding1">
                            <ul class="border-right">
                              <li class="span-text">
                                <Link  to="/consultingServices">
                                  <img src={CustomerService} />
                                  <span>Consulting Services</span>
                                </Link> 
                              </li>
                              <li class="span-text">
                                <Link  to="/knowledgeServices">
                                  <img src={Thought} />
                                  <span>Knowledge Services</span>
                                </Link> 
                              </li>
                              <li class="span-text">
                                <Link  to="/managedServices">
                                  <img src={Managed} />
                                  <span>Managed Services</span>
                                </Link> 
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li class="resources has-mega-menu">
                        <Link  class="has-mega" to="#">
                          Resources
                        </Link> 
                        <div class="submenu mega-menu menu2">
                          <div class="row">
                            <div class="col-md-6">
                              <div class="mega-title">
                                <h5 class="btn-mega">BLOGPOSTS</h5>
                              </div>
                              <ul class="mega-menu-sub">
                                <li>
                                  <Link  to="blog-EltActivity.html">
                                    Top 10 ETL Activities in DW Projects
                                  </Link> 
                                </li>
                                <li>
                                  <Link  to="blog-storytelling.html">
                                    Finding Story / 360 in Data sets
                                  </Link> 
                                </li>
                                <li>
                                  <Link  to="blog-platform.html">
                                    Importance of Analytics Platform for Small
                                    Business
                                  </Link> 
                                </li>
                                <li>
                                  <Link  to="blog.html" class="resources_data">
                                    See more blogs
                                  </Link> 
                                </li>
                              </ul>
                            </div>
                            <div class="col-md-6">
                              <div class="mega-title">
                                <h5 class="btn-mega">Books</h5>
                              </div>
                              <ul class="mega-menu-sub">
                                <li>
                                  <Link  to="books.html">
                                    ABC dataWarehousing
                                  </Link> 
                                </li>
                                <li>
                                  <Link  to="books1.html">
                                    Retail 101 Glossary
                                  </Link> 
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li class="resources has-mega-menu">
                        <Link  class="has-mega" to="#">
                          Company
                        </Link> 
                        <div class="submenu mega-menu menu">
                          <div class="row">
                            <div class="col-md-4">
                              <div class="mega-title">
                                <h5 class="btn-mega">About</h5>
                              </div>
                              <ul class="mega-menu-sub">
                                <li>
                                  <Link  to="approach.html">Our Approach</Link> 
                                </li>
                                <li>
                                  <Link  to="culture.html">Our Culture</Link> 
                                </li>
                                <li>
                                  <Link  to="team.html">Our Team</Link> 
                                </li>
                              </ul>
                            </div>
                            <div class="col-md-4 ">
                              <div class="mega-title">
                                <h5 class="btn-mega">Careers</h5>
                              </div>
                              <ul class="mega-menu-sub">
                                <li>
                                  <Link  to="career.html">.NET Developer</Link> 
                                </li>
                                <li>
                                  <Link  to="career1.html">
                                    Angular Developer
                                  </Link> 
                                </li>
                                <li>
                                  <Link  to="career2.html">
                                    MSBI Developer
                                  </Link> 
                                </li>
                                <li>
                                  <Link 
                                    to="positions.html"
                                    class="resources_data"
                                  >
                                    See All Positions
                                  </Link> 
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <Link  to="contact.html">Contact</Link> 
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;

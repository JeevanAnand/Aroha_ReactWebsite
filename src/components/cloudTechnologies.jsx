import React from 'react';
import AWS from "../images/technologies/aws.png"
import DO from "../images/technologies/DO.png"
import MA from "../images/technologies/MA.png"


const CloudTechnologies = () => {
  return (
  
      <div id="site-content">
        <div className="flat-row pad-top100px pad-bottom100px parallax parallax10">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title-section text-center ">
                  <h2 className="title color-ccc">Cloud Technologies</h2>
                  <div className="title color-333333">
                    <strong>CLOUD</strong> is the ability to host a software
                    platform or service from a remote location that can be
                    freely accessed and used anywhere via Internet access..
                  </div>
                </div>
                {/* /.title-section */}
                <div className="flat-divider d60px" />
              </div>
              {/* /.col-md-12 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.flat-row */}
        <div className="flat-row">
          <div className="container">
            <div className="row">
              <div className="page-title text-center">
                <h2 className="title">Our expertise in Cloud Technologies</h2>
              </div>
            </div>
            {/* /.row */}
            <div className="row pad-bottom60px">
              <div className="col-md-4">
                <div className="imagebox">
                  <div className="box-wrapper">
                    <div className="box-image1">
                      <a href="#">
                        <img src={AWS} alt="images" />
                      </a>
                    </div>
                    <div className="box-header">
                      <h3 className="box-title">
                        <a href="#">Amazon Web Services (AWS) </a>
                      </h3>
                    </div>
                    <div className="box-content text-justify">
                      <div className="box-desc">
                        In Aroha, we use most of the services in AWS. Most of
                        our production applications have been deployed in AWS
                        EC2 Instances. <br />
                      </div>
                    </div>
                  </div>
                  {/* /.box-wrapper */}
                </div>
                {/* /.imagebox   */}
              </div>
              {/* /.col-md-3 */}
              <div className="col-md-4">
                <div className="imagebox">
                  <div className="box-wrapper">
                    <div className="box-image1">
                      <a href="#">
                        <img src={DO} alt="images" />
                      </a>
                    </div>
                    <div className="box-header">
                      <h3 className="box-title">
                        <a href="#">Digital Ocean</a>
                      </h3>
                    </div>
                    <div className="box-content">
                      <div className="box-desc text-justify">
                        Most of our development &amp; Testing servers lies in
                        Digital Ocean droplets and also in Kubernetes cluster.
                      </div>
                    </div>
                  </div>
                  {/* /.box-wrapper */}
                </div>
                {/* /.imagebox   */}
              </div>
              {/* /.col-md-3 */}
              <div className="col-md-4">
                <div className="imagebox">
                  <div className="box-wrapper">
                    <div className="box-image1">
                      <a href="#">
                        <img src={MA} alt="images" />
                      </a>
                    </div>
                    <div className="box-header">
                      <h3 className="box-title">
                        <a href="#">Micorsoft Azure</a>
                      </h3>
                    </div>
                    <div className="box-content text-justify">
                      <div className="box-desc">
                        Most of our POS applications built by using .NET
                        framework lies on Microsoft Azure cloud. We use some of
                        services in Azure.
                      </div>
                    </div>
                  </div>
                  {/* /.box-wrapper */}
                </div>
                {/* /.imagebox   */}
              </div>
              {/* /.col-md-3 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        <div className="flat-row flat-row1">
          <div className="container">
            <div className="row">
              <div className="page-title text-center">
                <h2 className="title">Used Technologies</h2>
              </div>
            </div>
            {/* /.row */}
            <div className="flat-row  pad-top60px pad-bottom60px">
              <div className="container">
                <div className="row">
                  <div className="col-md-2">
                    <div className="iconbox style_2">
                      <div className="box-header">
                        <div className="box-icon">
                          <i className="fa fa-server" />
                        </div>
                        <h5 className="box-title">Virtualization</h5>
                      </div>
                      <div className="box-content">
                        <ul align="center">
                          <li>VMware</li>
                          <li>Virtual Box</li>
                        </ul>
                        {/* <span class="font-size-14px"><b>1)Html,Css,Javascript</b><br><b>2)ReactJs,AngularJs</b><br><b>3)jquery</b></span>                                        
                                          <p class="box-readmore">
                                              <a href="#">Read More</a>
                                          </p> */}
                      </div>
                    </div>
                  </div>
                  {/* /.col-md-3 */}
                  <div className="col-md-2">
                    <div className="iconbox style_2">
                      <div className="box-header">
                        <div className="box-icon">
                          <i className="fa fa-cloud" />
                        </div>
                        <h5 className="box-title">Public Cloud</h5>
                      </div>
                      <div className="box-content">
                        <ul align="center">
                          <li>Amazon Web Services</li>
                          <li>Microsoft Azure</li>
                          <li>Google Cloud</li>
                        </ul>
                        {/*  <span class="font-size-14px"><b>1)PHP,PHPLaravel</b><br><b>2)NodeJS,.NET</b><br><b>3)Phython</b></span>                                        
                                          <p class="box-readmore">
                                              <a href="#">Read More</a>
                                          </p> */}
                      </div>
                    </div>
                  </div>
                  {/* /.col-md-3 */}
                  <div className="col-md-2">
                    <div className="iconbox style_2">
                      <div className="box-header">
                        <div className="box-icon">
                          <i className="fa fa-stack-exchange" />
                        </div>
                        <h5 className="box-title">Containersation</h5>
                      </div>
                      <div className="box-content">
                        <ul align="center">
                          <li>Docker</li>
                        </ul>
                        {/* <span class="font-size-14px"><b>1)Sql,MySql</b><br><b>2)MangoDB</b><br><b>3)jquery</b></span>                                        
                                          <p class="box-readmore">
                                              <a href="#">Read More</a>
                                          </p> */}
                      </div>
                    </div>
                  </div>
                  {/* /.col-md-3 */}
                  <div className="col-md-2">
                    <div className="iconbox style_2">
                      <div className="box-header">
                        <div className="box-icon">
                          <i className="fa fa-sitemap" />
                        </div>
                        <h5 className="box-title">Orchestration</h5>
                      </div>
                      <div className="box-content">
                        <ul align="center">
                          <li>Kubernetes</li>
                        </ul>
                        {/* <span class="font-size-14px"><b>1)Sql,MySql</b><br><b>2)MangoDB</b><br><b>3)jquery</b></span>                                        
                                          <p class="box-readmore">
                                              <a href="#">Read More</a>
                                          </p> */}
                      </div>
                    </div>
                  </div>
                  {/* /.col-md-3 */}
                  <div className="col-md-2">
                    <div className="iconbox style_2">
                      <div className="box-header">
                        <div className="box-icon">
                          <i className="fa fa-cogs" />
                        </div>
                        <h5 className="box-title">Automation</h5>
                      </div>
                      <div className="box-content">
                        <ul align="center">
                          <li>Ansible</li>
                          <li>Chef</li>
                        </ul>
                        {/* <span class="font-size-14px">Adapt your business to the new market conditions. Redefine your strategy, restructure your debt.</span>                                        
                                          <p class="box-readmore">
                                              <a href="#">Read More</a>
                                          </p> */}
                      </div>
                    </div>
                  </div>
                  {/* /.col-md-3 */}
                  <div className="col-md-2">
                    <div className="iconbox style_2">
                      <div className="box-header">
                        <div className="box-icon">
                          <i className="fa fa-github" />
                        </div>
                        <h5 className="box-title">CI/CD</h5>
                      </div>
                      <div className="box-content">
                        <ul align="center">
                          <li>Git</li>
                          <li>Jenkins</li>
                        </ul>
                        {/* <span class="font-size-14px">Adapt your business to the new market conditions. Redefine your strategy, restructure your debt.</span>                                        
                                          <p class="box-readmore">
                                              <a href="#">Read More</a>
                                          </p> */}
                      </div>
                    </div>
                  </div>
                  {/* /.col-md-3 */}
                </div>
                {/* /.row */}
              </div>
              {/* /.container */}
            </div>
            {/* /.flat-row */}
          </div>
        </div>
      </div>
 
  );
};

export default  CloudTechnologies;

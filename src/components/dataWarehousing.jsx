import React from 'react';
import DAC from "../images/technologies/data-analytics-in-the-cloud.jpg"
import TWC from "../images/technologies/traditional.jpg"
import DataLake from "../images/technologies/datalake1.png"
import Microsoft from "../images/technologies/microsoft.jpg"
import Tera from "../images/technologies/Teradata.png"
import Azure from "../images/technologies/AzureCloud.jpg"
import Df from "../images/technologies/dataFactory.png"
import PBI from "../images/technologies/Power-BI.png"
import AS from "../images/technologies/azuraStorage.png"
import AWS from "../images/technologies/aws.png"
import Gate from "../images/technologies/gateway.png"


const DataWarehousing = () => {
  return (
    <div id="site-content">
      <div className="flat-row pad-top100px pad-bottom100px parallax parallax9">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-section text-center ">
                <h2 className="title color-ccc">
                  Data Warehouse &amp; Data Lakes
                </h2>
                <div className="title color-333333">
                  Every organization builds Data Analytical Platforms for
                  analyzing business operations <br />
                  to get insights and foresights.
                  <br />
                  We work with both Analytical Platforms like
                  <ul className="c1">
                    {/* <li>Data Analytics Platform</li> */}
                    <li>Traditional Data Warehouse</li>
                    <li>Data Lakes</li>
                  </ul>
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
      <div className="flat-row  pad-bottom20px color-sss">
        <div className="title-section ">
          <h3 className="title1 text-center pad-top60px">Our Activities</h3>
        </div>
        {/* /.title-section */}
        <div className="how-section1">
          <div className="row">
            <div className="col-md-6 ">
              <img
                src={DAC}
                className="rounded-circle img-fluid"
                alt
              />
            </div>
            <div className="col-md-6">
              <h4>Data Analytical Platform</h4>
              {/* <h4 class="subheading">GetLance is a great place to find more clients, and to run and grow your own freelance business.</h4> */}
              <p className="text-muted text-justify">
                Data is being a blood line for multiple organization to run
                their business and strategies the management decisions. We have
                two different types of analytical platforms in the organization
                as of today, one the traditional Data warehousing technologies
                and newer Data Lake technologies.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h4>Traditional Data Warehouse</h4>
              {/* <h4 class="subheading">GetLance makes it easy to connect with clients and begin doing great work.</h4> */}
              <p className="text-muted text-justify">
                As a company, we are well versed with both Bill Inmon way of
                implementing the Enterprise Data warehousing (CIF Approach) and
                Ralph Kimball way implementing the Data Warehouse (Data Mart
                Approach). Corporate Information Factory (CIF) approach is the
                top down approach where all the raw materials are readily
                available to mold any model / generate any report business
                needs. Data Mart approach follows the bottom up approach, we can
                call it as objective based solution as the problem is predefined
                and the end result is visualized. Based on the resources
                available in the organization, Data team picks the suitable
                model to implement.
              </p>
            </div>
            <div className="col-md-6 ">
              <img
                src={TWC}
                className="rounded-circle img-fluid"
                alt
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 ">
              <img
                src={DataLake}
                className="rounded-circle img-fluid"
                alt
              />
            </div>
            <div className="col-md-6">
              <h4>Data Lakes</h4>
              <p className="text-muted text-justify">
                As the cloud adoption, storage and computation advancements, the
                newer platform to consolidate and integrate data came into
                existence. Data Lake’s purpose of existence is as same as Data
                warehouse, but the principles and processes are a bit different.
                End users of Data Lakes are not only business users (as in DW),
                here end users are Data Scientists and other analytical users.
                Here we tend to store data in raw data to increase the
                flexibility of usage. The accessibility of this data is very
                high. We store all kinds of data (structured, semi structured
                and un-structured) in the Data Lake. In the traditional data
                warehouse we have to convert all the events, information into a
                structured form so that business professionals can understand.
                As the ML and AI is in the mainstream in different domains, the
                data lake utilization is very high as the need keeps changing
                very rapidly until we optimize the model to the acceptable
                business clause. Data Lakes are typically created with a cloud
                infrastructure or in an on premises Big Data Platform. We worked
                in AWS Data Lake, Azure Data Lake and Big Data technologies to
                implement Data Lakes for our customers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flat-row parallax parallax1 pad-top60px pad-bottom60px">
        <div className="container">
          <div className="row">
            <div className="page-title text-center">
              <h2 className="title">Projects are in Data Warehouse</h2>
            </div>
          </div>
          {/* /.row */}
          <div className="row">
            <div className="col-md-12">
              <div
                className="flat-iconbox-carousel carousel slide carousel-fade"
                data-item="4"
                data-nav="false"
                data-dots="true"
                data-ride="carousel"
                data-interval="5000"
              >
                <div className="iconbox style_3">
                  <div className="box-header">
                    <div className="box-icon">
                      <i className="fa icons icon-chart" />
                    </div>
                    <h5 className="box-title">
                      Employees Consulting Integration Data Mart
                    </h5>
                  </div>
                  <div className="box-content">
                    <article>
                      <span>
                        As a Global company in consulting, the staff
                        augmentation division generates around 70% of the
                        revenue through various customers across US, Canada and
                        Europe. This project is created to consolidate the
                        invoicing and payment follow up process. Currently each
                        division of the company have different process in
                        integration of data which was delaying the invoice
                        processing. Our team worked in three different geo teams
                        and understand the source of the data, process and the
                        reports they generate. Created a Data Mart Solution
                        using Microsoft Business Intelligence platform to
                        normalize the data, apply the business rules according
                        to the different geo’s and customer based rules to
                        process the time sheet. Created 8 star schemas to store
                        the required data and populated the data using SSIS from
                        ERP systems, customer systems and third party processed
                        files. Built the reports for MIS using SSRS and send the
                        required data to the downstream applications
                      </span>
                    </article>
                  </div>
                </div>
                <div className="iconbox style_3">
                  <div className="box-header">
                    <div className="box-icon">
                      <i className="fa fa-mixcloud icon" />
                    </div>
                    <h5 className="box-title">Logistics Data Lake </h5>
                  </div>
                  <div className="box-content">
                    <article>
                      <span>
                        As part of the Digital transformation road map, the
                        company wants to integrate the data across all the geo’s
                        to make the decisions faster both in operations and
                        managerial decision making. As part of the
                        implementation, created the solution using different AWS
                        services and ETL tools to generate the value for every
                        data set. Created a Master Data Management for two
                        subject areas of the business and recommended the data
                        governance to improve the data quality. This Data Lake
                        is the center piece to make the digital transformation
                        possible as there are too many legacy systems in the
                        environment.
                      </span>
                    </article>
                  </div>
                </div>
                <div className="iconbox style_3">
                  <div className="box-header">
                    <div className="box-icon">
                      <i className="fa icons icon-globe" />
                    </div>
                    <h5 className="box-title">Construction Data Lake</h5>
                  </div>
                  <div className="box-content">
                    <article>
                      <span>
                        A Leading Construction company executes the projects
                        across US with more than 20000 assets and 10000
                        personals at various sites. Company decided to
                        consolidate the data using Microsoft Azure Data Lake.
                        Worked with business team to understand the types of
                        projects, types of implementations, types of contracts
                        and types of third party agencies through which we deal
                        with to execute projects. Created the data lake which
                        has the landing zone, transformation zone and curated
                        zone to take care of data consolidation for regulation
                        and analytics. We used Azure Storage (Blob) in landing
                        zone and transformation zone and Azure SQL Database for
                        Curated Zone. Used Azure Data Factory as the Integration
                        software, SSAS Tabular Model for the BI Layer and
                        PowerBI as the Visualization tool. Exposed the data to
                        the downstream applications using API’s.
                      </span>
                    </article>
                  </div>
                </div>
                <div className="iconbox style_3">
                  <div className="box-header">
                    <div className="box-icon">
                      <i className="fa icons icon-layers" />
                    </div>
                    <h5 className="box-title">
                      Food Processing Data Warehouse
                    </h5>
                  </div>
                  <div className="box-content">
                    <article>
                      <span>
                        The Project was on the Poultry Companywhich is one of
                        the leading Poultry in India, the purpose of the project
                        was to collect data from different sources and create
                        report as the requirement of the client and to create
                        dashboard for the separate wing of the poultry like the
                        Hatchery, Breeder, Broiler and Feed Mill. The dashboard
                        created were-
                        <br />• Performance P&amp;L Dashboard
                        <br /> • Breeder Performance Technical analysis
                        <br /> • Broiler Performance Technical analysis
                        <br /> • Hatchery Performance Technical analysis
                        <br />• Flock Analysis&amp;Feed Mill Dashboard
                        <br />
                        Along with using Custom Visuals for date Hierarchy at
                        visual level and also using complex DAX to achieve the
                        solution for the clients.
                      </span>
                    </article>
                  </div>
                </div>
              </div>
              {/* /.flat-gallery-carousel */}
            </div>
            {/* /.col-md-12 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
      {/* /.flat-row */}
      <div className="flat-row flat-row1">
        <div className="container">
          <div className="row">
            <div className="page-title text-center">
              <h2 className="title">Technologies Uesd in Data Warehouse</h2>
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
                        <img
                          src={Microsoft}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">SQL Server</h5>
                    </div>
                    <div className="box-content">
                      {/* <span class="font-size-14px">• MS SQL Server, MYSQL, Migration Scripts, <br> • Reconciliation for Data Completeness</span>  */}
                      <p />
                    </div>
                  </div>
                </div>
                {/* /.col-md-3 */}
                <div className="col-md-2">
                  <div className="iconbox style_2">
                    <div className="box-header">
                      <div className="box-icon">
                        <img
                          src={Tera}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">TeraData</h5>
                    </div>
                    <div className="box-content">
                      {/* <span class="font-size-14px">•	Ubuntu Cron Jobs, MYSQL Stored Procedures, SQL<br></span>     */}
                    </div>
                  </div>
                </div>
                {/* /.col-md-3 */}
                <div className="col-md-2">
                  <div className="iconbox style_2">
                    <div className="box-header">
                      <div className="box-icon">
                        <img
                          src={Azure}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">Azure cloud</h5>
                    </div>
                    <div className="box-content">
                      {/* <span class="font-size-14px">• MS SQL Server, MYSQL, Migration Scripts, <br> • Reconciliation for Data Completeness</span>  */}
                      <p />
                    </div>
                  </div>
                </div>
                {/* /.col-md-3 */}
                <div className="col-md-2">
                  <div className="iconbox style_2">
                    <div className="box-header">
                      <div className="box-icon">
                        <img
                          src={Df}
                          className="tech-icon "
                        />
                      </div>
                      <h5 className="box-title">Data Factory</h5>
                    </div>
                    <div className="box-content">
                      {/* <span class="font-size-14px">•	Oracle, SQL, PLSQL, Shell Script, Tableau.<br>•	Mongo DB, AWS S3, Oracle, SQL Server, Python Scripts, Automation<br></span>                                         */}
                    </div>
                  </div>
                </div>
                {/* /.col-md-3 */}
                <div className="col-md-2">
                  <div className="iconbox style_2">
                    <div className="box-header">
                      <div className="box-icon">
                        <img
                          src={PBI}
                          className="tech-icon "
                        />
                      </div>
                      <h5 className="box-title">Power BI </h5>
                    </div>
                    <div className="box-content">
                      {/* <span class="font-size-14px">• MS SQL Server, MYSQL, Migration Scripts, <br> • Reconciliation for Data Completeness</span>  */}
                      <p />
                    </div>
                  </div>
                </div>
                {/* /.col-md-3 */}
                <div className="col-md-2">
                  <div className="iconbox style_2">
                    <div className="box-header">
                      <div className="box-icon">
                        <img
                          src={AS}
                          className="tech-icon "
                        />
                      </div>
                      <h5 className="box-title">Azure Storage</h5>
                    </div>
                    <div className="box-content">
                      {/* <span class="font-size-14px">• MS SQL Server, MYSQL, Migration Scripts, <br> • Reconciliation for Data Completeness</span>  */}
                      <p />
                    </div>
                  </div>
                </div>
                {/* /.col-md-3 */}
              </div>
              {/* /.row */}
              <div className="row">
                <div className="col-md-2">
                  <div className="iconbox style_2">
                    <div className="box-header">
                      <div className="box-icon">
                        <img
                          src={AWS}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">AWS S3</h5>
                    </div>
                    <div className="box-content">
                      {/* <span class="font-size-14px">• MS SQL Server, MYSQL, Migration Scripts, <br> • Reconciliation for Data Completeness</span>  */}
                      <p />
                    </div>
                  </div>
                </div>
                {/* /.col-md-3 */}
                <div className="col-md-2">
                  <div className="iconbox style_2">
                    <div className="box-header">
                      <div className="box-icon">
                        <img
                          src={Gate}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">API Gateway with Lamda</h5>
                    </div>
                    <div className="box-content">
                      {/* <span class="font-size-14px">• MS SQL Server, MYSQL, Migration Scripts, <br> • Reconciliation for Data Completeness</span>  */}
                      <p />
                    </div>
                  </div>
                </div>
                {/* /.col-md-3 */}
              </div>
              <div className="row"></div>
            </div>
            {/* /.container */}
          </div>
          {/* /.flat-row */}
        </div>
      </div>
    </div>
  );
};

export default DataWarehousing;

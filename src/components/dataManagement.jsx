import React from 'react';
import RDBMS from "../images/technologies/RDBMS.jpg"
import NoSql from "../images/technologies/nosql.png"
import BigData from "../images/technologies/bigdata.jpeg"
import Circle1 from "../images/activity/1.png"
import Circle2 from "../images/activity/2.png"
import Circle3 from "../images/activity/3.png"
import Circle4 from "../images/activity/4.png"
import Circle5 from "../images/activity/5.png"
import Oracle from "../images/technologies/oracle.png"
import Mysql from "../images/technologies/mysql.jpg"
import Microsoft from "../images/technologies/microsoft.jpg"
import Hadoop from "../images/technologies/hadoop.jpg"
import Postgres from "../images/technologies/postgresql.png"
import Mongo from "../images/technologies/mongodb.jpg"
import Ibm from "../images/technologies/ibmdb2.png"
import Sybase from "../images/technologies/sybase.png"


const DataManagement = () => {
    return ( 
        <div id="site-content">
  <div className="flat-row pad-top100px pad-bottom100px parallax parallax6">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="title-section text-center">
            <h2 className="title color-ccc">Data Management</h2>
            <div className="title color-333333">
              Data is the Soil for an organization. By managing it very effectively <br />we can add value to business and monetize it on <br />various opportunities.
              <br />
              <ul className="c1">
                <li>Structured / Repetitive Data</li>
                <li>Semi Structured / Non Repetitive Data</li>
                <li>Un Structured Data</li>
              </ul>
            </div>
          </div>{/* /.title-section */}
        </div>{/* /.col-md-12 */}
      </div>{/* /.row */}
    </div>{/* /.container */}
  </div>{/* /.flat-row */}
  <div className="flat-row pad-top0px pad-bottom20px">
    <div className="image-single style_1 clearfix">
      <div className="item-two-column section-iconlist">
        <div className="title-section style_1">
          <h3 className="title">We provide our servies in the following activities</h3>  
          <div className="desc">
            In the current environment we live in, we tend to capture all the events in a business. As we are capturing every heart beat in few businesses, the velocity of the data defines the usage of the technology as well. The faster we get the data, the better the infrastructure should be. Typical transactions in million transactions a day is taken care by traditional RDBMS, anything we have options to choose from NoSQL to Big Data technologies as our Data Storage option.
          </div>                      
        </div>
        <div className="flat-divider d30px" />
        {/* <p>Managing digital data in an organization involves a broad range of tasks, policies, procedures, and practices. The work of Data Managment has a wide scope, covering factors such as how to</p> */}
        <bold>We have different technologies in play to capture the different kinds of data</bold>
        <blockquote><p>1)Traditional Tabular Structure &amp; Columnar Structure way of storing Data (RDBMS)<br />
            2)NoSQL Databases to capture the Semi Structured Data (more flexible and scalable)<br />
            3)Big Data &amp; Object Storage to store Un Structured Data<br />
            {/* <p>A formal Data Managment strategy addresses the activity of users and administrators, the capabilities of Data Managment technologies, the demands of regulatory requirements, and the needs of the organization to obtain value from its data.</p> */}
          </p><div className="flat-divider d30px" />
        </blockquote></div>{/* /.item-two-column */}
      <div className="item-two-column mag-left flat-single-image-autoheight-style1 flat-single-image-autoheight-style3">
      </div>{/* /.item-two-column */}
    </div>{/* /.image-single */}
  </div>{/* /.flat-row */}
  <div className="flat-row  bg-f7f7f7">
    <div className="container">
      <div className="row">
        <div className="page-title text-center">
          <h2 className="title">Data Managment Services</h2>
        </div>
      </div>{/* /.row */}
      <div className="row pad-bottom60px">
        <div className="col-md-4">
          <div className="imagebox">
            <div className="box-wrapper">
              <div className="box-image1">
                <a href="#"><img src={RDBMS} alt="images" /></a>
              </div>
              <div className="box-header">
                <h3 className="box-title">
                  <a href="#">Structured / Repetitive Data</a>    
                </h3>
              </div>
            </div>{/* /.box-wrapper */}
          </div>{/* /.imagebox   */}
        </div>{/* /.col-md-3 */}
        <div className="col-md-4">
          <div className="imagebox">
            <div className="box-wrapper">
              <div className="box-image1">
                <a href="#"><img src={NoSql} alt="images" /></a>
              </div>
              <div className="box-header">
                <h3 className="box-title">
                  <a href="#">Semi Structured / Non Repetitive Data</a>    
                </h3>
              </div>
            </div>{/* /.box-wrapper */}
          </div>{/* /.imagebox   */}
        </div>{/* /.col-md-3 */}
        <div className="col-md-4">
          <div className="imagebox">
            <div className="box-wrapper">
              <div className="box-image1">
                <a href="#"><img src={BigData} alt="images" /></a>
              </div>
              <div className="box-header">
                <h3 className="box-title">
                  <a href="#">Un Structured Data </a>    
                </h3>
              </div>
            </div>{/* /.box-wrapper */}
          </div>{/* /.imagebox   */}
        </div>{/* /.col-md-3 */}
      </div>{/* /.row */}
    </div>{/* /.container */}
  </div>
  <div className="flat-row  pad-bottom20px color-sss">
    <div className="title-section ">
      <h3 className="title1 text-center pad-top60px">Our Activities</h3>
    </div>{/* /.title-section */}
    <div className="how-section1">
      <div className="row">
        <div className="col-md-6 how-img">
          <img src={Circle1} className="rounded-circle img-fluid" alt />
        </div>
        <div className="col-md-6">
          <h4>Data Re-engineering</h4>
          {/* <h4 class="subheading">GetLance is a great place to find more clients, and to run and grow your own freelance business.</h4> */}
          <p className="text-muted">Data reengineering extends the life of existing systems by standardizing data definitions and facilitating source code simplification. It can also provide an accurate data model for use as a starting point in data modeling and database technology migration and as a preparation step for reverse engineering.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h4>Data Processing</h4>
          {/* <h4 class="subheading">GetLance makes it easy to connect with clients and begin doing great work.</h4> */}
          <p className="text-muted">Data processing occurs when data is collected and translated into usable information. Usually performed by a data scientist or team of data scientists, it is important for data processing to be done correctly as not to negatively affect the end product, or data output.</p>
        </div>
        <div className="col-md-6 how-img">
          <img src={Circle2}  className="rounded-circle img-fluid" alt />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 how-img">
          <img src={Circle3}  className="rounded-circle img-fluid" alt />
        </div>
        <div className="col-md-6">
          <h4>Data Architecture</h4>
          {/* <h4 class="subheading">With GetLance, you have the freedom and flexibility to control when, where, and how you work. Each project includes an online workspace shared by you and your client, allowing you to:</h4> */}
          <p className="text-muted">Data Architecture “includes specifications used to describe existing state, define data requirements, guide data integration, and control data assets as put forth in a data strategy.” Data Architecture bridges business strategy and technical execution, and according to our 2017 Trends in Data Architecture Report</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h4>Data Analysis</h4>
          {/* <h4 class="subheading">All projects include GetLance Payment Protection — helping ensure that you get paid for all work successfully completed through the freelancing website.</h4> */}
          <p className="text-muted">Data analysis is defined as a process of cleaning, transforming, and modeling data to discover useful information for business decision-making. The purpose of Data Analysis is to extract useful information from data and taking the decision based upon the data analysis.</p>
        </div>
        <div className="col-md-6 how-img">
          <img src={Circle4} className="rounded-circle img-fluid" alt />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 how-img">
          <img src={Circle5} className="rounded-circle img-fluid" alt />
        </div>
        <div className="col-md-6">
          <h4>Data Migration </h4>
          {/* <h4 class="subheading">With GetLance, you have the freedom and flexibility to control when, where, and how you work. Each project includes an online workspace shared by you and your client, allowing you to:</h4> */}
          <p className="text-muted">Data migration is the process of moving data from one location to another, one format to another, or one application to another. Generally, this is the result of introducing a new system or location for the data. The business driver is usually an application migration or consolidation in which legacy systems are replaced or augmented by new applications that will share the same dataset. These days, data migrations are often started as firms move from on-premises infrastructure and applications to cloud-based storage and applications to optimize or transform their company.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="flat-row parallax parallax1 pad-top60px pad-bottom60px">
    <div className="container">
      <div className="row">
        <div className="page-title text-center">
          <h2 className="title">Projects are in Data Managment</h2>
        </div>
      </div>{/* /.row */}
      <div className="row">
        <div className="col-md-12">
          <div className="flat-iconbox-carousel carousel slide carousel-fade" data-item="4" data-nav="false" data-dots="true" data-ride="carousel" data-interval={5000}>
            <div className="iconbox style_3">
              <div className="box-header">
                <div className="box-icon">
                  <i className="fa icons icon-chart" />
                </div>
                <h5 className="box-title">Migration of SQL Server to MYSQL</h5>
              </div>
              <div className="box-content">
                <article><span className="font-size-14px">Migrate the SQL Server environment to open source MYSQL environment. Created ec2 instance to host MYSQL and moved data from SQL Server to MYSQL database.. Managed both instances in parallel to support business continuity until stabilization period over.</span></article>                                     
              </div>
            </div>
            <div className="iconbox style_3">
              <div className="box-header">
                <div className="box-icon">
                  <i className="fa fa-mixcloud icon" />
                </div>
                <h5 className="box-title">Nightly Data Processing for Audit &amp; Regulation Reporting</h5>
              </div>
              <div className="box-content">
                <article><span className="font-size-14px">Regulation requirement is to give snapshot of inventory at any given day from stores.As companies implemented dynamic pricing this regulation reports make sure business don’t take advantage of reporting low quantity in hand to exploit customers. Sending Data automatically to downstream applications (CSV and JSON) automatically (configurable)</span></article>
              </div>
            </div>
            <div className="iconbox style_3">
              <div className="box-header">
                <div className="box-icon">
                  <i className="fa icons icon-globe" />
                </div>
                <h5 className="box-title">Optimizing Data Loads and Querying</h5>
              </div>
              <div className="box-content">
                <article><span className="font-size-14px">Unexpected high volume of data consumption for required analysis forced the applications not to perform. Moved the data processing logic out of application and enable the bulk load to reach to the required speed.Built stored procedures and mat views to improve the performance of reports. </span>                                        
                </article></div>
            </div>
            <div className="iconbox style_3">
              <div className="box-header">
                <div className="box-icon">
                  <i className="fa icons icon-layers" />
                </div>
                <h5 className="box-title">Meta Data Layer for a DW</h5>
              </div>
              <div className="box-content">
                <article><span className="font-size-14px">Built the data model and created scripts which extracts metadata from different sources like RDBMS, AWS S3 file structure and Mongo DB. o	Automation of loading metadata tables when there are new objects in the identified sources, landing zone, curated zone. This acts as the starting point to add information by business users.</span></article>                                        
              </div>
            </div>
            <div className="iconbox style_3">
              <div className="box-header">
                <div className="box-icon">
                  <i className="fa icons icon-calculator" />
                </div>
                <h5 className="box-title">Data Processing for MDM</h5>
              </div>
              <div className="box-content">
                <article><span className="font-size-14px">Profile the data to get completeness percentage, data fixing (business rules), and applying business rules to identify unique customers.o	Capture new entries in sources, filling the null values automatically to improve completeness and reporting to Data Governance through Data Quality Dashboards. </span></article>                                        
              </div>
            </div>
          </div>{/* /.flat-gallery-carousel */}
        </div>{/* /.col-md-12 */}
      </div>{/* /.row */}
    </div>{/* /.container */}
  </div>{/* /.flat-row */}
  <div className="flat-row flat-row1">
    <div className="container">
      <div className="row">
        <div className="page-title text-center">
          <h2 className="title">Technologies used in data managment</h2>
        </div>
      </div>{/* /.row */}
      <div className="flat-row  pad-top60px pad-bottom60px">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="iconbox style_2">
                <div className="box-header">
                  <div className="box-icon">
                    <img src={Oracle}className="tech-icon" />
                  </div>
                  <h5 className="box-title">Oracle</h5>
                </div>
                <div className="box-content">
                  {/* <span class="font-size-14px">•	Ubuntu Cron Jobs, MYSQL Stored Procedures, SQL<br></span>     */}
                </div>
              </div>
            </div>{/* /.col-md-3 */}
            <div className="col-md-2   ">
              <div className="iconbox style_2">
                <div className="box-header">
                  <div className="box-icon">
                    <img src={Mysql} className="tech-icon" />
                  </div>
                  <h5 className="box-title">MySQL</h5>
                </div>
                <div className="box-content">
                  {/* <span class="font-size-14px">• Physical Model Changes, Bulk Load (SQL Loader), <br>• Stored Procedures, Mat Views</span>                                         */}
                </div>
              </div>
            </div>{/* /.col-md-3 */}
            <div className="col-md-2">
              <div className="iconbox style_2">
                <div className="box-header">
                  <div className="box-icon">
                    <img src={Microsoft} className="tech-icon" />
                  </div>
                  <h5 className="box-title">MSSql</h5>
                </div>
                <div className="box-content">
                  {/* <span class="font-size-14px">• MS SQL Server, MYSQL, Migration Scripts, <br> • Reconciliation for Data Completeness</span>  */}
                  <p />
                </div>
              </div>
            </div>{/* /.col-md-3 */}   
            <div className="col-md-2">
              <div className="iconbox style_2">
                <div className="box-header">
                  <div className="box-icon">
                    <img src={Hadoop} className="tech-icon" />
                  </div>
                  <h5 className="box-title">Hadoop</h5>
                </div>
                <div className="box-content">
                  {/* <span class="font-size-14px">•	Ubuntu Cron Jobs, MYSQL Stored Procedures, SQL<br></span>     */}
                </div>
              </div>
            </div>{/* /.col-md-3 */}
            <div className="col-md-2">
              <div className="iconbox style_2">
                <div className="box-header">
                  <div className="box-icon">
                    <img src={Postgres} className="tech-icon" />
                  </div>
                  <h5 className="box-title">PostgreSQL</h5>
                </div>
                <div className="box-content">
                  {/* <span class="font-size-14px">• Physical Model Changes, Bulk Load (SQL Loader), <br>• Stored Procedures, Mat Views</span>                                         */}
                </div>
              </div>
            </div>{/* /.col-md-3 */}
            <div className="col-md-2">
              <div className="iconbox style_2">
                <div className="box-header">
                  <div className="box-icon">
                    <img src={Mongo}className="tech-icon" />
                  </div>
                  <h5 className="box-title">mongoDB</h5>
                </div>
                <div className="box-content">
                  {/* <span class="font-size-14px">• MS SQL Server, MYSQL, Migration Scripts, <br> • Reconciliation for Data Completeness</span>  */}
                  <p />
                </div>
              </div>
            </div>{/* /.col-md-3 */}   
          </div>{/* /.row */}
          <div className="row">
            <div className="col-md-2">
              <div className="iconbox style_2">
                <div className="box-header">
                  <div className="box-icon">
                    <img src={Ibm}className="tech-icon" />
                  </div>
                  <h5 className="box-title">DB2</h5>
                </div>
                <div className="box-content">
                  {/* <span class="font-size-14px">•	Ubuntu Cron Jobs, MYSQL Stored Procedures, SQL<br></span>     */}
                </div>
              </div>
            </div>{/* /.col-md-3 */}
            <div className="col-md-2">
              <div className="iconbox style_2">
                <div className="box-header">
                  <div className="box-icon">
                    <img src={Sybase} className="tech-icon" />
                  </div>
                  <h5 className="box-title">SyBase</h5>
                </div>
                <div className="box-content">
                  {/* <span class="font-size-14px">• Physical Model Changes, Bulk Load (SQL Loader), <br>• Stored Procedures, Mat Views</span>                                         */}
                </div>
              </div>
            </div>{/* /.col-md-3 */} 
          </div>{/* /.row */}
        </div>{/* /.container */}
      </div>{/* /.flat-row */}
    </div>
  </div>
</div>

     );
}
 
export default DataManagement;
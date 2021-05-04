import React from 'react';
import OR from "../images/technologies/operational_reports.png"
import CO from "../images/technologies/crm-olap.png"
import Adhoc from "../images/technologies/adhoc_reports.png"
import Microsoft from "../images/technologies/microsoft.jpg"
import Excel from "../images/technologies/excle.jpg"
import SSRS from "../images/technologies/SSRS.jpg"
import Tsql from "../images/technologies/Tsql.png"
import Tab from "../images/technologies/tableau.jpg"
import PowerBI from "../images/technologies/Power-BI.png"
import Qlik from "../images/technologies/qlikview.webp"
import Bobj from "../images/technologies/businessObjects.jpg"
import Cog from "../images/technologies/cognos.jpg"
import Micro from "../images/technologies/microstratergy.png"

const DataReport = () => {
  return (
    <div id="site-content">
      <div className="flat-row pad-top100px pad-bottom100px parallax parallax7">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-section text-center ">
                <h2 className="title color-ccc">Data Story Telling</h2>
                <div className="title color-333333">
                  Reporting is the key element in any application to understand
                  the operations <br />
                  and helps to analyze the activities to take operational,
                  tactical and strategic decisions
                  <br />
                  <ul className="c1">
                    <li>Operational Reporting</li>
                    <li>OLAP / Analytical Reporting</li>
                    <li>Visualization / Dashboard Development</li>
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
      <div className="flat-row">
        <div className="image-single style_1 clearfix">
          <div className="item-two-column section-iconlist">
            <div className="title-section style_1">
              <h3 className="title">
                We provide our servies in the following activities
              </h3>
              <div className="desc">
                Reporting is the key element in any application to understand
                the operations and helps to analyze the activities to take
                operational, tactical and strategic decisions. Reporting systems
                are designed to benefit all the different types of stakeholder’s
                right from Operational User, Customers, Partners and Knowledge
                workers who takes the strategic decisions. Stories are powerful
                medium in which we can explain the events in the business. We
                listen attentively to our customer needs and think from their
                perspective and provide our reports / stories accordingly.
              </div>
            </div>
            <div className="flat-divider d30px" />
          </div>
          {/* /.item-two-column */}
          <div className="item-two-column mag-left flat-single-image-autoheight-style1 flat-single-image-autoheight-style4"></div>
          {/* /.item-two-column */}
        </div>
        {/* /.image-single */}
      </div>
      {/* /.flat-row */}
      <div className="flat-row  pad-top0px pad-bottom20px">
        <div className="container">
          <div className="row">
            <div className="page-title text-center">
              <h2 className="title">Data Report's</h2>
            </div>
          </div>
          {/* /.row */}
          <div className="row pad-bottom60px">
            <div className="col-md-4">
              <div className="imagebox">
                <div className="card">
                  <div className="box-image1">
                    <a href="#">
                      <img
                        src={OR}
                        alt="images"
                      />
                    </a>
                  </div>
                  <div className="box-header">
                    <h3 className="box-title">
                      <a href="#">Operational Reporting</a>
                    </h3>
                  </div>
                  <div className="box-content">
                    <div className="box-desc text-justify">
                      We work with operational reporting tools like SQL Server
                      Reporting Services, Crystal Reports and Pentaho Reporting
                      tools. We develop interactive reporting in Web
                      applications using D3 visuals in any of your mobile / web
                      application. Developed reports for preprinted stationary
                      to Check printing using Crystal Reports.
                    </div>
                  </div>
                </div>{" "}
                {/*card*/}
              </div>
              {/* /.imagebox   */}
            </div>
            {/* /.col-md-3 */}
            <div className="col-md-4">
              <div className="imagebox">
                <div className="card">
                  <div className="box-image1">
                    <a href="#">
                      <img
                        src={CO}
                        alt="images"
                      />
                    </a>
                  </div>
                  <div className="box-header">
                    <h3 className="box-title">
                      <a href="#">OLAP / Analytical Reporting</a>
                    </h3>
                  </div>
                  <div className="box-content">
                    <div className="box-desc text-justify">
                      We execute projects using OLAP reporting tools, we are
                      well versed with Business Objects, Cognos and
                      Microstrategy to implement enterprise analytical reports
                      and build OLAP metadata layer to develop ad-hoc reports.
                      Worked in Migration of BO Reports to SSRS and BO Reports
                      to Tableau projects. We have utilities to do
                      reconciliation between source data and reporting output as
                      part of Quality Assurance in OLAP Reports.
                    </div>
                  </div>
                </div>{" "}
                {/*card*/}
              </div>
              {/* /.imagebox   */}
            </div>
            {/* /.col-md-3 */}
            <div className="col-md-4">
              <div className="imagebox">
                <div className="card">
                  <div className="box-image1">
                    <a href="#">
                      <img
                        src={Adhoc}
                        alt="images"
                      />
                    </a>
                  </div>
                  <div className="box-header">
                    <h3 className="box-title">
                      <a href="#">Visualization / Dashboard Development</a>
                    </h3>
                  </div>
                  <div className="box-content">
                    <div className="box-desc text-justify">
                      We tell stories using Visualization tools. We believe in
                      story based on the context. Context comes out from what
                      perspective you look at. Once we understand the role of
                      the person who is looking at report, we build a story to
                      give 360 degree of dimensional analysis to enable the end
                      user to take the right decisions or back the decisions
                      based on the data.
                    </div>
                  </div>
                </div>{" "}
                {/*card*/}
              </div>
              {/* /.imagebox   */}
            </div>
            {/* /.col-md-3 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
      <div className="flat-row parallax parallax1 pad-top60px pad-bottom60px">
        <div className="container">
          <div className="row">
            <div className="page-title text-center">
              <h2 className="title">Projects are in Data Reports</h2>
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
                    <h5 className="box-title">Endowment Fund Management</h5>
                  </div>
                  <div className="box-content">
                    <article>
                      <span>
                        Current MIS department run the whole set of analysis
                        using MS Excel and SSRS reports. Company wanted to move
                        all the MIS reporting to Tableau dashboards for the
                        entire set of Business Users. As a service provider, we
                        provided a team of 5 people who works with current
                        infrastructure, IT and data team. Did the reverse
                        engineering and provided our view of how we can enable
                        the existing assets as part of the new implementation.
                        We provided dashboards on Gifts &amp; Programs,
                        Endowment Fund Activity, Fund Allocation, Returns of
                        fund, institutional Performance Analysis for Fund
                        Allocation and Disbursement yearly amounts to various
                        departments for their operational expenses.
                      </span>
                    </article>
                  </div>
                </div>
                <div className="iconbox style_3">
                  <div className="box-header">
                    <div className="box-icon">
                      <i className="fa fa-mixcloud icon" />
                    </div>
                    <h5 className="box-title">
                      Community HealthCare Analysis{" "}
                    </h5>
                  </div>
                  <div className="box-content">
                    <article>
                      <span>
                        Worked with a customer who is into community healthcare
                        client based out of US. Application manage complex
                        health and human services across an integrated continuum
                        of care. Collaborate among service delivery
                        organizations and caregivers, automate your data
                        programs to increase productivity, improve outcomes and
                        reporting compliance. Current system is designed for
                        customizing forms very effectively, but reporting
                        function was taking a longer time to implement &amp;
                        performance was not up to the mark. So, created a
                        solution stack using MSBI technical stack. We used SSRS
                        for Operational Analysis and embedded those reports into
                        the application and provided MOLAP Cube for service
                        provider analysts to answer any MIS question they get
                        from the customer.
                      </span>
                    </article>
                  </div>
                </div>
                <div className="iconbox style_3">
                  <div className="box-header">
                    <div className="box-icon">
                      <i className="fa icons icon-globe" />
                    </div>
                    <h5 className="box-title">Fleet Analysis </h5>
                  </div>
                  <div className="box-content">
                    <article>
                      <span>
                        County Government was having tough time to modernize the
                        current AS/400 operational system for reporting. Running
                        4 different reports and consolidate those with an excel
                        expert to schedule the fleet for proactive service is a
                        major time consuming process. We had a discussion with
                        Fleet Service, Fleet Purchase, and Fleet Auction team
                        and created an end to end visuals of a specific asset in
                        the fleet department. Providing exception dashboard on
                        over utilization, underutilization of Fleet to find the
                        issues in the operations. We can identify the vehicle /
                        equipment to auction / replace with more data
                        pointers.Building 360 degree of Dashboard to do better
                        analysis when a vehicle is under audit. (Where did we
                        purchase from, employee, lot location, manufacturer,
                        mileage) to get all the information in figure tips to
                        analyze what went wrong or right.Get Fleet KPI’s
                        according to Government Audit and compare those
                        indicators against County operations which give more
                        comfort to the team
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
                      Modernization of OLAP Solution
                    </h5>
                  </div>
                  <div className="box-content">
                    <article>
                      <span>
                        Current BIDW environment had different OLAP solutions.
                        As part of the modernization initiative for Cloud
                        adoption and Digital Strategy, customer wanted to
                        migrate the current application to cloud and create a
                        scalable solution for reporting and visual analysis. By
                        doing reverse engineering of 100 reports in the Cognos
                        and 60 reports in BO, we came out with the consolidated
                        reports and mapped the same with business users.
                        Classified current assets into three categories which
                        are heavy on tabular format, visual format and
                        interactive mode. Worked with end users to club few
                        reports into dashboards. Successfully ran the two OLAP
                        environments until end users are comfortable with new
                        reports and dashboards. Challenge is to make sure the
                        reconciliation between old reporting system and new
                        reporting system. Built few automation scripts to make
                        sure the values match at report level to gain the
                        confidence of business.
                      </span>
                    </article>
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
                    <article>
                      <span>
                        Profile the data to get completeness percentage, data
                        fixing (business rules), and applying business rules to
                        identify unique customers.o Capture new entries in
                        sources, filling the null values automatically to
                        improve completeness and reporting to Data Governance
                        through Data Quality Dashboards.{" "}
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
              <h2 className="title">Technologies used in data reporting</h2>
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
                          src={Excel}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">MS Excel</h5>
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
                          src={SSRS}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">SSRS</h5>
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
                          src={Tsql}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">TSQL</h5>
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
                          src={Tab}
                          className="tech-icon "
                        />
                      </div>
                      <h5 className="box-title">Tableau</h5>
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
                          src={PowerBI}
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
              </div>
              {/* /.row */}
              <div className="row">
                <div className="col-md-2">
                  <div className="iconbox style_2">
                    <div className="box-header">
                      <div className="box-icon">
                        <img
                          src={Qlik}
                          className="tech-icon "
                        />
                      </div>
                      <h5 className="box-title">qlik view</h5>
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
                          src={Bobj}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">Business Objects</h5>
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
                          src={Cog}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">Cognos</h5>
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
                          src={Micro}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">Microstrategy</h5>
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

export default DataReport;

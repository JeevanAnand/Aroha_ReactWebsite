import React from 'react';
import SqlLite from "../images/opensources/sqlite.png"
import MySql from "../images/opensources/mysql.png"
import Pg from "../images/opensources/postgres.jpg"
import Vscode from "../images/opensources/vscode.png"
import Sublime from "../images/opensources/sublime.jpeg"
import Atom from "../images/opensources/atom.png"
import Pyc from "../images/opensources/pycharm.png"
import Node from "../images/opensources/nodejs.png"
import Python from "../images/opensources/python.jpeg"
import Java from "../images/opensources/java.png"
import Php from "../images/opensources/php.png"
import Go from "../images/opensources/golang.png"
import ReAct from "../images/opensources/react.png"
import Angular from "../images/opensources/angular.png"
import D3 from "../images/opensources/d3js.jpeg"
import Git from "../images/opensources/git.png"
import Jen from "../images/opensources/jenkins.jpg"
import Dock from "../images/opensources/docker.png"
import Kuber from "../images/opensources/kubernetes.png"
import Ansi from "../images/opensources/ansible.png"
import Chef from "../images/opensources/chef.png"

const OpenSource = () => {
  return (
    <div id="site-content">
      <div className="flat-row pad-top100px pad-bottom100px parallax parallax12">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-section text-center ">
                <h2 className="title color-ccc">Open Source Technologies</h2>
                <div className="title color-333333">
                  Open source software is software with source code that anyone
                  can inspect, modify, and enhance.
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
      <div className="flat-row flat-row1">
        <div className="container">
          <div className="flat-row  pad-top60px pad-bottom60px">
            <div className="container">
              <div className="row">
                <div className="page-title text-center">
                  <h2 className="title">Open source we use</h2>
                </div>
              </div>
              {/* /.row */}
              <div className="row">
                <div className="page-title text-left">
                  <h2 className="title">Database</h2>
                </div>
              </div>
              {/* /.row */}
              <div className="row">
                <div className="col-md-2">
                  <div className="iconbox style_2">
                    <div className="box-header">
                      <div className="box-icon">
                        <img
                          src={SqlLite}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">SQLite</h5>
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
                          src={MySql}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">MySQL</h5>
                    </div>
                    <div className="box-content">
                      {/* <span class="font-size-14px">• Ubuntu Cron Jobs, MYSQL Stored Procedures, SQL<br></span>     */}
                    </div>
                  </div>
                </div>
                {/* /.col-md-3 */}
                <div className="col-md-2">
                  <div className="iconbox style_2">
                    <div className="box-header">
                      <div className="box-icon">
                        <img
                          src={Pg}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">PostgreSQL</h5>
                    </div>
                    <div className="box-content">
                      {/* <span class="font-size-14px">• Oracle, SQL, PLSQL, Shell Script, Tableau.<br>• Mongo DB, AWS S3, Oracle, SQL Server, Python Scripts, Automation<br></span>                                         */}
                    </div>
                  </div>
                </div>
                {/* /.col-md-3 */}
              </div>
              {/* /.row */}
              <div className="row">
                <div className="page-title text-left">
                  <h2 className="title">Open Source IDEs</h2>
                </div>
              </div>
              {/* /.row */}
              <div className="row">
                <div className="col-md-2">
                  <div className="iconbox style_2">
                    <div className="box-header">
                      <div className="box-icon">
                        <img
                          src={Vscode}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">Visual Studio Code</h5>
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
                          src={Sublime}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">Sublime Text</h5>
                    </div>
                    <div className="box-content">
                      {/* <span class="font-size-14px">• Ubuntu Cron Jobs, MYSQL Stored Procedures, SQL<br></span>     */}
                    </div>
                  </div>
                </div>
                {/* /.col-md-3 */}
                <div className="col-md-2">
                  <div className="iconbox style_2">
                    <div className="box-header">
                      <div className="box-icon">
                        <img
                          src={Atom}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">Atom</h5>
                    </div>
                    <div className="box-content">
                      {/* <span class="font-size-14px">• Oracle, SQL, PLSQL, Shell Script, Tableau.<br>• Mongo DB, AWS S3, Oracle, SQL Server, Python Scripts, Automation<br></span>                                         */}
                    </div>
                  </div>
                </div>
                {/* /.col-md-3 */}
                <div className="col-md-2">
                  <div className="iconbox style_2">
                    <div className="box-header">
                      <div className="box-icon">
                        <img
                          src={Pyc}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">pyCharm</h5>
                    </div>
                    <div className="box-content">
                      {/* <span class="font-size-14px">• Oracle, SQL, PLSQL, Shell Script, Tableau.<br>• Mongo DB, AWS S3, Oracle, SQL Server, Python Scripts, Automation<br></span>                                         */}
                    </div>
                  </div>
                </div>
                {/* /.col-md-3 */}
              </div>
              {/* /.row */}
              <div className="row">
                <div className="page-title text-left">
                  <h2 className="title">Application Development </h2>
                </div>
              </div>
              {/* /.row */}
              <div className="row">
                <div className="col-md-2">
                  <div className="iconbox style_2">
                    <div className="box-header">
                      <div className="box-icon">
                        <img
                          src={Node}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">NodeJS</h5>
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
                          src={Python}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">Python</h5>
                    </div>
                    <div className="box-content">
                      {/* <span class="font-size-14px">• Ubuntu Cron Jobs, MYSQL Stored Procedures, SQL<br></span>     */}
                    </div>
                  </div>
                </div>
                {/* /.col-md-3 */}
                <div className="col-md-2">
                  <div className="iconbox style_2">
                    <div className="box-header">
                      <div className="box-icon">
                        <img
                          src={Java}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">Java</h5>
                    </div>
                    <div className="box-content">
                      {/* <span class="font-size-14px">• Oracle, SQL, PLSQL, Shell Script, Tableau.<br>• Mongo DB, AWS S3, Oracle, SQL Server, Python Scripts, Automation<br></span>                                         */}
                    </div>
                  </div>
                </div>
                {/* /.col-md-3 */}
                <div className="col-md-2">
                  <div className="iconbox style_2">
                    <div className="box-header">
                      <div className="box-icon">
                        <img
                          src={Php}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">PHP</h5>
                    </div>
                    <div className="box-content">
                      {/* <span class="font-size-14px">• Oracle, SQL, PLSQL, Shell Script, Tableau.<br>• Mongo DB, AWS S3, Oracle, SQL Server, Python Scripts, Automation<br></span>                                         */}
                    </div>
                  </div>
                </div>
                {/* /.col-md-3 */}
                <div className="col-md-2">
                  <div className="iconbox style_2">
                    <div className="box-header">
                      <div className="box-icon">
                        <img
                          src={Go}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">Go Lang</h5>
                    </div>
                    <div className="box-content">
                      {/* <span class="font-size-14px">• Oracle, SQL, PLSQL, Shell Script, Tableau.<br>• Mongo DB, AWS S3, Oracle, SQL Server, Python Scripts, Automation<br></span>                                         */}
                    </div>
                  </div>
                </div>
                {/* /.col-md-3 */}
              </div>
              {/* /.row */}
              <div className="row">
                <div className="page-title text-left">
                  <h2 className="title">UI Frameworks</h2>
                </div>
              </div>
              {/* /.row */}
              <div className="row">
                <div className="col-md-2">
                  <div className="iconbox style_2">
                    <div className="box-header">
                      <div className="box-icon">
                        <img
                          src={ReAct}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">React JS</h5>
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
                          src={Angular}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">Angular</h5>
                    </div>
                    <div className="box-content">
                      {/* <span class="font-size-14px">• Ubuntu Cron Jobs, MYSQL Stored Procedures, SQL<br></span>     */}
                    </div>
                  </div>
                </div>
                {/* /.col-md-3 */}
                <div className="col-md-2">
                  <div className="iconbox style_2">
                    <div className="box-header">
                      <div className="box-icon">
                        <img
                          src={D3}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">D3.js</h5>
                    </div>
                    <div className="box-content">
                      {/* <span class="font-size-14px">• Oracle, SQL, PLSQL, Shell Script, Tableau.<br>• Mongo DB, AWS S3, Oracle, SQL Server, Python Scripts, Automation<br></span>                                         */}
                    </div>
                  </div>
                </div>
                {/* /.col-md-3 */}
              </div>
              {/* /.row */}
              <div className="row">
                <div className="page-title text-left">
                  <h2 className="title">DevOps</h2>
                </div>
              </div>
              {/* /.row */}
              <div className="row">
                <div className="col-md-2">
                  <div className="iconbox style_2">
                    <div className="box-header">
                      <div className="box-icon">
                        <img
                          src={Git}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">Git</h5>
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
                          src={Jen}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">Jenkins</h5>
                    </div>
                    <div className="box-content">
                      {/* <span class="font-size-14px">• Ubuntu Cron Jobs, MYSQL Stored Procedures, SQL<br></span>     */}
                    </div>
                  </div>
                </div>
                {/* /.col-md-3 */}
                <div className="col-md-2">
                  <div className="iconbox style_2">
                    <div className="box-header">
                      <div className="box-icon">
                        <img
                          src={Dock}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">Docker</h5>
                    </div>
                    <div className="box-content">
                      {/* <span class="font-size-14px">• Oracle, SQL, PLSQL, Shell Script, Tableau.<br>• Mongo DB, AWS S3, Oracle, SQL Server, Python Scripts, Automation<br></span>                                         */}
                    </div>
                  </div>
                </div>
                {/* /.col-md-3 */}
                <div className="col-md-2">
                  <div className="iconbox style_2">
                    <div className="box-header">
                      <div className="box-icon">
                        <img
                          src={Kuber}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">Kubernetes</h5>
                    </div>
                    <div className="box-content">
                      {/* <span class="font-size-14px">• Oracle, SQL, PLSQL, Shell Script, Tableau.<br>• Mongo DB, AWS S3, Oracle, SQL Server, Python Scripts, Automation<br></span>                                         */}
                    </div>
                  </div>
                </div>
                {/* /.col-md-3 */}
                <div className="col-md-2">
                  <div className="iconbox style_2">
                    <div className="box-header">
                      <div className="box-icon">
                        <img
                          src={Ansi}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">Ansible</h5>
                    </div>
                    <div className="box-content">
                      {/* <span class="font-size-14px">• Oracle, SQL, PLSQL, Shell Script, Tableau.<br>• Mongo DB, AWS S3, Oracle, SQL Server, Python Scripts, Automation<br></span>                                         */}
                    </div>
                  </div>
                </div>
                {/* /.col-md-3 */}
                <div className="col-md-2">
                  <div className="iconbox style_2">
                    <div className="box-header">
                      <div className="box-icon">
                        <img
                          src={Chef}
                          className="tech-icon"
                        />
                      </div>
                      <h5 className="box-title">Chef</h5>
                    </div>
                    <div className="box-content">
                      {/* <span class="font-size-14px">• Oracle, SQL, PLSQL, Shell Script, Tableau.<br>• Mongo DB, AWS S3, Oracle, SQL Server, Python Scripts, Automation<br></span>                                         */}
                    </div>
                  </div>
                </div>
                {/* /.col-md-3 */}
              </div>
              {/* /.row */}
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* /.flat-row */}
      </div>
    </div>
  );
};

export default OpenSource;

import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome!</h2>
        <p>
          Your personal wellness pod is a gateway to the various wellness
          services you utilize. Your pod is a centralized location for all of
          your wellness information.
        </p>
        <section className="cardRow">
          <NavLink to="/physicalfitness">
            <div className="card">
              <div className="cardHeader" style={{ backgroundColor: "#0C2E4C" }}>
                <h3>Physical Wellness</h3>
              </div>
              <div className="cardContainer">
                <p>
                  Create customized workout routines or select from existing
                  workout routines. Then, track and visualize your workout
                  progress.
                </p>
              </div>
            </div>
          </NavLink>
          <NavLink to="/diet">
            <div className="card">
              <div className="cardHeader" style={{ backgroundColor: "#0F4769" }} >
                <h3>Calorie Tracker</h3>
              </div>
              <div className="cardContainer">
                <p>
                  Monitor your dietary intake and stay on top of your nutrition goals with our calorie tracker.
                </p>
              </div>
            </div>
          </NavLink>
          <NavLink to="/finance">
            <div className="card">
              <div className="cardHeader" style={{ backgroundColor: "#075F69" }}>
                <h3>Finance Wellness</h3>
              </div>
              <div className="cardContainer">
                <p>Manage personal budgets, and credits. </p>
              </div>
            </div>
          </NavLink>
          <NavLink to="/Mental">
            <div className="card">
              <div className="cardHeader" style={{ backgroundColor: "#007D7C" }}>
                <h3>Mental Health Chatbot</h3>
              </div>
              <div className="cardContainer">
                <p>Mental Health AI Chatbot.</p>
              </div>
            </div>
          </NavLink>
          <NavLink to="/HabitTracker">
            <div className="card">
              <div className="cardHeader" style={{ backgroundColor: "#0C2E4C" }}>
                <h3>Habit Tracker</h3>
              </div>
              <div className="cardContainer">
                <p>Track your habits.</p>
              </div>
            </div>
          </NavLink>
          <NavLink to="/medicalRecords">
            <div className="card">
              <div className="cardHeader" style={{ backgroundColor: "#0F4769" }}>
                <h3>Medical Record Management</h3>
              </div>
              <div className="cardContainer">
                <p>Upload Medical Records and View History</p>
              </div>
            </div>
          </NavLink>
        </section>
      </div>
    );
  }
}

export default Home;

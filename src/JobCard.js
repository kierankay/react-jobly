import React from 'react';

class JobCard extends React.Component {
  render() {
    let { title, salary, equity } = this.props.job
    return (
      <div className="card mb-3" style={{ maxWidth: "800px" }}>
        <div className="row no-gutters">
          <div className="col-md-12">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">Salary: {salary}</p>
              <p className="card-text">Equity: {equity}</p>
              <button className="btn btn-danger">Apply</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobCard;
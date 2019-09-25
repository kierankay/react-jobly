import React from 'react';

class CompanyCard extends React.Component {
  render() {
    let { logo_url, name, description } = this.props.company
    return (
      <div className="card mb-3" style={{ maxWidth: "800px" }}>
        <div className="row no-gutters">
          <div className="col-md-2">
            <img src={logo_url} className="card-img" alt="..." />
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyCard;
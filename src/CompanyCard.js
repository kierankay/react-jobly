import React from 'react';

class CompanyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="card mb-3" style={{maxWidth: "800px"}}>
        <div className="row no-gutters">
          <div className="col-md-2">
            <img src={this.props.company.logo_url} className="card-img" alt="..." />
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">{this.props.company.name}</h5>
              <p className="card-text">{this.props.company.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CompanyCard;
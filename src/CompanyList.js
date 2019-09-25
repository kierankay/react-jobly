import React from 'react';
import SearchBar from './SearchBar';
import CompanyCard from './CompanyCard';
import JoblyApi from './JoblyApi';

class CompanyList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      companies: []
    }
    this.searchCompanies = this.searchCompanies.bind(this);
  }

  async componentDidMount() {
    let result = await JoblyApi.request('companies');
    this.setState({ companies: result.companies })
  }

  async searchCompanies(query) {
    let result = await JoblyApi.request(`companies/${query}`)
    console.log(result)
    // this.setState({ companies: result.companies })
  }

  render() {
    let companies = this.state.companies.map((c, idx) => <CompanyCard company={c} key={idx}/>)
    return (
      <div>
        <SearchBar searchCompanies={this.searchCompanies}/>
        {companies}
      </div>
    )
  }
}

export default CompanyList;
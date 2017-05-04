import React, { Component } from 'react'
import { connect } from 'react-redux'
import { doPagination } from '../../../actions'
import './style.scss'

class Paginator extends Component {
  state = {
    pageSize: 15,
    page: 1,
    total: 811
  }

  fnPrevClick = () => {
    if (this.state.page <= 1) return
    this.setState({page: this.state.page -1}, () => {
      const limit = this.state.page * this.state.pageSize
      const offset = (this.state.page -1) * this.state.pageSize
      this.props.doPagination(limit, offset)
    })
  }

  fnNextClick = () => {
    const {pageSize, page, total} = this.state
    if(total/pageSize <= page) return
    this.setState({page: this.state.page +1}, () => {
      const limit = this.state.page * this.state.pageSize
      const offset = (this.state.page -1) * this.state.pageSize
      this.props.doPagination(limit, offset)
    })
  }

  fnChange = (ev) => {
    this.setState({pageSize: ev.target.value}, () => {
      const limit = this.state.page * this.state.pageSize
      const offset = (this.state.page -1) * this.state.pageSize
      this.props.doPagination(limit, offset)
    })
  }

  render() {

    return (
      <div className="pagination">
        <div className="pagination__wrap">
          <button className="pagination__btn" type="button" onClick={this.fnPrevClick}>prev</button>
          <span className="pagination__page">{this.state.page}</span>
          <button className="pagination__btn" type="button" onClick={this.fnNextClick}>next</button>
          <select className="pagination__select" value={this.state.pageSize} onChange={this.fnChange}>
            {[20, 15, 10, 5].map((item, key) => <option className="pagination__option" value={item} key={key}>{item}</option>)}
          </select>
        </div>

      </div>
    )
  }
}

export default connect(null, {doPagination})(Paginator)

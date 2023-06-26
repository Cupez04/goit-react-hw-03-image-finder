import React from 'react'
import css from './Searchbar.module.css'
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export class Searchbar extends React.Component {
    constructor(){
        super()
    }

    state = {
      searchQuery: ''
    };

    handleChange = event => {
      this.setState({searchQuery: event.target.value.toLowerCase()})
    }

    handleSubmit = event => {
      event.preventDefault();
      if(this.state.searchQuery.trim() === ''){
        Notify.warning("Sorry, there are no images matching your search query. Please try again.");
        return;
      }
      this.props.onSubmit(this.state.searchQuery)
      this.reset();
    }

    reset = ()=>{
      this.setState({searchQuery: ''})
    };

  render() {
    const { searchQuery } = this.state;
    return (
        <header className={css["searchbar"]} onSubmit={this.handleSubmit}>
        <form className={css["searchForm"]}>
          <button type="submit" className={css["searchForm-button"]}>
            <span className={css["searchForm-button-label"]}>Search</span>
            <i className='bx bx-search-alt' id={css.icon}></i>
          </button>
      
          <input
            className={css["searchForm-input"]}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search Images..."
            value={searchQuery}
            onChange={this.handleChange}
          />
        </form>
      </header>
    )
  }
}

export default Searchbar
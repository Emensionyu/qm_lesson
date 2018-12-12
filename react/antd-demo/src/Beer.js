import React, { Component } from 'react';
import Results from './Results';
import Search from './Search';
export default  class Beer extends Component{
    // constructor(props){
    //     super(props);
    //     // console.log(props)
       
    // }
    componentDidMount(){
        this.loadBeers();//
    }
    componentDidUpdate(preProps){
        const currentSearchTerm=
        this.props.match.params.searchTerm;
        // console.log(currentSearchTerm+"now");//11111 
        const oldSearchTerm=
        preProps.match.params.searchTerm;
      
        // this.loadBeers(currentSearchTerm);
       
        if(currentSearchTerm!== oldSearchTerm){
            this.loadBeers(currentSearchTerm);
           
        }
    }
    state={
        beers:[],
        loading:true,
    }
    loadBeers=(searchTerm="hops")=>{
        this.setState({
            loading:true
        })
        const localStorageBeers=localStorage.getItem(`search-${searchTerm}`);
        if(localStorageBeers){
            const localBeers=JSON.parse(localStorageBeers);
            this.setState({
                beers:localBeers,
                loading:false
            });
            return;
        }
        fetch(`https://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
        .then(data=>data.json())
        .then(
            data=>{
                console.log(data)
                const beers=data.data||[];
            this.setState({
                beers:beers,
                loading:false

            })
            localStorage.setItem(
                `search-${searchTerm}`,
                JSON.stringify(this.state.beers)
            )
        })
        .catch(err=>console.log(err))

    }
    render(){

        return(
            <div className="wrapper">
            <Search />
            <Results beers={this.state.beers} loading={this.state.loading} />
            </div>
        )
    }
}

import React, {useState} from 'react'
import ReactTable from "react-table-6";
import 'react-table-6/react-table.css'
import SearchBar from 'material-ui-search-bar'
//import 'react-table/react-table.css'
import gql from "graphql-tag"
import {Query} from 'react-apollo'
import {useLazyQuery} from 'react-apollo'
//import Error from './Forms/Errors'
//import Loading from './Forms/Loading'
import MaterialTable from "material-table"
//import "react-table/react-table.css"

const LIST_INFO= gql`

query searches ($search:String!)
{
    searches(search:$search)
      {
        id
        name
        Fname
        marks
        rollNo
    }
  }
`

const Search=()=>{
       
        const [search, setSearch]= useState('') 
        const [runQuery,{data, loading, error}]=useLazyQuery(LIST_INFO);

            if (loading) return <p>Loading</p>;
            if (error) return <p>Error</p>;
           
           const columns = [
            {
                Header: "Name",
                accessor: "name"
            },
            {
                Header: "Father",
                accessor: "Fname"
            },
            {
                Header: "RollNo",
                accessor: "rollNo"
            },
            {
                Header: "Marks",
                accessor: "marks"
            },
        ];
        return (
           
            <div>   
            <SearchBar 
              onChange={value => {setSearch(value)}}
             
             onRequestSearch={(event) => { 
                runQuery({
                 variables: { search }, 
                 suspend: false
                })}}
                
                style={{
                margin: '0 auto',
                maxWidth: 800
                }}

                value={search}
            />
            
                <div>{data && <ReactTable data={data.searches} columns={ columns } />}</div>
                </div>    
        )          
        };
export default Search;

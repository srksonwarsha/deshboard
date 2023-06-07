import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Callhistory.css"

const CallHistory = () => {
    const [countery, setCountery] = useState([]);
    const [search,setSearch] = useState(" ");
    const [fillterCountery,setFillterCountery] = useState([]);
    
   
    const getCounteries = async() =>{
      console.log("sdasdas")
            try{
              const responce = await axios.get('https://restcountries.com/v2/all');
              let value = responce.data;
              console.log("value",value)
              setCountery(responce.data);
            //   data.push(responce.data)
            setFillterCountery(responce.data)
              console.log("0--0-0--09-09090-9-09",responce.data)
              console.log("contery",countery);
            }catch(error){
              console.log(error);
            }
    }
   
 
      const columns = [
        {
          name :"Customer Name",
          selector: (row) => row.name,
          sortable:true,
        },
        {
          name :"Call Type",
          selector: (row) => row.nativeName,
          sortable:true,
        },
        {
          name :"Start Time",
          selector: (row) => row.capital,
          sortable:true,
        },
        {
          name :"Duration",
          selector: (row) => row.capital,
          sortable:true,
        },
        {
          name :"Team Name",
          selector: (row) => row.capital,
          sortable:true,
        },
        {
          name :"Superfone Number",
          selector: (row) => row.capital,
          sortable:true,
        },
        {
          name :"Team Staff",
          selector: (row) => row.capital,
          sortable:true,
        },
        // {
        //   name :"Duration",
        //   selector: (row) => <img width={50} height={50} src= {row.flag} alt='' />
        // },
        {
            name: "Recording",
            cell : row => <i 
            width={50} height={50}
            onClick={()=> alert(row.alpha3Code)} className="fas fa-light fa-circle-play play_btn"/>     
       }

      ]
      useEffect(()=>{
        getCounteries();
       
      },[])

      useEffect(()=>{
        const result = countery.filter((counttery)=>{
            return counttery.name.toLowerCase().match(search.toLowerCase())
        })
        setFillterCountery(result);
      },[search])

    return (
        <>
        {/* <h1 onClick={getCounteries()}>Welcome To Home Page</h1> */}
        <DataTable title="Counteries List" 
        columns={columns} 
        data={fillterCountery} 
        pagination
        fixedHeader
        // fixedHeaderScrollHeight='550px'
        // selectableRows
        selectableRowsHighlight
        highlightOnHover
        actions ={
            <button className='btn btn-info'>Exxport</button>
        }
        subHeader
        subHeaderComponent={
            <input type='search' 
            placeholder='search here' 
            className='w-25 form-control search' 
            // value={search}
            onChange={(e)=> setSearch(e.target.value)}
            />
        }
        />
        </>
            
        
    );
};

export default CallHistory;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


const Teams = () => {
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
          name :"S.No",
          selector:  (row, index) => index + 1,
          sortable:true,
        },
        {
          name :"Team Name",
          selector: (row) => row.nativeName,
          sortable:true,
        },
        {
          name :"Superfone Number",
          selector: (row) => row.capital,
          sortable:true,
        },
        {
          name :"Status",
          selector: (row) => <img width={50} height={50} src= {row.flag} alt='' />
        },
        {
          name :"# Team Staff",
          selector: (row) => <img width={50} height={50} src= {row.flag} alt='' />
        },
        {
            name: "Action",
            cell : row => <button className='btn btn-success'onClick={()=> alert(row.alpha3Code)}>Renew</button>
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
        <button>Buy A New Number!</button>
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
            <input type='text' 
            placeholder='search here' 
            className='w-25 form-control search' 
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
            />
        }
        />
        </>
            
        
    );
};

export default Teams;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Numbers.css"
const Numbers = () => {
    const [countery, setCountery] = useState([]);
    const [search,setSearch] = useState(" ");
    const [fillterCountery,setFillterCountery] = useState([]);
    const [snumber,setSnumber] = useState();
   
    const getCounteries = async() =>{
            try{
              const responce = await axios.get('https://restcountries.com/v2/all');
              setCountery(responce.data);
              setFillterCountery(responce.data)
            }catch(error){
              console.log(error);
            }
    }
   
 
      const columns = [
        {
          name :"S.No",
          selector: (row, index) => index + 1,
          sortable:true,
        },
        {
          name :"Superfone Number",
          selector: (row) => row.nativeName,
          sortable:true,
        },
        {
          name :"Assigned To",
          selector: (row) => row.capital,
          sortable:true,
        },
        {
          name :"Status",
          selector: (row) => <img width={50} height={50} src= {row.flag} alt='' />
        },
      //   {
      //     name: "Status",
      //     cell : (row )=> <button className='btn btn-success'onClick={()=> alert(row.alpha3Code)}>Active</button>
      // },
        {
            name: "Action",
            cell : row => <button className='btn btn-success'onClick={()=> alert(row.alpha3Code)}>Edit</button>
        }

      ]
      useEffect(()=>{
        getCounteries();
        // let data = countery.length;
        //       for (var i = 0; i < data.length; i++){
        //         console.log("0-0-0-=0-==-0",i+1)
        //       }
      },[])

      useEffect(()=>{
        const result = countery.filter((counttery)=>{
            return counttery.name.toLowerCase().match(search.toLowerCase())
        })
        setFillterCountery(result);
      },[search])

    return (
        <>
        <div className='view_details'>
        <button className='btn btn-success rounded '>Buy A New Number!</button>
        </div>
        {/* <h1 onClick={getCounteries()}>Welcome To Home Page</h1> */}
        <DataTable 
        // title="Counteries List" 
        columns={columns} 
        data={fillterCountery} 
        pagination
        fixedHeader
        prepareRow
        // fixedHeaderScrollHeight='550px'
        // selectableRows
        selectableRowsHighlight
        highlightOnHover
        // actions ={
        //     <button className='btn btn-success'>Exxport</button>
        // }
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

export default Numbers;
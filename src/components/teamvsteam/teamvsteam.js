import './teamvsteam.css'
import { useNavigate } from 'react-router-dom'
import IPLDATA from "../data/ipldata.json"
import { useState } from 'react'

function TeamvsTeam(){
    const [data,setData]=useState(IPLDATA)
    let arr=[]
    for(let i=0;i<IPLDATA.length;i++){
        IPLDATA.map((data)=>arr.push(data.team1))
    }
    let teams=[...new Set(arr)]
    console.log(teams)
    // const handleClick=()=>{
    //     console.log(teams);
    // }
    // console.log(data);
    const navigate=useNavigate()
    return(
        <div className='teamscontainer-1'>
            <h1 className='headingtag'>Welcome to Team vs Team Analysis Page!!!</h1>
            <div className='buttonstag'>
                <select id="team">
                    {
                        teams.map((value) => {
                            return (
                                <option>{value}</option>
                            )
                        })
                    }
                </select>
                <select id="team">
                    {
                        teams.map((value) => {
                            return (
                                <option>{value}</option>
                            )
                        })
                    }
                </select>
                <button className='getdata'>GET DATA</button>
                <button className='back' onClick={() => navigate('/')}>BACK</button>
            </div>

            


        </div>

    )

}
export default TeamvsTeam
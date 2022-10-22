import './team.css'
import { useNavigate } from 'react-router-dom'
import IPLDATA from "../data/ipldata.json"
import { useState } from 'react'
function TeamAnalysis() {
    const [data, setData] = useState(IPLDATA)
    let arr = []
    for (let i = 0; i < IPLDATA.length; i++) {
        IPLDATA.map((data) => arr.push(data.team1))
    }
    let teams = [...new Set(arr)]
    let arr2=[]
    for(let i=0;i<IPLDATA.length;i++){
        IPLDATA.map((data)=> arr2.push(data.season))
    }
    let year=[...new Set(arr2)]
    year=year.sort((a,b)=>a-b)
    const navigate = useNavigate()
    return (
        <div className='teamscontainer-1'>
            <h1 className='headingtag'>Welcome to Team Analysis Page!!!</h1>
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
                        year.map((value) => {
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
export default TeamAnalysis
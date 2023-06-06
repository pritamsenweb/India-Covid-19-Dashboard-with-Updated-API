import React, { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './statewise.css';

const Statewise = () => {

    const [data, setData] = useState([]);

    const getCovidDate = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const acdata = await res.json();
        console.log(acdata);
        setData(acdata.statewise);
    }

    useEffect(() => {
        getCovidDate();
    }, []);

    return (
        <>

            <div className="container mt-5">
                <div className='main-heading'>
                    <h1 className='mb-5 text-center'>India Covid-19 Dashboard</h1>
                </div>
                <div className='table-responsive'>
                    <table className='table table-bordered table-hover'>
                        <thead className='thead-dark'>
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((curVal, inx) => {
                                    return (
                                        <tr key={inx}>
                                            <td>{curVal.state}</td>
                                            <td>{curVal.confirmed}</td>
                                            <td>{curVal.recovered}</td>
                                            <td>{curVal.deaths}</td>
                                            <td>{curVal.active}</td>
                                            <td>{curVal.lastupdatedtime}</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default Statewise;
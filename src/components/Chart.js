import React from 'react'
import PieChart from 'react-minimal-pie-chart';

const Chart = (props) => {
    // create variable "over" with all the cars whos horsepower is >= 200
    let over = props.cars.filter(cars=>cars.horsepower>199)
    let overVal =over.length
    let under = props.cars.filter(cars=>cars.horsepower<200)
    let underVal = under.length
    // create variable "under" with all the cars whos horsepower is < 200

    return (
        <div>
            <PieChart style={{ width: '200px' }}
                data={[
                    { title: 'Over', value: overVal, color: '#C13C37' },
                    { title: 'Under', value: underVal, color: '#E38627' },
                ]}
                label
                labelStyle={{
                    fill: 'white',
                    fontSize: 'small'
                }}
            />
            <Legend />
        </div>
    )
}

function Legend() {
    return (
        <h6>Horsepower: &nbsp;
            <span style={{background: '#C13C37'}}>
                &nbsp;
                &nbsp;
                &nbsp;
            </span>
            &nbsp;
            <span>Over 200</span>
            &nbsp;
            <span style={{background: '#E38627'}}>
                &nbsp;
                &nbsp;
                &nbsp;
            </span>
            &nbsp;
            <span>Under 200</span>
        </h6>
    )
}

export default Chart
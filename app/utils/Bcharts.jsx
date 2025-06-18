import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'

const Bcharts = () => {
    const months =[
        {
            name: 'Jan',
            Interns: 50
        },
        {
            name: 'Feb',
            Interns: 100
        },
        {
            name: 'Mar',
            Interns: 30
        },
        {
            name: 'Apr',
            Interns: 80
        },
        {
            name: 'May',
            Interns: 60
        },
        {
            name: 'Jun',
            Interns: 30
        },
        {
            name: 'Jul',
            Interns: 20
        },
        {
            name: 'Aug',
            Interns: 20
        },
        {
            name: 'Sep',
            Interns: 20
        },
        {
            name: 'Oct',
            Interns: 20
        },
        {
            name: 'Nov',
            Interns: 20
        },
        {
            name: 'Dec',
            Interns: 20
        }
    ]
  return (
    <div>
       <BarChart width={930} height={240} data={months}>
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Interns" fill='#2D8FA5' />
       </BarChart>
    </div>
  )
}

export default Bcharts
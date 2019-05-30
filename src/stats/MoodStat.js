import styled from 'styled-components'
import React from 'react'
import { LineChart, Line } from 'recharts'

const StyledMoodStat = styled.section`
  display: grid;
  gap: 10px;
  padding: 20px;
`

export default function MoodStat({ mood }) {
  const data = [
    {
      mood: 0,
    },
    {
      mood: 0,
    },
    {
      mood: 100,
    },
    {
      mood: 80,
    },
    {
      mood: 50,
    },
    {
      mood: 70,
    },
    {
      mood: 60,
    },
    {
      mood: mood,
    },
  ]

  return (
    <StyledMoodStat>
      <h2>MOOD</h2>
      <LineChart
        width={400}
        height={145}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <Line type="monotone" dataKey="mood" stroke="#ff7300" yAxisId={0} />
      </LineChart>
    </StyledMoodStat>
  )
}

import React from 'react'
import MoodStat from './MoodStat'
import HabitStreak from './HabitStreaks'
import Calendar from './Calendar'
import styled from 'styled-components'

const moment = require('moment')

const StyledStats = styled.section`
  display: grid;
  grid-template-rows: 1fr 2fr 4fr;
  align-items: center;
  height: 100vh;
  padding-bottom: 50px;
`

export default function Stats({ habits, days }) {
  const lastSevenDays = new Array(7).fill('').map((_, index) => {
    return moment()
      .subtract(index, 'days')
      .format('YYYY-MM-DD')
  })

  return (
    <StyledStats>
      <Calendar lastSevenDays={lastSevenDays} />
      <MoodStat days={days} lastSevenDays={lastSevenDays} />
      <HabitStreak lastSevenDays={lastSevenDays} habits={habits} days={days} />
    </StyledStats>
  )
}

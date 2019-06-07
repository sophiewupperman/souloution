import React from 'react'
import styled from 'styled-components'

// const StyledHabitStreaks = styled.section`
//   display: grid;
//   position: absolute;
//   right: 5px;
//   top: 334px;
//   z-index: 2;
// `
const StyledHabitStreak = styled.div`
  background: ${props => props.color || '#5e6a7e'};
  margin-bottom: 25px;
  min-width: 30px;
  min-height: 30px;
  border-radius: 50%;
`

const StyledHabitBar = styled.div`
  margin-bottom: 3.5px;
  margin-top: 3.5px;
  background: #b6c1d0;
  width: 100%;
  height: 30px;
  box-shadow: 0px 0.7px 3px rgba(0, 0, 0, 0.1);

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 10px 10px;
`

const StyledHabitStreakContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledHabitLabel = styled.label`
  position: sticky;
  left: 7px;
`
export default function HabitBar({ habit, lastSevenDays, days }) {
  function renderDay(day) {
    const currentDay = days.find(d => d.date === day)
    const currentHabit =
      currentDay && currentDay.habits.find(h => h.name === habit.name)
    const habitChosen = currentHabit && currentHabit.isChosen

    return (
      <StyledHabitStreakContainer>
        {habitChosen ? <StyledHabitStreak color={habit.color} /> : <div />}
      </StyledHabitStreakContainer>
    )
  }

  return (
    <div>
      <StyledHabitLabel forhtml={habit.name}>{habit.name}</StyledHabitLabel>
      <StyledHabitBar name={habit.name}>
        {lastSevenDays
          .slice()
          .reverse()
          .map(day => renderDay(day))}
      </StyledHabitBar>
    </div>
  )
}

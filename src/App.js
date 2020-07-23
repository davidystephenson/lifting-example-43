import React, { useState } from 'react';

function Row ({ teacher, onClick }) {
  // const { teacher, onClick } = props

  const { name, available } = teacher

  const message = available
    ? 'Yes!'
    : 'No.'

  return <tr>
    <td>{name}</td>
    <td>{message}</td>
    <td>
      <button
        onClick={() => onClick(name)}
      >
        toggle
      </button>
    </td>
  </tr>
}

function App () {
  const [teachers, setTeachers] = useState([
    { name: 'rein', available: true },
    { name: 'matias', available: false },
    { name: 'david', available: true }
  ])

  function onClick (teacherName) {
    // make a new array with updated data
    // - property: available
    // - teacher: teacher?
    const newTeachers = teachers.map(teacher => {
      const rightTeacher = teacher.name === teacherName

      if (rightTeacher) {
        const newAvailable = !teacher.available

        const copy = {
          ...teacher,
          available: newAvailable
        }

        return copy
      }

      return teacher
    })

    // replace the array in the state
    setTeachers(newTeachers)
  }

  const rows = teachers.map(teacher => (
    <Row
      teacher={teacher}
      key={teacher}
      onClick={onClick}
    />
  ))

  const total = teachers
    .filter(teacher => teacher.available)
    .length

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Available</th>
          <th>Toggle</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>

      total: {total}

    </table>
  );
}

export default App;

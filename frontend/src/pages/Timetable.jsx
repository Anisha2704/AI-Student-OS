import React, { useState } from 'react'

const Timtable = () => {

  const [name, setName] = useState("")
  const [difficulty, setDifficulty] = useState("")

  const [subjects, setSubjects] = useState([])

  const addSubject = (sub) => {
    if(!sub.trim()){
      return;
    }
    
    const newSubject = {subject: name, difficulty: difficulty || "Hard"}
    setSubjects(prev => [...prev,newSubject])
    console.log(subjects)
    setName("");
    setDifficulty("");
    }

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 m-4 p-2 rounded-xl bg-secondary'>
      <div className='border-r-2 border-(--text-tertiary) pr-2'>
        <h1 className='text-4xl font-bold my-6'>Create Your Study Plan</h1>
        <h3 className='text-2xl font-medium my-4'>Your Study List</h3>
        <p className='text-lg text-secondary my-2'>
          List all your subjects here so the AI can build a smart and efficient timetable customized to your daily study hours.
        </p>
        <div className='grid grid-cols-4 gap-2 my-4'>
          <input 
          type="text"
          placeholder='Add your Subjects...'
          className='input col-span-2 '
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
          <select 
            value={difficulty} 
            onChange={(e) => setDifficulty(e.target.value)}
            className='select'
          >
            <option value="" className='text-[var(--text-tertiary)]' disabled>Difficulty level</option>
            <option value="Hard">Hard</option>
            <option value="Medium">Medium</option>
            <option value="Easy">Easy</option>
          </select>
          <button 
          type="button" 
          className='btn btn-primary'
          onClick={()=>addSubject(name,difficulty)}
          >
            Add subject
          </button>
        </div>

        { subjects.map((sub,index) => (
          <div key={index} className=' grid grid-cols-3'>
            <p className='col-span-2'>{sub.subject}</p>
            <p>{sub.difficulty}</p>
          </div>
        )) }
      </div>
      <div>
         timetable output
      </div>
    </div>
  )
}

export default Timtable
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const HeaderForm = () => {
  const [category, setCategory] = useState("");
  const [id, setId] = useState("");

  const navigate = useNavigate();

  // after submmit redirect to routes
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${category}/${id}`)
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Search for: </label>
        <select name='category' value={category} onChange={e => setCategory(e.target.value)}>
          <option hidden>Select a Category</option>
          <option value="people">People</option>
          <option value="planets">Planets</option>
        </select>
        <label> Id: </label>
        <input type="number" value={id} onChange={e => setId(e.target.value)} />
        <button type='submit'> Submit </button>
      </form>
    </div>
  )
}

export default HeaderForm
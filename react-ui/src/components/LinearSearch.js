import React from 'react';

export default function LinearSearch(props) {
  return (
    <form onSubmit={(e) => props.linearUpdate(e)}>
      <h1>Linear Search</h1>
      <input placeholder="target" name="inputData" />
      <button type="submit">Search</button>
    </form>
  )
}
import React from 'react';

export default function BinarySearch(props) {
  return (
    <form onSubmit={(e) => props.binaryUpdate(e)}>
      <h1>Binary Search</h1>
      <input placeholder="target" name="inputData" />
      <button type="submit">Search</button>
    </form>
  )
}
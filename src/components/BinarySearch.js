import React from 'react';

export default function BinarySearch(props) {
  return (
    <form onSubmit={props.binaryUpdate}>
      <h1>Binary Search</h1>
      <textarea></textarea>
      <input placeholder="target" />
      <button type="submit">Search</button>
    </form>
  )
}
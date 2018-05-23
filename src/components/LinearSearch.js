import React from 'react';

export default function LinearSearch(props) {
  return (
    <form onSubmit={props.linearUpdate}>
      <h1>Linear Search</h1>
      <textarea placeholder="enter array of numbers"></textarea>
      <input placeholder="target" />
      <button type="submit">Search</button>
    </form>
  )
}
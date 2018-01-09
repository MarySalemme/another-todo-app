import React from 'react';
import PropTypes from 'prop-types';

// ({ submitTodo }) passes that function into the component as a property
const AddTodo = ({ submitTodo }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(event) => {
          // prevents the reloading of the page
          event.preventDefault();
          // enters the text in the input
          submitTodo(input.value);
          input.value = '';
        }}
      >

        <input 
          className="todo-input"
          // tells React to store a reference to this DOM element so it will be able to use it in the component
          ref={(element) => {
            input = element;
          }}
        />

        <button type="submit" className="todo-submit" >
          Add todo
        </button>
      </form>
    </div>
  );
};

// validate the prop in the component by telling it's a function and it's required
AddTodo.propTypes = {
  submitTodo: PropTypes.func.isRequired,
};

export default AddTodo;

import React, { useState } from "react";
import Modal from "./Modal";

function Todo2() {
    
  // USESTATE HOOKS

  const [inputValue, setinputValue] = useState("");
  const [todoList, settodoList] = useState([]);

  const [editinput, setEditinput] = useState(false);
  const [editValue, setEditValue] = useState("");

  // LOCAL FUNCTIONS

  function addFunc() {
    if (inputValue === "") {
      alert("input must not be empty");
    } else if (editinput) {
      todoList[editValue] = inputValue;
      settodoList(todoList);
      setEditinput(false);
    } else {
      settodoList([...todoList, inputValue]);
    }
    setinputValue("");
    console.log(todoList);
  }

  function deleteFunc(index) {
    console.log("deleted item");
    let deletedItems = [...todoList];
    deletedItems.splice(index, 1);
    settodoList(deletedItems);
    console.log(deletedItems);
  }
  function deleteAllFunc() {
    settodoList([]);
  }

  function editFunc(index) {
    setinputValue(todoList[index]);
    setEditValue(index);
    setEditinput(true);
  }

  // <div class="col-auto">
  //   <label for="inputPassword2" class="visually-hidden">Password</label>
  //   <input type="password" class="form-control" id="inputPassword2" placeholder="Password"/>
  // </div>
  return (
    <>
      <div className="container fluid">
        <h1 className="text-center mt-5 display-6 fw-bold ">
          Write Your Todos
        </h1>
        <p className="text-center fw-bold text-success">Make Your Day Easy</p>
        <input
          className="mt-5 form-control"
          placeholder="Write todos here"
          type="text"
          onChange={(e) => {
            setinputValue(e.target.value);
          }}
          value={inputValue}
        />
        <button
          className="d-grid gap-2 btn btn-primary mt-3 "
          type="button"
          onClick={addFunc}
        >
          Add+
        </button>

        <ol className="mt-3">
          {todoList.map((items, index) => {
            return (
              <li className="container mt-3">
                {items}
                <button
                  onClick={() => {
                    deleteFunc(index);
                  }}
                  className="btn btn-danger ms-3"
                >
                  delete
                </button>
                <button
                  onClick={() => {
                    editFunc(index);
                  }}
                  className="ms-3 btn btn-warning"
                >
                  edit
                </button>
              </li>
            );
          })}
        </ol>
        <Modal deleteFun={deleteAllFunc} />
      </div>
    </>
  );
}

export default Todo2;

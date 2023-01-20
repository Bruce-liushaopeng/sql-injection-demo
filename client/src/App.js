import { useState } from "react";
import useInputHook from "./hook";
function App() {
  const {firstName, lastName} = useInputHook();
  return (
    <div className="flex flex-row bg-gray-200 rounded-xl shadow border p-20 align-center pl-40 min-h-screen">
      <div className="basis-1/2 ">
          <p className="text-3xl text-gray-700 font-bold mb-5">
            Welcome New User!
          </p>
          <form className="flex flex-col w-40">
              <p className="text-lg text-blue-600 " > First Name:</p>
              <input className = "rounded-md p-1 focus:outline-none" ></input>
              <p className="text-lg text-blue-600 " > Last Name:</p>
              <input className = "rounded-md p-1 focus:outline-none"></input>
              <div className="my-5 grid place-content-end">
                <button className="bg-sky-300 rounded-md p-1 hover:bg-sky-500 shadow-md"> Submit</button>
              </div>
          </form>
        </div>
        <span class="w-full p-0.5 bg-blue-300 lg:w-1"></span>
        <div className="basis-1/2 ml-40">
          <table className=" rounded-md table-auto border-separate border border-spacing-4 border-solid border-cyan-500" >
            <thead className="font-bold text-gray-700 border">
              <tr className= "border-b">
                <td className= "border-r">First Name</td>
                <td className= "border-r">Last Name</td>
              </tr>
            </thead>
            <tbody>
              <tr className= "border-b">
                <td className= "border-r">Bruce</td>
                <td className= "border-r">Liu</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  );
}
export default App;
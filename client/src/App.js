import useInputHook from "./hook";

function App() {
  const {userName, password, userNameForView, nameList, userNameForViewOnChange, submitNewUser, handleViewClick, userNameOnChange, passwordOnChange} = useInputHook();
  return (
    <div className="flex flex-row bg-gray-200 rounded-xl shadow border p-20 align-center pl-40 min-h-screen">
      <div  className="flex flex-col">
        <div className="basis-1/2 ">
            <p className="text-3xl text-gray-700 font-bold mb-5">
              Welcome New User
            </p>
            <div className="flex flex-col w-40">
                <p className="text-lg text-blue-500 " > User Name:</p>
                <input className = "rounded-md p-1 focus:outline-none"value={userName} onChange={userNameOnChange}></input>
                <p className="text-lg text-blue-500 " > Password:</p>
                <input className = "rounded-md p-1 focus:outline-none"  value={password} onChange={passwordOnChange}></input>
                <div className="my-5 grid place-content-end">
                  <button className="bg-sky-300 rounded-md p-1 hover:bg-sky-500 shadow-md" 
                      onClick={submitNewUser} 
                      type="submit"> 
                        Submit
                  </button>
                </div>
                
            </div>
          </div>

          <div className="flex items-start flex-col">
            <p className="text-3xl text-gray-700 font-bold mb-5">
              View User Info
            </p>
            <p className="text-lg text-blue-500 " > User Name:</p>
            <div className="flex flex-col items-end">
                <input className = "w-40 rounded-md p-1 focus:outline-none mb-6" value={userNameForView} onChange={userNameForViewOnChange}></input>
                <button className="bg-sky-300 rounded-md p-1 hover:bg-sky-500 shadow-md w-14 align-bottom" 
                      onClick={handleViewClick} 
                      type="submit"> 
                        View
                </button>
            </div>
                
          </div>
        </div>
        <div className="w-full p-0.5 bg-blue-300 lg:w-1 ml-7 flex center">
          <span></span>
        </div>
        <div className="basis-1/2 ml-40">
          <p className="text-3xl text-gray-700 font-bold mb-5">
              DataBase View
            </p>
          <table className=" rounded-md table-auto border-separate border border-spacing-4 border-solid border-cyan-500 bg-white" >
            <thead className="font-bold text-gray-700 border">
              <tr className= "border-b border">
                <td className= "border-b-2  ">UserName</td>
                <td className= "border-b-2">Password</td>
              </tr>
            </thead>
            <tbody>
              {
                nameList.map((name, i) => {
                  return (
                    <tr key={i}>
                      <td className= "border-b-2" key={name[0]}>{name[0]}</td>
                      <td className= "border-b-2" key={name[1]}>{name[1]}</td>
                    </tr>
                )})
              }
              
            </tbody>
          </table>
        </div>

        
    </div>
  );
}
export default App;
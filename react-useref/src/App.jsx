const { useRef } = require("react")

function App()
{
  const physicsRef = useRef(null);
  const chemistryRef= useRef(null);
  const mathematicsRef = useRef(null);
  const totalRef = useRef(null);
//   const averageRef = useRef(null); 


  const handleAddition = () =>{
                    const phy = parseInt(physicsRef.current.value);
                    const che = parseInt(chemistryRef.current.value);
                    const maths = parseInt(mathematicsRef.current.value);
          const total = phy+che+maths;
        //   const average = total/3;

          totalRef.current.value = total;
        //   averageRef.current.value = average;
  }

  return(
          <>
       
             <h2> Total Marks</h2>
             <label>physics markks</label>
             <input type="number" ref={physicsRef} placeholder="Enter physics marks" />
             <label>chemistry marks</label>
             <input type="number" ref={chemistryRef}  placeholder="Enter chemistry marks" />
             <label>maths marks</label>
             <input type="number" ref={mathematicsRef} placeholder="Enter mathematcs marks" />

              <label>total marks</label>
             <input type="number" ref={totalRef} placeholder="Total" readOnly/>
             <button onClick={handleAddition}>Add</button>
          </>

  )
}
export default App;

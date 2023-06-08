function Parent(){
  const [stateA, setStateA] = useState(0);
  const [stateB, setStateB] = useState(0);

  return (
    <>
      <Child state={stateA} onStateChange={setStateA}/>
      <Child state={stateB} onStateChange={setStateB}/>
    </>
  )
}

function Child({state, onStateChange}){
  return (
    <button onClick={onStateChange}>{state}</button>
  )
}
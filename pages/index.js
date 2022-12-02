import axios from "axios"

export default function Home() {
  
  function handleSubmit() {
    axios.get("/api/hello").then(res => console.log(res))
  }
  
  
  return (
    <>
      <button onClick={handleSubmit}>askdkaskda</button>
    </>
  )
}

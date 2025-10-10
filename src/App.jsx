import { useState, useRef, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  const [InputTask, setInputTask] = useState('')
  const [todoslist, settodoslist] = useState([])
  const addNew = useRef(null)
  const addNew1 = useRef(null)
  const addNewBtn = useRef(null)
  const list = useRef(null)
  // const Edit = useRef(null)
  const isMounted = useRef(false)
  const addNewf = () => {
    if (addNew1.current) addNew1.current.style.display = "flex"
    if (addNew.current) addNew.current.focus()
    setInputTask("")
    const a = document.querySelectorAll(".Edit")
    for (let i = 0; i < a.length; i++) {
      const e = a[i];
      e.style.display="none"}


  }
  function Checkbox(id) {
  settodoslist(prev =>
    prev.map(item =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    )
  )
}
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
      return;
    }


    try {
      localStorage.setItem('todoslist', JSON.stringify(todoslist))
    } catch (err) {
      console.warn('Failed to save todos to localStorage', err)
    }


  }, [todoslist])


  useEffect(() => {
    
    try {
      const raw = localStorage.getItem('todoslist')

      if (!raw) return
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed)) {
        settodoslist(parsed)
      }
    } catch (err) {
      // corrupted data -> ignore and start fresh
      console.warn('Failed to load todos from localStorage', err)
    }
  }, [])

  function handleChange(e) {
    setInputTask(e.target.value)
  }
  
  useEffect(() => {
    function handleDocumentClick(e) {
      if (!addNew1.current) return
      if (addNew1.current.contains(e.target)) return
      if (addNewBtn.current && addNewBtn.current.contains(e.target)) return
      addNew1.current.style.display = "none"
    }

    document.addEventListener('mousedown', handleDocumentClick)
    return () => document.removeEventListener('mousedown', handleDocumentClick)
  }, [])
  function Newitem() {
    const a = document.querySelectorAll(".Edit")
    const b = document.querySelector(".closeedit")
    for (let i = 0; i < a.length; i++) {
      const e = a[i];
      e.style.display = "none"}
      b.style.display="none"
    if (InputTask === "") {
      alert("Add a valid Task")
    }
    else {

      settodoslist([...todoslist, { InputTask, isCompleted: false, id: Date.now() }])
      setInputTask("");
      console.log(todoslist);
    }
  }
  function HandleDelete(item,id) {
    settodoslist(prev => prev.filter(item => item.id !== id))
    const b = document.querySelector(".closeedit")
    if (todoslist.length===1){
      b.style.display="none"
    }
  }
  function Handleedit(item, id) {
    settodoslist(prev => prev.filter(item => item.id !== id))
    if (addNew1.current) addNew1.current.style.display = "flex"
    if (addNew.current) addNew.current.focus()
    setInputTask(item.InputTask)
  }
  function Handleedit1() {
    const a = document.querySelectorAll(".Edit")
    const b = document.querySelector(".closeedit")
    for (let i = 0; i < a.length; i++) {
      const e = a[i];
      if(e.style.display==="none"){e.style.display = "flex"

      }else {
        e.style.display = "none"}
    }
    if (b.style.display==="none" && (todoslist.length>=1)) {
      b.style.display = "flex"
    }
    else if((b.style.display==="none") && (todoslist.length===0)){
      b.style.display = "none"
    }
    else if(todoslist.length===0){
      b.style.display = "none"
    }
    else{
      b.style.display="none"
    }

  }
  function Handleedit2() {
    const a = document.querySelectorAll(".Edit")
    const b = document.querySelector(".closeedit")
    for (let i = 0; i < a.length; i++) {
      const e = a[i]
      e.style.display="none"
    }
    b.style.display="none"
    

  }
  async function Newitem1(e) {
    const a = document.querySelectorAll(".Edit")
    const b = document.querySelector(".closeedit")
    for (let i = 0; i < a.length; i++) {
      const e = a[i];
      e.style.display = "none"}
      b.style.display="none"
    if (e.key === 'Enter') {
      if (InputTask === "") {
        alert("Add a valid Task")
      }
      else {


        settodoslist([...todoslist, { InputTask, isCompleted: false, id: Date.now() }])
        setInputTask("");
        console.log(todoslist);

      }
    }

  }

  return (
    <>
      <Navbar />
      <main className='m-auto w-[50vw] bg-[#CAE4DB] rounded-2xl box-border p-2.5 mt-3 '>
        <div>
          <div className='text-2xl font-bold'>
            Todo List Maker
          </div>
          <div className='flex gap-2 mt-2'>

            <button ref={addNewBtn} className={`flex justify-center items-center bg-purple-600 rounded-xl w-[120px] cursor-pointer  transition-transform duration-150 ease-in-out hover:scale-101 active:scale-99 h-[30px]
             `} onClick={addNewf}  >
              <span className='text-white'>Add New </span>
              <img src="src/assets/format_list_bulleted_add_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
            </button>
            <button onClick={Handleedit1} className={`flex justify-center items-center bg-purple-600 rounded-xl w-[90px] cursor-pointer  transition-transform duration-150 ease-in-out hover:scale-101 active:scale-99 h-[30px]
              `} >
              <span className='text-white'>Edit</span>
              <img src="src\\assets\\edit_note_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
            </button>
            <button style={{display:"none"}} className='w-[30px] h-[30px] rounded-full hover:bg-red-700  items-center justify-center cursor-pointer closeedit' onClick={Handleedit2} >
              <img src="src/assets/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
            </button>

          </div>
          <div ref={addNew1} className="input w-[46vw] justify-start mt-1.5 hidden ">
            <input type="text" name="Newtask" id="nt1" className='border-2  h-9   border-black bg-white w-[42vw] rounded-l-2xl border-r-0 pl-4 text-wrap input1' value={InputTask} onChange={handleChange} onKeyDown={Newitem1} ref={addNew} />
            <button className="save bg-purple-600 w-[4vw] rounded-r-2xl border-2 border-l-0 cursor-pointer " onClick={Newitem}>
              Save
            </button>
          </div>
        </div>
        <div className='w-[48.3vw] flex justify-center'>
          <div className='w-[45vw] border-1 border-gray-400 mt-5 '></div>
        </div>
        <div className='mt-5'>
          <span className='text-xl font-bold '>Your Tasks</span>
        </div>
        <div className={todoslist.length === 0 ? "task flex w-[48.3vw] justify-center border-dotted border-1 h-[40vh] items-center text-[#4e6190] italic" : "task flex w-[48.3vw] justify-start border-dotted border-1  items-start text-[#4e6190] italic"}>
          <ol className={`list-[number]`} ref={list}>
            {todoslist.map(item => {
              return <div className='flex ml-3 w-[45vw] justify-between' key={item.id}>
                <div className='flex '>
                  <input type="checkbox"  className='Mycheckbox' onChange={() => Checkbox(item.id)} checked={!!item.isCompleted} ></input>
                  <li className={item.isCompleted ? " ml-8 line-through h-[30px] text-black text-xl not-italic" : "h-[30px] ml-8 text-black text-xl not-italic"}>{item.InputTask}</li>
                </div>
                <div className='Edit w-[70px] ' style={{display:'none'}}>
                  <button className='cursor-pointer rounded-full w-[30px] h-[30px] flex justify-center items-center  hover:bg-gray-300' onClick={() => Handleedit(item, item.id)}>
                    <img src="src\assets\delete.svg" alt="" />
                  </button>
                  <button className='cursor-pointer rounded-full w-[30px] h-[30px] flex justify-center items-center hover:bg-red-700' onClick={() => HandleDelete(item,item.id)}>
                    <img src="src/assets/delete_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
                  </button>
                </div>
              </div>
            })}

          </ol>
          <span className={todoslist.length === 0 ? "" : "hidden"}>There are no tasks right now</span>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App

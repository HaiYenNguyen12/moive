import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home"
function App() {

  // const [todoItem, setItem] = useState("");
  // const [todoList, setList] = useState([]);

  // const onChange = (event) => setItem(event.target.value)
  // const onSubmit = (event) =>
  //  {event.preventDefault();
  //   if(todoItem === "")
  //   return;
  //   setList((currenList) => [todoItem, ...currenList]);
  //   setItem("");
  //  }
  // console.log(todoList)
  // return  <div>
  // <form onSubmit={onSubmit}>
  // <h1>todoList ---{todoList.length}---</h1>
  // <input value={todoItem} onChange={onChange} type="text" placeholder="Put some TodoItem here"></input>
  // <button>Add a Todo</button>
  // </form>
  // <hr></hr>
  //   <ul>
  //   {todoList.map((item,index) => <li key={index}>{item}</li>)}
  //   </ul>
  // </div>;



// const [showing, setShowing] = useState(false);

// const onClick = () => setShowing((prev)=> !prev)

// return(
//   <div>
//     {showing ?  <Hello /> : null }
//     <button onClick={onClick}>{showing? "Hide" : "Show"}</button>
//   </div>
// );

//  Xu li phan Loding cua useEffect va nap API
// const[loading,setLoading]  = useState(true);
// const [coins, setCoin] = useState([]);
// const [money, setMoney] = useState("");
// const [price, setPrice] = useState(0);
// const [number, setNumber] = useState(0);
// const onChange = (event) => {
//   setMoney(event.target.value);
//  console.log(money);
// }
// const onChangeList = (event) => { setPrice(event.target.value);
//   console.log(price);
  
  
// }
// useEffect(()=>setNumber(Math.round(parseInt(money)/price)),[price,money]);
// useEffect(()=>{
//   fetch("https://api.coinpaprika.com/v1/tickers")
//   .then((response)=>
//    response.json()).then(json =>{ setCoin(json);
//     setLoading(false);
//   }); 
//     },[]);
// return (
//   <div>
//   <h1>The Coin --- {coins.length} ---</h1>
//   <input type =" text" onChange={onChange} value = {money}>
    
//   </input>
//     <hr></hr>
//     {loading ? <strong>Loading ...</strong> :    ( <select onChange={onChangeList} value={price} >
//     {coins.map((coin,index)=>
//       <option key = {index} value={coin.quotes.USD.price}>
//         {coin.name} ({coin.symbol} - {coin.quotes.USD.price} USD)
//       </option>
//       )
//     }
//     </select>)}
//     { (price !== 0 && money !== 0) ?
//     <h1>The number of this coin is {number}</h1> : <h1>Let change some coins you want</h1>}
//   </div>
// );

 return <Router>
    <Routes>
      <Route path="/movie/:id" element={<Detail />} >
  
      </Route>
      <Route path="/" element={<Home />}>
      </Route>
 
    </Routes>
  </Router>;
   
   }

export default App;

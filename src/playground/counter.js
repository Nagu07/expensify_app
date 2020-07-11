//babel src/playground/counter.js --out-file=public/scripts/app.js --presets=env,react --watch --> Babel script to run

class CounterApp extends React.Component
{
  constructor(props)
  {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.resetCount = this.resetCount.bind(this); 
    this.state = {
        count:0
    };
  }
  
  componentDidMount()
  {
    const json = localStorage.getItem('json');
    const count = JSON.parse(json);
    //const count = parseInt(json,10);
    console.log(count);

    if(!isNaN(count))
    {
      console.log('setting state');
      this.setState(() => ({count}));
    }
    
  }

  componentDidUpdate(revProps,prevState)
  {
    if(prevState.count !== this.state.count)
    {
      const json = JSON.stringify(this.state.count);
      localStorage.setItem('json',json);
    }
  }

  addOne()
  {
    this.setState((prevState)=>{
        return {
          count : prevState.count + 1
        }
    });
  }

  minusOne()
  {
    this.setState((prevState)=>{
      return {
        count : prevState.count - 1
      }
    });
  }
  
  resetCount()
  {
    this.setState((prevState)=>{
      return {
        count : 0
      }
    });
  }

  render()
  {
    return(
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.resetCount}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<CounterApp />, document.getElementById('app'));



// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
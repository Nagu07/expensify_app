// console.log('App.js is running!');

// //babel src/playground/build_it_visible.js --out-file=public/scripts/app.js --presets=env,react --watch --> Babel script to run

class ToggleVisibility extends React.Component
{
  constructor(props)
  {
    super(props);
    this.toggleVisiblity = this.toggleVisiblity.bind(this);
    this.state =
    {
      visibility:false
    };
  }

  toggleVisiblity()
  {
    this.setState((prevState) => {
      return {
        visibility : !prevState.visibility
      };
    })
  }

  render()
  {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisiblity}>Show details</button>
        {
          this.state.visibility && <p>Here are Some additional details</p>
        }
      </div>
    );
  }
}

ReactDOM.render(<ToggleVisibility />,document.getElementById('app'));












// const app = {
//   info:false
// };

// const toggleVisibility = () => {
//   app.info=!app.info;
//   render();
// }

// const appRoot = document.getElementById('app');

// const render = () => {
//   const template = (
//     <div>
//       <h1>VISIBILITY TOGGLE</h1>
//       <button onClick={toggleVisibility}>Toggle Visibility</button>
//       { app.info && <p>Hey Here are some of the details</p>}
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };

// render();




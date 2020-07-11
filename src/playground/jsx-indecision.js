console.log('App.js is running!');

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch --> Babel script to run

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};


const onFormSubmit = (e) => {
  e.preventDefault();
   
  const option = e.target.elements.option.value;
  console.log('Form submitted');  
  if(option)
  {
    app.options.push(option);  
    e.target.elements.option.value = '';
  }
  render();
}

const removeOptions = (e) => {
  e.preventDefault();
  app.options = [];
  render();
}

const getRandomOption = (e) => {
  const randomOpt = Math.floor(Math.random() * app.options.length);
  const finalOpt = app.options[randomOpt];
  alert(finalOpt);
}

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <ol>
      {
        app.options.map((option) => <li key={option}>{option}</li>)
      }
      </ol>
      <button disabled={app.options.length == 0} onClick={getRandomOption}>What should i do?</button>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
      <button onClick={removeOptions}>Remove All Options</button>
    </div>
  );
 
    ReactDOM.render(template, appRoot);
};

render();




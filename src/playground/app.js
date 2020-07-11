class IndecisionApp extends React.Component
{
  constructor(props)
  {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.pickAnOption = this.pickAnOption.bind(this);
    this.addOption = this.addOption.bind(this);
    this.handleDeleteSingle = this.handleDeleteSingle.bind(this);
    this.state = {
      options: ['1','2','3','4']
    };
  }
  
  componentDidMount()
  {
    try{
      const json = localStorage.getItem('json');
      const options = JSON.parse(json);

      if(options)
      {
        this.setState(() => ({options}))
      }
    }
    catch(e)
    {
      console.log(e.error);
    }
  }

  componentDidUpdate(prevProps,prevState)
  {
    if(prevState.options.length !== this.state.options.length)
    {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('json',json);
    }
  }
  
  handleDelete()
  {
    this.setState(() => ({options : []}));
  }

  handleDeleteSingle(optionToRemove)
  {
    this.setState((prevState) => ({
      options : prevState.options.filter((option) => {
        return optionToRemove !== option
      })
    }));
  }

  pickAnOption()
  {
    const randomOpt = Math.floor(Math.random() * this.state.options.length);
    const finalOpt = this.state.options[randomOpt];
    alert(finalOpt);
  }

  addOption(option)
  {
      if(!option)
      {
        return `Please enter a valid item`;
      }
      else if(this.state.options.indexOf(option) > -1)
      {
        return `This item already exist`;
      }
      else
      {
      this.setState((prevState) => ({options : prevState.options.concat(option)}));
      }
  }

  render()
  {
    const app = {
      title: 'Indecision App',
      subtitle: 'Put your life in the hands of a computer',
      options: ['This is 1st','2nd one']
    };
    return(
      <div>
        <Header title={app.title} sub={app.subtitle}/>
        <Action hasOptions={this.state.options.length > 0} pickOpt={this.pickAnOption}/>
        <Options options={this.state.options} handleDeleteOptions = {this.handleDelete} handleDeleteSingle = {this.handleDeleteSingle}/>
        <AddOption optionsadd={this.addOption}/>
      </div>
    );
  }
}

const Header = (props) => {
  return(
    <div>
    <h1>{props.title}</h1>
    <p>{props.sub}</p>
    </div>
  );
}

const Action = (props) => {
  return(<button disabled={!props.hasOptions} onClick={props.pickOpt}>What should i do?</button>);        
}

const Options = (props) => {
  return(
    <div>
      <button onClick={props.handleDeleteOptions}>Clear all options</button>
      <ol>
        {
          props.options.map((option) => <Option key={option} value={option} handleDeleteOption = {props.handleDeleteSingle}/>)
        }
      </ol>
    </div>
  );
}

const Option = (props) => {
  return(
    <div>
    <li>{props.value}</li>
    <button onClick={(e) => {props.handleDeleteOption(props.value)}}>remove</button>
    </div>
    );
}

class AddOption extends React.Component
{
  constructor(props){
    super(props);
    this.addOption = this.addOption.bind(this);
    this.state = ({
        error:undefined
    });
  }
  addOption(e)
  {
      e.preventDefault();
      const option = e.target.elements.option.value.trim();
      const error = this.props.optionsadd(option);

      this.setState(() => ({error}))
      e.target.elements.option.value = '';
  }
  render()
  {
    return(
      <div>
      { this.state.error && <p>{this.state.error}</p> }
      <form onSubmit={this.addOption}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));
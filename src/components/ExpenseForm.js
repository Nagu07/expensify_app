import React from 'react';

export default class ExpenseForm extends React.Component {
    constructor(props)
    {
        super(props);
        this.state =
        {
            description:props.expense ? props.expense.description : '',
            amount:props.expense ? props.expense.amount : 0,
            note:props.expense ? props.expense.note : ''
        }
    }

    setDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}))
    }
    setAmountChange = (e) => {
        const amount = e.target.value;
        this.setState(() => ({amount}))
    }
    setExpenseNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}))
    }
    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount)
        {
            alert('Please enter description and amount');
        }
        else
        {
            const description = this.state.description;
            const amount = this.state.amount;
            const note = this.state.note;
            this.props.onSubmit({description,amount,note});
            console.log('Going to call the props reference')
        }
    }
    render()
    {
    return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="description"
                        autoFocus
                        onChange={this.setDescriptionChange}
                        value={this.state.description}
                    />
                    <input 
                        type="number"
                        placeholder="amount"
                        onChange={this.setAmountChange}
                        value={this.state.amount}
                    />
                    <textarea
                        placeholder="note (optional)"
                        onChange = {this.setExpenseNoteChange}
                        value={this.state.note}
                    >
                    </textarea>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
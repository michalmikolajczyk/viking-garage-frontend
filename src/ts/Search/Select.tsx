import React, { Component } from 'react';
import {
  Divider,
  Menu,
  MenuItem,
  Popover,
  SelectField,
  TextField,
} from 'material-ui';
import SuperSelect from 'material-ui-superselectfield';


export default class Select extends Component<any, any> {

  public selectItems = [];

  constructor(props) {
    super(props);
    this.state = {
      select: [],
    };
    this.createSelect(props.selectItems);
    console.log(this.selectItems);

    this.handleSelection = this.handleSelection.bind(this);
  }



  public createSelect(items) {
    const createGroup = (values) => 
      (values && values.length > 0)
      ? values.map((item, index) => (
            <div key={index} value={item} className="select-item">
              {item}
            </div>        
          )
        )
      : null

    this.selectItems = items.map((item, index) => (
        <optgroup key={index} label={item.group}>
          {createGroup(item.value)}
        </optgroup>
      )
    )
  }

  public handleChange = (event, index, value) => undefined //this.setState({value});


  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  public onChange() {}

  public handleSelection(values, name) {
    console.warn(values);
    console.warn(name);
    this.setState({ select: values })
  } 

  public onRequestDelete = (key, name) => event => {
    this.setState({ [name]: this.state[name].filter((v, i) => i !== key) })
  }

  public handleCustomDisplaySelections(values) {
    return values.length
      ? (
          <div className="selected">
            {
              values.map(({ value, label }) => label || value).join(', ')
            }
          </div>
      ) :  <div className="selected empty">Dirtbike</div>
  }

  public render() {  
    return (
      <div className="super-select">
        <SuperSelect
          style={{width: 300}}
          multiple={true}
          onChange={this.handleSelection}
          hintText="Select some values"
          value={this.state.select}
          selectionsRenderer={this.handleCustomDisplaySelections}
        >
          {this.selectItems}
        </SuperSelect>
      </div>);
  }
}

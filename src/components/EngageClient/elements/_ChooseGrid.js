import React, { Component } from "react";
import Chip from "./Chip";
import ButtonBar from "./ButtonBar";
import Search from "../ui/Search";

export default class ChooseGrid extends Component {
  constructor(props) {
    super(props);

    const { tag = "tag", price = "price", returnCtx, prompt } = props.args;

    const OPTIONS = [];

    props.args.options.forEach(o => {
      const record = {};
      console.log(o);
      console.log(name);
      console.log(o[name]);
      if (o.name) {
        record.name = o.name;
        //build search records...
        const lcName = o.name.toLowerCase();
        record.searchLabel = lcName;
        const words = lcName.split(" ");
        record.search2 = words[1] ? words[1] : "";
        record.search3 = words[2] ? words[2] : "";
      }
      if (o.tag) record.tag = o.tag.toLowerCase();
      if (o.price) record.price = o.price;
      if (o.description) record.description = o.description;
      if (o.image) record.image = o.image;
      if (o.icon) record.icon = o.icon;
      if (o.value) record.value = o.value;
      record.option = o;
      OPTIONS.push(record);
    });

    this.state = {
      allOptions: OPTIONS,
      options: OPTIONS,
      searchText: "",
      showLimit: 12,
      hidden: this.props.hidden,
      numSelected: 0,
      selected: {}
    };
  }

  hide() {
    this.setState({ hidden: true });
  }

  selectHandler(value) {
    console.log(`in select handler with:`);
    console.log(value);

    // if we have multiple, we add to selected...
    if (this.props.args.multiple) {
      const selected = this.state.selected;
      selected[value] = !selected[value];
      this.setState({ selected });
    } else {
      // single click selection...
      const ctxout = {};
      ctxout[this.props.args.returnCtx] = value;
      this.props.handler({ ctxout });
      this.hide();
    }
  }

  submitHandler(action) {
    this.setState({ submitAction: action });
    // todo handle cancel...by checking action?!
    if (action === "cancel") {
      this.hide();
    } else {
      // get selected..
      const keys = Object.keys(this.state.selected);
      const selectedRecords = [];
      const { name = "n" } = this.props.args;
      keys.forEach(k => {
        if (this.state.selected[k]) {
          // lets find the record
          const [record] = this.props.args.options.filter(o => o[name] === k);
          if (!record) console.log(`can't find record?!!!! bad`);
          selectedRecords.push(record);
        }
      });
      const ctxout = {};
      ctxout[this.props.args.returnCtx] = selectedRecords;
      this.props.handler({ ctxout });
      this.hide();
    }
  }

  searchHandler(event) {
    const { value } = event.target;
    // if (value === "") return;
    this.setState({ searchText: value });
    const valLen = value.length;
    const V = value.toLowerCase();
    const options = this.state.allOptions.filter(
      o =>
        o.searchLabel.slice(0, valLen) === V ||
        o.search2.slice(0, valLen) === V ||
        o.search3.slice(0, valLen) === V
    );
    this.setState({ options });
  }

  render() {
    // if (this.state.hidden) return <div></div>;

    // return <div>Choose Grid: {JSON.stringify(this.props.args)}</div>;

    const { buttonbarTheme, buttonTheme } = this.props;

    const {
      size = "small",
      color,
      backgroundColor,
      searchPlaceholder = "search for something else..",
      search,
      border,
      shape = "square",
      opacity,
      multiple,
      handler,
      prompt,
      animationin = "",
      animationout = "",
      chip,
      sortBy = "name"
    } = this.props.args;

    // we auto limit the options displayed
    const OPTIONS =
      this.state.options.length > this.state.showLimit
        ? this.state.options.slice(0, this.state.showLimit)
        : this.state.options;
    const SORTED = OPTIONS.sort(o => o.name);

    return (
      <div className={`flex flex-col justify-between items-center animated`}>
        {/* {JSON.stringify(this.state.allOptions)} */}
        <div className="text-2xl">{prompt}</div>
        {multiple && <div>{JSON.stringify(this.state.selected)} selected</div>}
        {/* SEARCH OPTION START */}
        {(search || this.props.args.options.length > this.state.showLimit) && (
          <Search
            searchHandler={this.searchHandler.bind(this)}
            searchText={this.state.searchText}
            size={size}
            searchPlaceholder={searchPlaceholder}
          />
        )}
        {/* SEARCH OPTION END */}

        <div className={`flex flex-wrap justify-center items-center mx-2 my-1`}>
          {SORTED.map((option, i) => (
            <Chip
              key={i}
              args={{
                size,
                color,
                chip,
                backgroundColor,
                border,
                shape,
                opacity,
                name: option.name,
                image: option.image,
                icon: option.icon,
                description: option.description,
                value: option.value
              }}
              selected={true}
              handler={this.selectHandler.bind(this)}
            />
          ))}
        </div>
        {/* ACTION BAR START */}
        {multiple && (
          <div className="text-center">
            <ButtonBar
              theme={buttonbarTheme}
              buttonTheme={buttonTheme}
              handler={this.submitHandler.bind(this)}
              args={{
                color: "blue",
                size,
                choices: [
                  {
                    action: "done",
                    value: "done",
                    label: "Done",
                    icon: "check"
                  },
                  {
                    action: "cancel",
                    value: "cancel",
                    label: "Cancel",
                    icon: "delete"
                  }
                ]
              }}
            />
          </div>
        )}
        {/* ACTIONBAR END */}
      </div>
    );
  }
}

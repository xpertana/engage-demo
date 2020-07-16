import React, { Component } from "react";
import Icon from "./Icon";
import TimeChip from "../chips/TimeChip";
import DateChip from "../chips/DateChip";
import ImageChip from "../chips/ImageChip";
import ListChip from "../chips/ListChip";
import IconChip from "../chips/IconChip";
import TextChip from "../chips/TextChip";
import colorify from "../lib/colorify";

export default class Grid extends Component {
  showIconChip(value, options) {
    const { accentFontSize, iconSize, color } = options;

    const backgroundColor = value.color ? value.color : color;

    return (
      <div
        style={{ backgroundColor }}
        className="flex flex-col justify-center items-center m-1 p-2"
      >
        <div className="flex-1">
          <Icon type={value.icon} size={iconSize} />
        </div>

        <div style={{ fontSize: accentFontSize }} className="text-center">
          {value.name}
        </div>
      </div>
    );
  }

  showTextChip(value, options) {
    const { fontSize, nocolor, color } = options;

    const backgroundColor = value.color
      ? colorify(value.color)
      : colorify(color);

    return (
      <div
        style={{ backgroundColor }}
        className="rounded bg-blue-400 flex flex-col m-1 p-2"
      >
        <div style={{ fontSize }} className="text-center">
          {value.name}
        </div>
      </div>
    );
  }

  showImageChip(value, options) {
    const { accentFontSize, imageSize, notext } = options;

    return (
      <div
        style={{ width: imageSize, height: imageSize }}
        className="bg-white border rounded flex flex-col justify-between items-center m-1 p-2"
      >
        <div className="flex-1">
          <img src={value.image} />
        </div>
        {!notext && (
          <div style={{ fontSize: accentFontSize }} className="text-center">
            {value.name}
          </div>
        )}
      </div>
    );
  }

  showChip(value, options) {
    return this.showTextChip(value, options);

    if (value.icon) return this.showIconChip(value, options);
    else if (value.image) return this.showImageChip(value, options);
    else return this.showTextChip(value, options);
  }

  render() {
    if (this.props.hidden) return <div></div>;

    const {
      type = "text",
      size = "medium",
      color = "gray",
      sortBy = "name",
      data
    } = this.props.args;

    const style = styleMap[size];
    const options = { ...style };

    if (!data || data.length === 0) return <div>invalid group</div>;

    // values is either a "simple" group [x,y,z] or a group of items [{name:x,...}, {name:y,...}]
    // this works best with the latter.

    // convert simple if needed...
    //sniff first value...
    let V = data;
    if (typeof data[0] !== "object") {
      // convert simple type...
      V = data.map(v => {
        return { name: v, value: { name: v } };
      });
    }

    return (
      <div className="flex flex-col justify-between items-center">
        <div className={`flex flex-wrap justify-center items-center mx-2 my-1`}>
          {V.map(value => this.showChip(value, options))}
        </div>
      </div>
    );
  }
}

const styleMap = {
  tiny: {
    fontSize: 8,
    iconSize: 24,
    imageSize: 50
  },
  small: {
    fontSize: 12,
    accentFontSize: 10,
    iconSize: 28,
    imageSize: 80
  },
  medium: {
    fontSize: 14,
    accentFontSize: 12,
    iconSize: 32,
    imageSize: 100
  },
  large: {
    fontSize: 20,
    accentFontSize: 14,
    imageSize: 150
  },
  huge: {
    fontSize: 24,
    accentFontSize: 18,
    imageSize: 200
  }
};

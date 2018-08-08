import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import colors from "../colors";

const List = props => (
  <ul
    className={css`
      list-style-type: none;
      max-height: ${props.maxHeight || "auto"};
      overflow-y: auto;
    `}
  >
    {!props.items.length
      ? props.renderPlaceholder()
      : props.items.map(item => (
          <li
            key={props.getItemKey(item)}
            className={css`
              border-bottom: 1px solid ${colors.backgroundHighlight};
            `}
          >
            {props.children(item)}
          </li>
        ))}
  </ul>
);

List.propTypes = {
  renderPlaceholder: PropTypes.func,
  getItemKey: PropTypes.func,
  children: PropTypes.func,
  items: PropTypes.array,
  maxHeight: PropTypes.string
};

export default List;

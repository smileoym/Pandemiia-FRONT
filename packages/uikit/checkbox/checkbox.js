import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ReactCheckbox from 'rc-checkbox';

import { Box, Text } from '@pinua/uikit';

import './checkbox.scss';

class Checkbox extends PureComponent {
  static propTypes = {
    rounded: PropTypes.bool,
    label: PropTypes.node,
    value: PropTypes.bool,
    radio: PropTypes.bool,
    onChange: PropTypes.func
  };

  render() {
    const { className, rounded, value, label, radio, ...props } = this.props;
    const classes = cn(className, {
      'pin-checkbox-rounded': rounded,
      'pin-checkbox-radio': radio
    });

    const checkbox = (
      <ReactCheckbox type="checkbox" prefixCls="pin-checkbox" className={classes} {...props} checked={value} />
    );

    if (label) {
      return (
        <Box align="center" component="label">
          {checkbox}
          {typeof label === 'string' ? (
            <Box inject left="s">
              <Text size="s">{label}</Text>
            </Box>
          ) : (
            label
          )}
        </Box>
      );
    }

    return checkbox;
  }
}

export default Checkbox;

import './button.scss';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { Button } from "@chakra-ui/react";
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const TheButton = ({ colorScheme, backgroundColor, shape, size, label, ...props }) => {
  return (
    <ChakraProvider>
      <Button
        type="button"
        colorScheme={colorScheme}
        style={backgroundColor && { backgroundColor }}
        borderRadius={shape=="rounded" ? 'full' : shape=="slightlyRounded" ? 'md' : 'none' }
        p='5'
        fontSize={size}
        {...props}
      >
        {label}
      </Button>
    </ChakraProvider>
  );
};

TheButton.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  shape: PropTypes.oneOf(['rounded', 'squared', 'slightlyRounded']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

TheButton.defaultProps = {
  backgroundColor: null,
  shape: 'rounded',
  onClick: undefined,
  colorScheme: 'blue'
};

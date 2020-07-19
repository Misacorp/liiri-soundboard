import { css } from 'styled-components/macro';

/**
 * Resets <button> element native styles.
 */
export default css`
  background-color: transparent;
  color: inherit;
  border: none;
  font-family: ${({ theme }) => theme.typography.base.fontFamily};
`;
